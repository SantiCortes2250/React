import React, { useState } from "react";
import Error from "./Error";



const Form = ({ search, setSearch, setConsult }) => {

  const { city, country } = search;

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    setConsult(true)

    
  };


  return (
    <form 
        onSubmit={handleSubmit}
    >
      {error ? <Error message="inputs obligate"/> : null}
      <div className="">
        <input type="text" name="city" id="city" onChange={handleChange} />
        <label htmlFor="city">Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select name="country" id="country" onChange={handleChange}>
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

      <div className="">
        <input type="submit" value="Search" className="" />
      </div>
    </form>
  );
};

export default Form;
