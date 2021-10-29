import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Method from "./components/Method";
import crypto from "crypto";

function App() {
  const [card, setCard] = useState({
    tarjeta: "",
    privatersa: ""
  });

  const [method, setMethod] = useState("");

  const [consultar, setConsultar] = useState(false);

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

  const { tarjeta, privatersa } = card;

  useEffect(() => {
    if (consultar) {
      const encrypt = (str) => {
        return crypto
          .publicEncrypt(
            {
              key: privatersa,
              padding: crypto.constants.RSA_PKCS1_PADDING,
            },
            Buffer.from(str)
          )
          .toString("base64");
      };
      
      const hashCard = encrypt(tarjeta);
      setMethod(hashCard);
      setConsultar(false);
    }
  }, [consultar, tarjeta, privatersa]);

  console.log("HOLA MUNDO");

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            className="col m6 s12"
            style={{ marginTop: 20, borderRadius: 10 }}
          >
            <Form
              title="Tarjeta a Encriptar"
              card={card}
              setCard={setCard}
              cards={cards}
              setConsultar={setConsultar}
              setMethod={setMethod}
            />
          </div>

          <div
            className="col m6 s12"
            style={{ marginTop: 20, borderRadius: 10 }}
          >
            <Method title="Tarjeta Encriptada" method={method} setMethod={setMethod} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;