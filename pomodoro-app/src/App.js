import Timer from "./Timer.js";
import Settings from './Settings.js'
import "./App.css";
import {useState} from 'react'

function App() {

  const [showSettings, setShowSettings] = useState(initialState: true);
  return (
    <main>
 
      {showSettings ? <Settings /> : <Timer />}
    </main>
  );
}

export default App;
