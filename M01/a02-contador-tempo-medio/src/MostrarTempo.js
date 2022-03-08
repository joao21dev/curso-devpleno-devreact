import React from "react";

const MostrarTempo = (props) => {
  const tempo = props.tempo;
  const minutos = Math.round(tempo / 60);
  const segundos = tempo % 60;
  //colocar o 0 antes do número se menor que 10
  const minutosStr = minutos < 10 ? "0" + minutos : minutos;
  const segundosStr = segundos < 10 ? "0" + segundos : segundos;
  return (
    <p className="tempo">
      <span> {`${minutosStr}:${segundosStr}`} </span> <br /> Tempo Médio por
      volta{" "}
    </p>
  );
};

export default MostrarTempo;
