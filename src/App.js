import logo from './logo.svg';
import './App.css';
import MainBoard from "./Frontend/MainBoard";

function App() {
    return (
        <div className="container">

            <div className="m-2 row card">
                <h1 className="text-center">Rapido Game</h1>

            </div>
            <div className="m-2 row card">
                <MainBoard/>
            </div>
        </div>

    );
}

export default App;
