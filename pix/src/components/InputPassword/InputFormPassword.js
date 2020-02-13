import React from 'react';
 
const InputFormPassword = () => {
    return (
       <div>
          <form>
            <label>
               Password: <br/>
              <input type="text" name="password" placeholder="Enter password"/>
            </label>
          </form>
       </div>
    );
}
 
export default InputFormPassword;