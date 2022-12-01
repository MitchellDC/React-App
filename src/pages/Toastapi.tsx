import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';
import { Toast } from '@capacitor/toast';
import { RouteComponentProps } from 'react-router-dom';


const showHelloToast: React.FC<RouteComponentProps> =  (props) => {
  const showToasty = async () => (
    await Toast.show({
      text: 'Hello!',
      duration: 'short',
      position: 'center',
  
    }
  )
);
  return (
    <>
      <IonButton expand="block" onClick={() => showToasty()}>Present Toast At the Bottom</IonButton>
    </>
  );
};





export default showHelloToast;