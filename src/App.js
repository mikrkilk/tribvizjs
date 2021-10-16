import './App.css';
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import PlotCanvas from './components/PlotCanvas';
import { useState } from 'react';
import exdata from './data/example.js'
import BarPlot from './components/plots/BarPlot'

const App = () => {
  const [frames, setFrames] = useState([
     { x: 0, y: 1, plot: BarPlot({data:exdata}), id:"a" },
     { x: 3, left: 3, plot: 'Drag me too', id:"b" }])
  return (
    <div className="App">
        <PlotCanvas frames={frames}/>

    </div>
  );
}

export default App;
