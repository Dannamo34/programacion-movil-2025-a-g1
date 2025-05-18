import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonToast,
  IonLoading,
} from '@ionic/react';

interface Ejercicio {
  id?: number;
  nombre: string;
  tipo: string;
  series: number;
  repeticiones: number;
  peso: number;
}

const cardStyle = {
  backgroundColor: '#FFD8B1', // naranja pastel
  borderRadius: '10px',
  padding: '12px 16px',
  marginBottom: '12px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const mainTitleStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  color: '#EF6C00',
  marginTop: '20px',
  marginBottom: '10px',
  textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
};

const subtitleStyle = {
  fontSize: '1.6rem',
  fontWeight: '600',
  color: '#A0522D',
  marginBottom: '20px',
  textAlign: 'left' as const,
  paddingLeft: '12px',
};

const inputStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box' as const,
  border: '1px solid #ccc',
};

const formContainerStyle = {
  marginTop: '30px',
  padding: '30px 40px',
  backgroundColor: '#FFF3E0', // fondo claro naranja pastel
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
  maxWidth: '2000px',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const formRowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '18px',
  gap: '12px',
};

const labelStyle = {
  fontWeight: '600',
  color: '#5D4037',
  minWidth: '150px',
  textAlign: 'right' as const,
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#EF6C00', // naranja oscuro
  color: 'white',
  border: 'none',
  padding: '12px',
  width: '100%',
  fontSize: '1.2rem',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '10px',
  fontWeight: '600',
  boxShadow: '0 4px 8px rgba(239, 108, 0, 0.4)',
};

const infoStyle = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap' as const,
  flexGrow: 1,
  fontWeight: '600',
  color: '#5D4037',
};

const buttonDeleteStyle = {
  backgroundColor: '#EF6C00',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
};

const EjerciciosPage: React.FC = () => {
  const [ejercicios, setEjercicios] = useState<Ejercicio[]>([]);
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [series, setSeries] = useState<number | ''>('');
  const [repeticiones, setRepeticiones] = useState<number | ''>('');
  const [peso, setPeso] = useState<number | ''>('');

  const API_URL = 'http://localhost:8080/api/ejercicio';

  const cargarEjercicios = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setEjercicios(data);
    } catch (error) {
      setToastMsg('Error al cargar ejercicios');
    }
    setLoading(false);
  };

  useEffect(() => {
    cargarEjercicios();
  }, []);

  const crearEjercicio = async () => {
    if (!nombre || !tipo || !series || !repeticiones) {
      setToastMsg('Por favor, completa todos los campos requeridos');
      return;
    }
    setLoading(true);
    try {
      const nuevoEjercicio: Ejercicio = {
        nombre,
        tipo,
        series: Number(series),
        repeticiones: Number(repeticiones),
        peso: peso ? Number(peso) : 0,
      };
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoEjercicio),
      });

      if (!res.ok) throw new Error('Error al crear ejercicio');

      await cargarEjercicios();

      setNombre('');
      setTipo('');
      setSeries('');
      setRepeticiones('');
      setPeso('');

      setToastMsg('Ejercicio creado correctamente');
    } catch (error) {
      setToastMsg('Error al crear ejercicio');
    }
    setLoading(false);
  };

  const eliminarEjercicio = async (id?: number) => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Error al eliminar ejercicio');
      await cargarEjercicios();
      setToastMsg('Ejercicio eliminado');
    } catch (error) {
      setToastMsg('Error al eliminar ejercicio');
    }
    setLoading(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{ textAlign: 'center' }}>Ejercicios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1 style={mainTitleStyle}>Ejercicios</h1>
        <h2 style={subtitleStyle}>Lista de Ejercicios</h2>

        <IonList>
          {ejercicios.length === 0 && (
            <IonLabel style={{ textAlign: 'center', width: '100%', marginBottom: '20px' }}>
              No hay ejercicios disponibles
            </IonLabel>
          )}
          {ejercicios.map(ej => (
            <IonItem key={ej.id} style={cardStyle}>
              <div style={infoStyle}>
                <div>{ej.nombre}</div>
                <div>Tipo: {ej.tipo}</div>
                <div>Series: {ej.series}</div>
                <div>Repeticiones: {ej.repeticiones}</div>
                <div>Peso: {ej.peso} kg</div>
              </div>
              <button style={buttonDeleteStyle} onClick={() => eliminarEjercicio(ej.id)}>
                Eliminar
              </button>
            </IonItem>
          ))}
        </IonList>

        {/* Formulario Crear Nuevo Ejercicio */}
        <div style={formContainerStyle}>
          <h2 style={{ color: '#5D4037', marginBottom: '25px', textAlign: 'center' }}>
            Crear Nuevo Ejercicio
          </h2>

          <div style={formRowStyle}>
            <label style={labelStyle}>Nombre</label>
            <IonInput
              style={inputStyle}
              value={nombre}
              onIonChange={e => setNombre(e.detail.value!)}
              placeholder="Nombre del ejercicio"
            />
          </div>

          <div style={formRowStyle}>
            <label style={labelStyle}>Tipo (Cardio, Fuerza, etc.)</label>
            <IonInput
              style={inputStyle}
              value={tipo}
              onIonChange={e => setTipo(e.detail.value!)}
              placeholder="Tipo de ejercicio"
            />
          </div>

          <div style={formRowStyle}>
            <label style={labelStyle}>Series</label>
            <IonInput
              style={inputStyle}
              type="number"
              value={series}
              onIonChange={e => setSeries(e.detail.value ? parseInt(e.detail.value, 10) : '')}
              placeholder="Número de series"
              min={1}
            />
          </div>

          <div style={formRowStyle}>
            <label style={labelStyle}>Repeticiones</label>
            <IonInput
              style={inputStyle}
              type="number"
              value={repeticiones}
              onIonChange={e =>
                setRepeticiones(e.detail.value ? parseInt(e.detail.value, 10) : '')
              }
              placeholder="Número de repeticiones"
              min={1}
            />
          </div>

          <div style={formRowStyle}>
            <label style={labelStyle}>Peso (kg)</label>
            <IonInput
              style={inputStyle}
              type="number"
              value={peso}
              onIonChange={e => setPeso(e.detail.value ? parseFloat(e.detail.value) : '')}
              placeholder="Peso en kilogramos (opcional)"
              min={0}
            />
          </div>

          <button style={buttonStyle} onClick={crearEjercicio}>
            Crear Ejercicio
          </button>
        </div>

        <IonToast
          isOpen={!!toastMsg}
          onDidDismiss={() => setToastMsg(null)}
          message={toastMsg || ''}
          duration={3000}
          color="warning"
        />
        <IonLoading isOpen={loading} message={'Cargando...'} />
      </IonContent>
    </IonPage>
  );
};

export default EjerciciosPage;
