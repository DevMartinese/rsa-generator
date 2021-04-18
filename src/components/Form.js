import React, { useState } from "react";

const Form = ({ title, card, setCard, cards, setConsultar, setMethod}) => {

  const [error, setError] = useState(false);

  const {tarjeta, privatersa} = card;

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(tarjeta);

  const submitCard = (e) => {
    e.preventDefault();

    if(tarjeta.trim() === '' || privatersa.trim === '') {
      setError(true);
      return;
    }
    setError(false);
    setMethod(tarjeta);
    setConsultar(true);
  };

  return (
    <div className="card orange col s12" style={{borderRadius: 10}}>
      <h5 className="center">{title}</h5>
      {error ? <p className="red darken-4" style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>TODOS LOS CAMPOS SON OBLIGATORIOS</p> : null}
      <form className="input-field col s12" onSubmit={submitCard}>
        <select value={tarjeta} name="tarjeta" onChange={handleChange}>
          <option value="">---- Seleccione una Tarjeta ----</option>
          {cards.map((card) => (
            <option key={card.id} value={card.number}>
              {card.type}
            </option>
          ))}
        </select>
        <textarea className="white" placeholder="Inserte su RSA PRIVATE KEY" name="privatersa" value={privatersa} onChange={handleChange} style={{height: 300}}></textarea>
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
