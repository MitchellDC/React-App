import React, { useState } from 'react'; 
import Ticket from './tickets'; 

type FormEvent = React.FormEvent<HTMLFormElement>;



const FormView: React.FC = (props) => {

    return (
      <Ticket
            property1=''
            property2=''   
            property3='' 
            property4=''
            />
    ); 
  };
  export default FormView;
  
