import { IonContent, IonFab, IonFabButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC<RouteComponentProps> = (props) =>  {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonFab>
        <IonFabButton onClick={() => props.history.push('/Toastapi')}>
        </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
