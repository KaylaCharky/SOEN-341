import React from 'react';
import InputForm from './InputForm/InputForm.js';

 
const home = () => {
    return (
       <div>
          <h1>Home</h1>
           <p>Where the login authentication will take place
               <InputForm justtry="Email:"/>
               <InputForm input="Hello:"/>
               
           </p>
       </div>
    );
}
 
export default home;