import React from 'react';
import InputForm from './InputForm/InputForm.js';
import ButtonSubmit from './Buttons/ButtonSubmit';
import InputFormPassword from './InputPassword/InputFormPassword';
import './Home.css';

 
const home = () => {
    return (
       <div class="Base">
          <h1>Sign In</h1>
           <p>
               <InputForm />
               <br/>
               <InputFormPassword />
               <br/>
               <ButtonSubmit />
               
           </p>
       </div>
    );
}
 
export default home;