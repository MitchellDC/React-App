import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';
import { Toast } from '@capacitor/toast';
import { RouteComponentProps } from 'react-router-dom';


const showHelloToast: React.FC<RouteComponentProps> =  (props) => {
  const showToasty = async () => (
    await Toast.show({
      text: 'You will now be receiving notifications!',
      duration: 'short',
      position: 'center',
  
    }
  )
);
  return (
    <>
      <IonButton onClick={() => showToasty()}>Would you like to receive notifications from a live game?</IonButton>
    </>
  );  
};





export default showHelloToast;