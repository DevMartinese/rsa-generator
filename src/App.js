import Navbar from "./components/Navbar";
import Form from './components/Form';

function App() {
  return (
      <>
        <Navbar />

        <div className="container"> 
         <div className="row">
            <div className="col m6 s12 orange" style={{marginTop: 20}}>
                 <Form />
            </div>

            <div className="col m6 s12 orange">
                
            </div>
         </div>
      </div>
      </>
    );
}

export default App;
