import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );

    return setCharacter({});
  }, [id]);

  return (
    <div className={style.card}>
      <div className={style.content}>
        <h1 className={style.detailName}>{character?.name}</h1>
        <div>
          <h2 className={style.info}>{character?.status}</h2>
          <h2 className={style.info}>{character?.species}</h2>
          <h2 className={style.info}>{character?.gender}</h2>
          <h2 className={style.info}>{character?.origin}</h2>
        </div>
      </div>
      <img src={character.image} alt="char detail" />
    </div>
  );
};

export default Detail;
