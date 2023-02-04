import React from "react";

const Form = () => {
  return ( 
    <form
       
    >
  
        
        <div className="">
            <input
                type="text"
                name="city"
                id="city"
                
            />
            <label htmlFor="city">Ciudad: </label>
        </div>
        

        <div className="input-field col s12">
            <select
                name="country"
                id="country"
            >
                <option value="">-- Seleccione un país --</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
            </select>
            <label htmlFor="country">Country: </label>
        </div>

        <div className="input-field col s12">
            <input  
                type="submit"
                value="Search"
                className="waves-effect waves-light btn-large btn-block yellow accent-4"
            />
        </div>
    </form>
 );
};

export default Form;
