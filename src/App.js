import './App.css';
import Pokedex from "./Pokedex"
import pokemon from "./pokemon"
import Pokegame from "./Pokegame"
import "./App.css"

function App() {
  return (
    <>
      <h1 className="App-h1">Pokedex</h1>
{/*       <Pokedex pokemon={pokemon}/> */}
      <Pokegame pokemon={pokemon}/>
    </>
  );
}

export default App;
