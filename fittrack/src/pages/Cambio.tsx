import React from 'react';
import {
  IonPage,
  IonContent,
  IonButton,
  IonText,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Cambio: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{ backgroundColor: '#1e2a38' }} // fondo oscuro azul
      >
        <div style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '25px',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
            width: '100%',
            maxWidth: '450px',
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}>
            <IonText>
              <h1 style={{ 
                color: '#e67e22', 
                fontWeight: '900', 
                textAlign: 'center', 
                marginBottom: '10px',
                fontSize: '2.3rem',
              }}>
                ¡Empecemos con el cambio!
              </h1>
              <p style={{
                textAlign: 'center',
                color: '#555',
                fontSize: '1rem',
                marginTop: 0,
                marginBottom: '25px',
                fontWeight: '500'
              }}>
                Elige una opción para continuar tu progreso.
              </p>
            </IonText>

            {/* Botones con navegación */}
            <IonButton
              expand="block"
              style={buttonStyle('#ff6f00')}
              onClick={() => history.push('/ejercicios')}
            >
              🏋️‍♂️ Ejercicios <span style={arrowStyle}>→</span>
            </IonButton>

            <IonButton
              expand="block"
              style={buttonStyle('#1976d2')}
              onClick={() => history.push('/rutinas')}
            >
              📅 Rutinas <span style={arrowStyle}>→</span>
            </IonButton>

            <IonButton
              expand="block"
              style={buttonStyle('#388e3c')}
              onClick={() => history.push('/progreso')}
            >
              📈 Progreso <span style={arrowStyle}>→</span>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

// Estilos para los botones con animación hover
const buttonStyle = (bgColor: string): React.CSSProperties => ({
  backgroundColor: bgColor,
  fontWeight: 'bold',
  fontSize: '18px',
  borderRadius: '15px',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  boxShadow: `0 4px 10px ${bgColor}66`,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  cursor: 'pointer',
  color: '#fff',
  userSelect: 'none',
});

// Flecha estilizada
const arrowStyle: React.CSSProperties = {
  fontWeight: '900',
  fontSize: '24px',
  transition: 'transform 0.3s ease',
};

export default Cambio;
