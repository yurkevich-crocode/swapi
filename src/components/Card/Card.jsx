import "./Card.css";

const Card = ({ name, img, id }) => {
  return (
    <div className="card" data-id={id}>
      <div className="card__img-wrapper">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={name}
          className="card__img"
        />
      </div>
      <p className="card__name">{name}</p>
    </div>
  );
};

export default Card;
