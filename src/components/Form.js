import React from 'react';

const Form = () => (
    <>
        <h6 className="center">Tarjeta Encriptada</h6>
        <form>
           <div className="input-field col s12">
              <select>
                 <option>---- Seleccione Tarjeta ----</option>
                 <option value="5895620000000055:123:11/21">Naranja</option>
                 <option value="58956200000000554:123:11/21">OCR con más de 16 números</option>
                 <option value="abcdefghijklmnop:123:11/21">OCR con letras</option>
                 <option value="4978260000000001:145:11/21">Visa Debito</option>
                 <option value="5895620000000055:12:11/21">CVV con 2 números</option>
                 <option value="5895620000000055:abc:11/21">CVV con letras</option>
                 <option value="5895620000000055:123:aa/bb">Date con letras</option>
                 <option value="5895620000000055:123:11/15">Date expirada</option>
              </select>
           </div>
       </form>
    </>
);

export default Form;