import style from "./Card.module.css";

export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose } = props;
  return (
    <div className={style.card}>
      <div>
        {/* <button className={style.button} onClick={onClose}>
          X
        </button> */}
        <div className={style.wrapperText}>
          <h2 className={style.name}>{name}</h2>
          <div className={style.details}>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <h3>{origin}</h3>
          </div>
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
}
