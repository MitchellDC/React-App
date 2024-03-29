import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/main';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import showHelloToast from './pages/Toastapi';
import main from './pages/main';
import card from './pages/cards';
import FcCompTemp from './pages/fcCompTemp';
import tickets from './pages/tickets';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/main">
        <Route path= "/main" component={main} exact={true} />
        <Route path= "/Toastapi" component={showHelloToast} exact={true} />
        <Route path= "/cards" component={card} exact={true} />
        <Route path="/fcCompTemp" component={FcCompTemp} exact={true} />
        <Route path="/tickets" component={tickets} exact={true} />

        </Route>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
