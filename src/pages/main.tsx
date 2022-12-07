import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar} from '@ionic/react';
import Gallery from 'devextreme-react/gallery';
import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import './main.css';
import './cards'; 


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
        <br></br><br></br>
          <Link to="/httpapi">HTTP</Link>
        <br></br><br></br>
          <Link to="/FcCompTemp">Image Slider</Link>
        <br></br><br></br>
          <Link to="/cards">Ion Cards</Link>
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
      </IonContent>
      </IonPage>
  </>
  );
};

export default main;
