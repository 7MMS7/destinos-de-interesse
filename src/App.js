import './App.css';
import PersonalForm from './components/PersonalForm/PersonalForm';
import LocationForm from './components/LocationForm/LocationForm';

// Componente principal da página
function App() {
  return (
    <div className="App">
      <div className='ComponentsRow'>
        <PersonalForm></PersonalForm>
        <LocationForm></LocationForm>
      </div>
      <button type="submit"> ENVIAR </button>
    </div>
  );
}

export default App;
