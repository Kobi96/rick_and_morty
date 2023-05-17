import style from "./Card.module.css";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;
  return (
    <div className={style.card}>
      <button
        className={style.cardButton}
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <h1 className={style.name}>{name}</h1>
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
