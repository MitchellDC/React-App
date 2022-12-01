import { IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ReactDOM from 'react-dom';
import { Link, RouteComponentProps } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './main.css';
import { IonImg } from '@ionic/react';

const main: React.FC<RouteComponentProps> = (props) =>  {
  return (
    <>
    
      <IonMenu contentId='main-content'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <Link to="/Toastapi">Toast</Link>
        </IonContent>
        <IonContent className='ion-padding'>
          <Link to="/httpapi">HTTP</Link>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton>
              </IonMenuButton>
            </IonButtons>
            <IonTitle>Nets App</IonTitle>
      
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonImg src="https://sportshub.cbsistatic.com/i/r/2022/11/02/e7b258ec-e95b-4f4d-b325-ff6a14e44b88/thumbnail/1200x675/a55894a1a01a53c006bc52b30728186e/kyrie-kd-getty.png" alt="Nets"></IonImg>
        <IonImg src="https://theknickswall.com/wp-content/uploads/2022/10/nets_preview-1280x640.jpg" alt="Team"></IonImg>
        <IonImg src='https://www.nbcsports.com/sites/rsnunited/files/article/hero/Seth-Curry-Nets-Kings-GETTY-1238486322.jpg' alt='Seth'></IonImg>
        </IonContent>
      </IonPage>
  </>
  );
};

export default main;

    {/* // <IonPage class='style'>
    //   <IonHeader>
    //     <h1 className = 'header'>NBA App</h1>
    //   </IonHeader>
    //   <IonContent fullscreen>
    //     <IonHeader collapse="condense">
    //       <IonToolbar>
    //         <IonTitle size="large">Blank</IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <ExploreContainer />
    //     <IonFab>
    //     <IonFabButton onClick={() => props.history.push('/Toastapi')}>
    //     </IonFabButton>
    //     <IonFabButton onClick={() => props.history.push('/httpapi')}>
    //     </IonFabButton>
    //     </IonFab>
    //   </IonContent>
    // </IonPage> */}
    