import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonText
} from '@ionic/react';
import axios from 'axios';

interface Usuario {
  id: number;
  nombre?: string;
  correo?: string;
}

interface Rutina {
  id: number;
  nombre: string;
  descripcion: string;
  fechaCreacion: string;
  usuario: Usuario;
}

const RutinasPage: React.FC = () => {
  const [rutinas, setRutinas] = useState<Rutina[]>([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    cargarRutinas();
  }, []);

  const cargarRutinas = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/rutina');
      setRutinas(res.data);
    } catch (error) {
      console.error('Error al obtener las rutinas', error);
    }
  };

  const agregarRutina = async () => {
    if (!nombre || !descripcion) return;

    const nuevaRutina = {
      nombre,
      descripcion,
      fechaCreacion: new Date().toISOString().split('T')[0],
      usuario: {
        id: 1,
        nombre: 'Usuario',
        correo: 'usuario@correo.com'
      }
    };

    try {
      await axios.post('http://localhost:8080/api/rutina', nuevaRutina);
      setNombre('');
      setDescripcion('');
      cargarRutinas();
    } catch (error) {
      console.error('Error al agregar rutina', error);
    }
  };

  const eliminarRutina = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/rutina/${id}`);
      cargarRutinas();
    } catch (error) {
      console.error('Error al eliminar rutina', error);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ background: '#FDEFD9', minHeight: '100vh' }}>
        <div style={{
          background: '#FFA726',
          padding: '25px',
          borderRadius: '20px',
          maxWidth: '600px',
          margin: '40px auto',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <IonText>
            <h2 style={{
              textAlign: 'center',
              color: '#111',
              marginBottom: '25px',
              fontWeight: '900'
            }}>
              Registro de Rutinas 
            </h2>
          </IonText>

          <IonInput
            value={nombre}
            placeholder="Nombre de la rutina"
            onIonChange={(e) => setNombre(e.detail.value!)}
            style={{
              marginBottom: '15px',
              borderRadius: '10px',
              padding: '10px',
              border: '1px solid #aaa',
              color: '#000',
              fontWeight: 'bold'
            }}
            clearInput
          />
          <IonInput
            value={descripcion}
            placeholder="Descripción"
            onIonChange={(e) => setDescripcion(e.detail.value!)}
            style={{
              marginBottom: '20px',
              borderRadius: '10px',
              padding: '10px',
              border: '1px solid #aaa',
              color: '#000',
              fontWeight: 'bold'
            }}
            clearInput
          />
          <IonButton expand="block" onClick={agregarRutina} color="primary" style={{ fontWeight: 'bold' }}>
            ➕ Agregar Rutina
          </IonButton>

          <IonList style={{ marginTop: '30px' }}>
            {rutinas.map((rutina) => (
              <div key={rutina.id} style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '15px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <IonLabel>
                  <h3 style={{ color: '#111', fontWeight: '700' }}>{rutina.nombre}</h3>
                  <p style={{ color: '#333', margin: '8px 0' }}>{rutina.descripcion}</p>
                  <small style={{ color: '#555' }}>📅 Creada: {rutina.fechaCreacion}</small><br />
                  <small style={{ color: '#555' }}>👤 Usuario: {rutina.usuario?.nombre ?? 'Sin nombre'}</small>
                </IonLabel>
                <IonButton expand="block" color="danger" onClick={() => eliminarRutina(rutina.id)} style={{
                  marginTop: '10px',
                  fontWeight: 'bold'
                }}>
                  🗑 Eliminar
                </IonButton>
              </div>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RutinasPage;
