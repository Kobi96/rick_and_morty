import style from "./Card.module.css";

export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose } = props;
  return (
    <div>
      <button className={style.button} onClick={onClose}>
        X
      </button>
      <h2 className={style.text}>{name}</h2>
      <h2 className={style.text}>{status}</h2>
      <h2 className={style.text}>{species}</h2>
      <h2 className={style.text}>{gender}</h2>
      <h2 className={style.text}>{origin}</h2>
      <img src={image} alt="" />
    </div>
  );
}
