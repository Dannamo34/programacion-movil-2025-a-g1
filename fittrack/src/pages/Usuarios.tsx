import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonText,
} from '@ionic/react';
import axios from 'axios';

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  clave: string;
}

const Usuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', correo: '', clave: '' });

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const respuesta = await axios.get('http://localhost:8080/usuarios');
      setUsuarios(respuesta.data);
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  };

  const agregarUsuario = async () => {
    if (!nuevoUsuario.nombre || !nuevoUsuario.correo || !nuevoUsuario.clave) {
      alert('Por favor completa todos los campos.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/usuarios', nuevoUsuario);
      setNuevoUsuario({ nombre: '', correo: '', clave: '' });
      cargarUsuarios();
    } catch (error) {
      console.error('Error al agregar usuario:', error);
    }
  };

  const eliminarUsuario = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/usuarios/${id}`);
      cargarUsuarios();
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  const irACambio = () => {
    // Aquí puedes usar react-router o cualquier otro método para navegar
    window.location.href = '/cambio'; // Ajusta esta ruta según la configuración de tu app
  };

  return (
    <IonPage>
      <IonContent
        className="ion-padding"
        style={{ height: '100vh', backgroundColor: '#ffe8d6' /* color de fondo general más claro */ }}
      >
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            height: '100%',
            padding: '20px',
          }}
        >
          {/* Formulario Registrar */}
          <div
            style={{
              flex: 1,
              minWidth: '300px',
              backgroundColor: '#FFE4C4', // naranja pastel
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
              color: '#4b3b2b',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <IonText>
              <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>📝 Registrar</h2>
            </IonText>
            <IonItem lines="none" style={{ marginTop: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
              <IonLabel position="stacked" color="primary" style={{ color: '#4b3b2b' }}>
                Nombre
              </IonLabel>
              <IonInput
                placeholder="Escribe el nombre"
                value={nuevoUsuario.nombre}
                onIonChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.detail.value! })}
                style={{ color: '#4b3b2b' }}
              />
            </IonItem>
            <IonItem lines="none" style={{ marginTop: '15px', backgroundColor: 'white', borderRadius: '8px' }}>
              <IonLabel position="stacked" color="primary" style={{ color: '#4b3b2b' }}>
                Correo
              </IonLabel>
              <IonInput
                placeholder="ejemplo@correo.com"
                value={nuevoUsuario.correo}
                onIonChange={(e) => setNuevoUsuario({ ...nuevoUsuario, correo: e.detail.value! })}
                style={{ color: '#4b3b2b' }}
              />
            </IonItem>
            <IonItem lines="none" style={{ marginTop: '15px', backgroundColor: 'white', borderRadius: '8px' }}>
              <IonLabel position="stacked" color="primary" style={{ color: '#4b3b2b' }}>
                Clave
              </IonLabel>
              <IonInput
                type="password"
                placeholder="••••••••"
                value={nuevoUsuario.clave}
                onIonChange={(e) => setNuevoUsuario({ ...nuevoUsuario, clave: e.detail.value! })}
                style={{ color: '#4b3b2b' }}
              />
            </IonItem>
            <IonButton
              expand="block"
              color="tertiary"
              onClick={agregarUsuario}
              style={{
                marginTop: '25px',
                fontWeight: 'bold',
                backgroundColor: '#e67e22', // naranja fuerte para botón
                borderRadius: '10px',
              }}
            >
              💾 Guardar Usuario
            </IonButton>
          </div>

          {/* Usuarios Registrados en tabla */}
          <div
            style={{
              flex: 2,
              minWidth: '300px',
              backgroundColor: '#D3D3D3', // morado pastel
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
              overflowY: 'auto',
              maxHeight: 'calc(100vh - 80px)',
            }}
          >
            <IonText>
              <h2 style={{ color: '#4b3b2b', fontWeight: 'bold', textAlign: 'center' }}>
                👥 Usuarios Registrados
              </h2>
            </IonText>

            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '20px',
                fontSize: '16px',
                color: '#4b3b2b',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid #a29bfe' }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Nombre</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Correo</th>
                  <th style={{ padding: '10px', textAlign: 'center', width: '100px' }}>Acción</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr
                    key={usuario.id}
                    style={{
                      borderBottom: '1px solid #b2bec3',
                      backgroundColor: '#f7f3fb',
                      userSelect: 'text',
                    }}
                  >
                    <td style={{ padding: '10px' }}>{usuario.nombre}</td>
                    <td style={{ padding: '10px' }}>{usuario.correo}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>
                      <IonButton
                        color="danger"
                        onClick={() => eliminarUsuario(usuario.id)}
                        style={{ fontWeight: 'bold', minWidth: '80px' }}
                      >
                        🗑️ Eliminar
                      </IonButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Botón en esquina inferior derecha */}
        <IonButton
          onClick={irACambio}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#ff6600', // naranja encendido
            fontWeight: 'bold',
            borderRadius: '50px',
            padding: '12px 20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}
        >
          → Cambio
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Usuarios;
