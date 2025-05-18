import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Bienvenida from './pages/Bienvenida';
import Usuarios from './pages/Usuarios';
import Cambio from './pages/Cambio';
import EjerciciosPage from './pages/Ejercicios';
import RutinasPage from './pages/Rutinas';
import Progreso from './pages/Progreso'; // ⬅️ Importa tu nueva pantalla

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/" component={Bienvenida} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/cambio" component={Cambio} />
          <Route exact path="/ejercicios" component={EjerciciosPage} />
          <Route exact path="/rutinas" component={RutinasPage} />
          <Route exact path="/progreso" component={Progreso} /> {/* ⬅️ Ruta agregada */}
          <Redirect to="/" />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
