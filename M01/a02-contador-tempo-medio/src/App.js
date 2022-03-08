import { useState, useEffect } from "react";
import "./styles.css";
import MostrarTempo from "./MostrarTempo";
import MostrarVoltas from "./MostrarVoltas";
import Button from "./Button";

function App() {
  const [numVoltas, setNumVoltas] = useState(0);

  const [running, setRunning] = useState(false);

  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTempo((old) => old + 1); //pegamos o valor anterior
      }, 1000);
    }
    return () => {
      //zerar o timer
      if (timer) {
        //diferente de nul
        clearInterval(timer);
      }
    };
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  };

  const increment = () => {
    setNumVoltas(numVoltas + 1);
  };

  const decrement = () => {
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1);
    }
  };

  const reset = () => {
    setNumVoltas(0);
    setTempo(0);
  };

  return (
    <div>
      <MostrarVoltas voltas={numVoltas} />
      <Button text="+" className="bigger" onClick={increment} />
      <Button text="-" className="bigger" onClick={decrement} />
      {numVoltas > 0 && <MostrarTempo tempo={Math.round(tempo / numVoltas)} />}
      <Button text={running ? 'Pausar' : 'Iniciar'} onClick={toggleRunning} />
      <Button text="Reiniciar" onClick={reset} />
    </div>
  );
}

export default App;
