import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenu, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar} from '@ionic/react';
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
          <Link to="/FcCompTemp">Image Slider</Link>
        <br></br><br></br>
          <Link to="/cards">Ion Cards</Link>
        <br></br><br></br>
        <Link to="/tickets">Ticket Form</Link>
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
  <IonGrid fixed={true}>
    <IonRow>
      <IonCol>
        <h1>My Basketball Project</h1>
      </IonCol>
      <IonCol>
        <img src='https://a4.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fnba.png'/>
      </IonCol>
      <IonCol>
        <h1>Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
           with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
      </IonCol>
      <IonCol>
        <img src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5f201a11-daba-4888-8165-f9e6a5edc47f/brooklyn-nets-diamond-icon-edition-dri-fit-nba-swingman-jersey-bcDjwm.png'/>
      </IonCol>
    </IonRow>
  </IonGrid>
      </IonPage>
  </>
  );
};

export default main;
