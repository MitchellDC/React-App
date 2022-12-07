import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';

const card: React.FC<RouteComponentProps> = (props: any) =>  {
    return (
        <IonCard>
        <img alt="Kevin Durant" src='https://bettingsports.com/wp-content/uploads/2020/12/Kevin-Durant-1000x600.png'/>
        <IonCardHeader>
            <IonCardTitle>Kevin Durant</IonCardTitle>
            <IonCardSubtitle>Position: Point Foward</IonCardSubtitle>
        </IonCardHeader>
    </IonCard>
    )
}
export default card;