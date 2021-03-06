import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Genres = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("api/genres").then((res) => {
      setData(res.data.data);
    }, []);
  });

  const deleteGenero = (id) => {
    axios.delete("api/genres/" + id).then((res) => {
      const filtro = data.filter((item) => item.id !== id);
      setData(filtro);
    });
  };

  const renderLine = (record) => {
    return (
      <tr key={record.id}>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteGenero(record.id)}
          >
            Excluir
          </button>
          <Link className="btn btn-info" to={"/generos/" + record.id}>Editar</Link>
        </td>
      </tr>
    );
  };

  if (data.length === 0) {
    return (
      <div className="container">
        <h1>Gêneros</h1>

        <div className="alert alert-warning role='alert">
          Você não possui gêneros adicionados!
        </div>
      </div>
    );
  }

  const id = 2;
  const filtro = data.filter((item) => item.id !== id);

  return (
    <div className="container">
      <h1>Genêros</h1>
      <Link className="btn btn-success" to="/generos/novo">
        Adicionar Novo Gênero
      </Link>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NOME</th>
            <th scope="col">Acões</th>
          </tr>
        </thead>
        <tbody>{data.map(renderLine)}</tbody>
      </table>
    </div>
  );
};

export default Genres;
