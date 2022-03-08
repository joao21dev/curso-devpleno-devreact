import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const NewGenre = () => {
  const [name, setName] = useState("");
  // const [success, setSuccess] = useState(false);

  const onChange = (event) => {
    setName(event.target.value);
  };

  let navigate = useNavigate();

  const save = () => {
    axios.post("/api/genres", {
      name,
    });
    navigate("/generos");
  };

  // if (success) {
  //   let navigate = useNavigate;
  //   // return <Navigate to="/generos"  />;
  //   return navigate("/generos");
  // }

  // let navigate = useNavigate();

  return (
    <div className="container">
      <h1>Novo Gênero</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nome do Gênero"
            value={name}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={save}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NewGenre;
