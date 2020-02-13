import React from 'react';
import './InputForm.css';
 
const InputForm = () => {
    return (
       <div>
          <form>
            <label>
               Email: <br/>
              <input type="text" name="email"/>
            </label>
          </form>
       </div>
    );
}
 
export default InputForm;