import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditGenre = ({ ownProps }) => {
  const [name, setName] = useState("");
  // const [success, setSuccess] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    axios
    .get(`/api/genres/${id}`)
    .then((res) => {
      setName(res.data.name);
    });
  }, [`${id}`]);


  const onChange = (event) => {
    setName(event.target.value);
  };

  let navigate = useNavigate();

  const save = () => {
    axios.put(`/api/genres/${id}`, {
      name,
    });
    navigate("/generos");
  };

  return (
    <div className="container">
      <h1>Editar Gênero</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Novo Nome"
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

export default EditGenre;
