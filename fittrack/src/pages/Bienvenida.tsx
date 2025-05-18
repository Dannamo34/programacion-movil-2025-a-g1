import React from 'react';
import { IonPage, IonContent, IonButton, IonText, IonCard } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Bienvenida: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-button {
          background-color: #ff7300 !important;
          color: white !important;
          font-size: 2rem !important;
          font-weight: 700 !important;
          border-radius: 25px !important;
          padding: 18px 0 !important;
          width: 60% !important;
          max-width: 400px !important;
          box-shadow: 0 8px 25px rgba(255, 115, 0, 0.5);
          border: none !important;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .custom-button:hover {
          background-color: #ff8c1a !important;
          transform: scale(1.05);
        }
      `}</style>

      <IonPage>
        <IonContent
          fullscreen
          className="ion-padding"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg,rgb(107, 101, 101) 0%, #ff7300 100%)',
            minHeight: '100vh',
            padding: '0 20px',
            textAlign: 'center',
          }}
        >
          <IonCard
            style={{
              width: '90%',
              maxWidth: '2500px', // Más ancho
              height: '550px',     // Más bajo
              padding: '40px 60px',
              borderRadius: '30px',
              boxShadow: '0 20px 60px rgba(255, 166, 92, 0.4)',
              background: 'linear-gradient(135deg, #ffa65c 0%,rgb(131, 127, 127) 100%)',
              animation: 'fadeIn 1s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IonText
              style={{
                fontSize: '4.2rem',
                fontWeight: 'bold',
                color: '#000000',
                marginBottom: '40px',
                textShadow: '2px 2px 8px rgba(255, 255, 255, 0.4)',
              }}
            >
              Bienvenido a <span style={{ color: '#000000' }}>FitTrack</span>
            </IonText>

            <IonButton
              className="custom-button"
              expand="block"
              onClick={() => history.push('/usuarios')}
            >
              INICIAR
            </IonButton>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Bienvenida;
