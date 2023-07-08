import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import style from "./Card.module.css";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  const handleFavourite = () => {
    if (isFav) {
      removeFav(id);
    } else {
      addFav(props);
    }
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myFavorites]);

  return (
    <div className={style.card}>
      {isFav ? (
        <button onClick={handleFavourite}>❤️</button>
      ) : (
        <button onClick={handleFavourite}>🤍</button>
      )}
      {pathname !== "/favorites/" ? (
        <button className={style.cardButton} onClick={() => onClose(id)}>
          X
        </button>
      ) : (
        <button className={style.cruz}>X</button>
      )}
      <Link to={`/detail/${id}`}>
        <h1 className={style.name}>{name}</h1>
      </Link>
      <div className={style.details}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>

      <img src={image} alt="" />
      <h2 className={style.status}>{status}</h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
