import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonText,
  IonButton,
} from '@ionic/react';

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

interface ProgresoData {
  id: number;
  fecha: string;
  ejercicio: string;
  seriesRealizadas: number;
  repeticionesRealizadas: number;
  pesoUtilizado: number;
  usuario: Usuario;
}

const Progreso: React.FC = () => {
  const [progresos, setProgresos] = useState<ProgresoData[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/progreso')
      .then(res => res.json())
      .then(data => setProgresos(data))
      .catch(error => console.error('Error al obtener progreso:', error));
  }, []);

  const renderProgreso = () => {
    return progresos.map((item, index) => {
      const progresoAnterior = progresos[index - 1];

      let comparacion = '';
      if (
        progresoAnterior &&
        progresoAnterior.ejercicio === item.ejercicio &&
        progresoAnterior.usuario.id === item.usuario.id
      ) {
        const diferenciaPeso = item.pesoUtilizado - progresoAnterior.pesoUtilizado;
        comparacion =
          diferenciaPeso > 0
            ? `📈 ¡Subiste ${diferenciaPeso} kg desde el ${progresoAnterior.fecha}!`
            : diferenciaPeso < 0
              ? `📉 Bajaste ${Math.abs(diferenciaPeso)} kg desde el ${progresoAnterior.fecha}.`
              : `⚖️ Sin cambios desde el ${progresoAnterior.fecha}.`;
      }

      return (
        <div
          key={item.id}
          style={{
            backgroundColor: '#f0f8ff',
            borderRadius: '20px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        >
          <IonText>
            <h2 style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>
              {item.usuario.nombre} - {item.ejercicio}
            </h2>
            <p style={{ textAlign: 'center', margin: '8px 0', color: '#555' }}>
              📅 Fecha: {item.fecha}
            </p>
            <p style={{ textAlign: 'center', margin: '8px 0', color: '#555' }}>
              🔁 Series: {item.seriesRealizadas} | 🔂 Reps: {item.repeticionesRealizadas}
            </p>
            <p style={{ textAlign: 'center', margin: '8px 0', color: '#222', fontWeight: '600' }}>
              🏋️ Peso: {item.pesoUtilizado} kg
            </p>
            {comparacion && (
              <p style={{ textAlign: 'center', color: '#2e7d32', fontWeight: 'bold' }}>
                {comparacion}
              </p>
            )}
            {/* ✅ Mensaje de motivación */}
            <p style={{ textAlign: 'center', color: '#0077b6', fontStyle: 'italic', marginTop: '10px' }}>
              🎯 ¡Buen trabajo! Sigue entrenando y superando tus límites. 💪
            </p>
          </IonText>
        </div>
      );
    });
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{ backgroundColor: '#e6f2ff' }}
      >
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px'
        }}>
          <IonText>
            <h1 style={{
              textAlign: 'center',
              color: '#0077b6',
              fontWeight: '900',
              fontSize: '2rem',
              marginBottom: '20px'
            }}>
              📈 Progreso de Ejercicios
            </h1>
          </IonText>

          {renderProgreso()}

          <IonButton
            expand="block"
            color="medium"
            style={{
              marginTop: '30px',
              fontWeight: 'bold',
              borderRadius: '15px'
            }}
            routerLink="/cambio"
          >
            ← Volver al Inicio
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Progreso;
