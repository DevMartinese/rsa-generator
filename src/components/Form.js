import React, { useState } from "react";

const cards = [
  {
    id: 1,
    number: "5895620000000055:123:11/21",
    type: "Naranja",
  },
  {
    id: 2,
    number: "58956200000000554:123:11/21",
    type: "OCR con más de 16 números",
  },
  {
    id: 3,
    number: "abcdefghijklmnop:123:11/21",
    type: "OCR con letras",
  },
  {
    id: 4,
    number: "4978260000000001:145:11/21",
    type: "Visa Debito",
  },
  {
    id: 5,
    number: "5895620000000055:12:11/21",
    type: "CVV con 2 números",
  },
  {
    id: 6,
    number: "5895620000000055:abc:11/21",
    type: "CVV con letras",
  },
  {
    id: 7,
    number: "5895620000000055:123:aa/bb",
    type: "Date con letras",
  },
  {
    id: 8,
    number: "5895620000000055:123:11/15",
    type: "Date expirada",
  },
];

const Form = () => {
  const [card, setCard] = useState({
    tarjeta: "",
  });

  const { tarjeta } = card;

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const submitCard = (e) => {
    e.preventDefault();

    const encryptStringWithRsaPublicKey = (toEncrypt, relativeOrAbsolutePathToPublicKey) => {
      var absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey);
      var publicKey = fs.readFileSync(absolutePath, "utf8");
      var buffer = Buffer.from(toEncrypt);
      var encrypted = crypto.publicEncrypt(
        { key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },
        buffer
      );
      console.log(encrypted.toString("base64"));
    };
    console.log(encryptStringWithRsaPublicKey(`${tarjeta}`, "../resource/privatekey.txt"));
  };

  return (
    <>
      <h5 className="center">Tarjeta Encriptada</h5>
      <form onSubmit={submitCard}>
        <div className="input-field col s12">
          <select value={tarjeta} name="tarjeta" onChange={handleChange}>
             <option value="----Seleccione Tarjeta----">---- Seleccione Tarjeta ----</option>
            {cards.map((card) => (
              <option key={card.id} value={card.number}>
                {card.type}
              </option>
            ))}
          </select>
          <input
            className="center input-field col s12 waves-effect waves-teal btn-flat green"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
