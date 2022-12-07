import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
interface ContainerProps {property1 : any}
const FcCompTemp: React.FC<ContainerProps> = (props) => {
    const [property1, setProperty1] = React.useState(props.property1);


    const updateData = () => {
        if(property1 === "https://media.newyorker.com/photos/6001f7e461d2f493290f7bac/4:3/w_2276,h_1707,c_limit/Thomas-BrooklynNets.jpg")
            setProperty1('https://fadeawayworld.net/.image/t_share/MTkzMTcyNzQ5NTk2NzYzODA3/nets-centers.jpg');
        else
            setProperty1("https://media.newyorker.com/photos/6001f7e461d2f493290f7bac/4:3/w_2276,h_1707,c_limit/Thomas-BrooklynNets.jpg");
    }

    return (        
        <IonContent fullscreen>
            <div>
                <img alt=" " src={property1} onClick={() => {updateData()}}/>

            </div>
            <IonButton onClick={() => {updateData()}}> Change the picture</IonButton>
        </IonContent>
    )
}
export default FcCompTemp