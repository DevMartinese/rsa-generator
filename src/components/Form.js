import React from "react";

const Form = ({ title, card, setCard, cards, encrypt}) => {

  const { tarjeta } = card;

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  console.log(tarjeta);

  const submitCard = (e) => {
    e.preventDefault();
    const result = encrypt(tarjeta);
    console.log(result);
  };

  return (
    <div className="card orange col s12" style={{borderRadius: 10}}>
      <h5 className="center">{title}</h5>
      <form className="input-field col s12" onSubmit={submitCard}>
        <select value={tarjeta} name="tarjeta" onChange={handleChange}>
          {cards.map((card) => (
            <option key={card.id} value={card.number}>
              {card.type}
            </option>
          ))}
        </select>
        <input
          style={{ cursor: 'pointer' }}
          className="center input-field col s12 waves-effect waves-teal btn-flat green"
          type="submit"
          value="Enviar Tarjeta"
        />
      </form>
    </div>
  );
};

export default Form;
