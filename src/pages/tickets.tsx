import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import './tickets.css';
type InputEvent = ChangeEvent<HTMLInputElement>; 

interface ContainerProps {property1: any, property2: any, property3: any, property4: any}

const Ticket: React.FC<ContainerProps> = (props) => {
    const [property1, setProperty1] = useState(props.property1);  
    const [property2, setProperty2] = useState(props.property2);
    const [property3, setProperty3] = useState(props.property3); 
    const [property4, setProperty4] = useState(props.property4);

    const update = (e: FormEvent) => {
        e.preventDefault(); 
        console.log("First Name:", {property1});
        console.log("Last Name:", {property2});
        console.log("Phone Number:", {property3});
        console.log("Number of Tickets:", {property4});
        alert("First Name: " + property1 + " Last Name: " + property2 + " Phone Number: " + property3 + " Number of Tickets: " + property4)
    }

    return (
        <form onSubmit={update}>
            <input 
            type="text"
            placeholder="First Name"
            value={property1}
            onChange={(e: InputEvent) => setProperty1(e.target.value)} />
            <input 
            type="text"
            placeholder="Last Name"
            value={property2}
            onChange={(e: InputEvent) => setProperty2(e.target.value)} />
            <input 
            type="tel"
            placeholder="Phone Number"
            value={property3}
            onChange={(e: InputEvent) => setProperty3(e.target.value)} />
            <input 
            type="number"
            placeholder="Number of Tickets"
            value={property4}
            onChange={(e: InputEvent) => setProperty4(e.target.value)} />

            <IonButton onClick={update} type="submit">Submit</IonButton>
        </form>
    );
};

export default Ticket; 