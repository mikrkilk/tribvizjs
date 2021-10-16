import './App.css';
import PlotCanvas from './components/PlotCanvas';
import { useState } from 'react';
import exdata from './data/example.js'
import BarPlot from './components/plots/BarPlot'

const App = () => {
  const [frames, setFrames] = useState([
     { top: 20, left: 80, plot: BarPlot({data:exdata}), id:"a" },
     { top: 180, left: 20, plot: 'Drag me too', id:"b" }])
  return (
    <div className="App">
        <PlotCanvas frames={frames}/>

    </div>
  );
}

export default App;
