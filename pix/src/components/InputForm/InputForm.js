import React from 'react';
 
const InputForm = () => {
    return (
       <div>
          <form>
            <label>
               Email: <br/>
              <input type="text" name="email" placeholder="Enter email"/>
            </label>
          </form>
       </div>
    );
}
 
export default InputForm;