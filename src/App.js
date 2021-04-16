import { useState } from 'react';
import Navbar from "./components/Navbar";
import Form from './components/Form';
import Method from './components/Method';
import crypto from 'crypto';
const privatekey = '-----BEGIN RSA PRIVATE KEY-----\n' +
  'MIIEpAIBAAKCAQEAqK0PGswYkVZPDQR6EfYpbC6xUuBLV+rCkiQWS6Q+pTVTlN6Y\n' +
  'gfaNKpjXZE7llXE8GmYeCRa8pX+w0pBoU6lySlKKjCkYQ6DNt+HF+hMC2araAaSU\n' +
  'YBkT3eYfIAfUhreaPNI1yJ9bUwW+mEL3GTuPqOgbCyVB4cKJ9iQI1JA6Vx7RnJMz\n' +
  'A7cP4uikbt2R0zymVZIaY7q3MaHJ5K2YpWjjtxoRxAMhR08TCUvQEywZCpEVZNfU\n' +
  'JbyAbFljCgNAbQwXQbUJxH1QVcUKqnmD153IxZwjO15Av5Xz0BmkVLHzrWKqEEIn\n' +
  'kKk0ntam8HQHtBtuYtOCtUhJMW1zI0+hIE+riwIDAQABAoIBAAb27lK67qDBoY32\n' +
  'C1xGf7tZyjST0kiVBuel2c3RwExuAT96WW20UmvZ17rqjww2mra0VLUnXS6wMQrg\n' +
  'r44UxwVOly3mXHweXaAkEFqdAlceeNXsh7vYDTvyToKyEBJn7lRokZPxEIJDEHWU\n' +
  '/kLqdKoSu1sgdLHvqGajYkH0mpQSPkamjBV0Fb3FAVBnH72Put8ZjS5WlkOr72j/\n' +
  'FzaM/1OJmncCRxfSqyi2LariCjbBYSkus3yPvuaj0FZYXJEwjpZ38zltiWlRmWyM\n' +
  'Hhmr6CF8LYTcNaRJtrXBShu5GfY3+zIHkT8ibt/+/ulSEpkvLPDklXNKnztBzfl1\n' +
  'jDjIisECgYEA9v3u/KNkSLI5/6dMLrGxcYJusI970P0ij+27BdGLFEHp/E6A5GZa\n' +
  'Uvr4/YplIstJ4nEf4oQ5Rj57BfbWXwi9QD+Lxg78U3FasANr522OFJCHgvm/yNtz\n' +
  'aQovluiI/E9BJI1WXxQkqqTEpp6BT8W1hT9BMb+WnQyXmQ31/8OStjsCgYEArtPr\n' +
  'qful6sZ3GlWfYAnxVp1c6ArCiCTGE9hv/9iTpuqZSK1BVFTGTRNOPtnJUV7qHbUa\n' +
  'dWPnLjj23korR8vjY99LusfI/0ViVklwILEDnP39028ODeMPhtmXkfZbg9NBvhV8\n' +
  'aE0+6Lri/dSZOu8tItddfpIpxVH1VVQGB7FuevECgYEA2lK4D2U2XfP8xHjTJGs5\n' +
  'mEZdJYCPR7qZ9HOFX61LrMpe1AFoeXvn13W05hiRMWJUmu636nhKUEcmY60+7J5C\n' +
  '+ymwmY/hhriqGu/LT7RNZOwkfKfa2ObyayTv0AsYGz7LLE4qzLx3dMdUdJujXio7\n' +
  'O98f96OMtKHO1yG6EyyC4MUCgYBeqnP+jDwwX50YjmqJV3juHLG1GDZz/+2dy2IC\n' +
  'GKUDCh9MQjyQzILAM4b383fWbt24jlswW5NP7RqIDYNYEigj6UKZdhr5VvnDnWpw\n' +
  '2UkKlmH+PjFPBbdfnq07JToyrI75vaqq08EPxjqplZgPWHmJVzLSGZUyuols1d2a\n' +
  'BtK7EQKBgQCurn/3C9tntvoF6Ox3E6fGsDoiYFnh6B9HfB+nT7V8v2WSKJFFTHHk\n' +
  'i1dLfwqQ8OchsAIaMNU6rHih7itPRpXX8++d98GiJb8HkfgGguXIyqu7uSEW8o+w\n' +
  'RVlIBIyBn6G4q5SHwpXw7QoYNsWvt+uJICBfd4Ei+gnT7vkLH6GzHg==\n' +
  '-----END RSA PRIVATE KEY-----'

function App() {

  const [card, setCard] = useState({
    tarjeta: "",
  });
  
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

  const encrypt = (str) => {
    return crypto
      .publicEncrypt(
        {
          key: privatekey,
          padding: crypto.constants.RSA_PKCS1_PADDING
        },
        Buffer.from(str)
      )
      .toString("base64");
  }
  
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col m6 s12" style={{ marginTop: 20, borderRadius: 10 }}>
            <Form title="Tarjeta a Encriptar" card={card} setCard={setCard} cards={cards} encrypt={encrypt} />
          </div>

          <div className="col m6 s12" style={{ marginTop: 20, borderRadius: 10 }}>
            <Method title="Tarjeta Encriptada" card={card} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
