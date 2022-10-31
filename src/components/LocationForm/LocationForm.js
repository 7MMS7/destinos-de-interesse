import { useEffect, useState } from "react";
import Select from 'react-select'
import "./LocationForm.css";

// Formulário de seleção dos países e cidades
function LocationForm() {
  // Variável para armazenar os países recuperados durante a requisição na API
  const [countryOptions, setCountryOptions] = useState([]);

  // Realizando get na API para recuperar os valores de países disponíveis
  const getCountries = () => {
    fetch(`https://amazon-api.sellead.com/country`)
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setCountryOptions(jsonData);
      });
  };

  // Variável para armazenar as cidades recuperadas durante a requisição na API
  const [cityOptions, setCityOptions] = useState([]);

  // Realizando get na API para recuperar os valores de cidades disponíveis
  const getCities = () => {
    fetch(`https://amazon-api.sellead.com/city`)
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setCityOptions(jsonData);
      });
  };

  // Recuperando os valores de forma assíncrona
  useEffect(() => {
    getCountries();
    getCities();
  }, []);

  // HTML do componente
  return (
    <div className="LocationForm">
      <form className="Form LocationFormSecondaryClass">
        <div className="FormRow">
          <h1>Destinos de Interesse</h1>
        </div>
        <div className="FormRow">
          <label>País</label>
          <Select
            isMulti
            options = {countryOptions.map((option) => {
              return (
                  {label: option.name, value: option.code}
              );
            })}
            placeholder='Selecione um país'
          />
        </div>
        <div className="FormRow">
          <label>Cidade</label>
          <Select
            isMulti
            options = {cityOptions.map((option) => {
              return (
                {label: option.name, value: option.code}
              );
            })}
            placeholder='Selecione uma cidade'
          />
        </div>
      </form>
    </div>
  );
}

export default LocationForm;
