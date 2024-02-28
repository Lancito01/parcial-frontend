import { useState } from 'react'
import './App.css'
import ShowError from './Components/ShowError'
import Card from './Components/Card'

function App() {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const car = e.target.car.value;

        if (name.length < 3 || name[0] === " " || car.length < 6) {
            setError(true);
        } else {
            setCards([...cards, { name, car }]);
            setError(false);
            e.target.reset();
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label><br></br>
                <input type="text" id="name" name="name" /><br></br>
                <label htmlFor="car">Auto:</label><br></br>
                <input type="text" id="car" name="car" /><br></br>
                <button type="submit">Confirmar</button>
            </form>

            {error && <ShowError message="Por favor, confirme que la información sea correcta e intente nuevamente." />}

            {cards.map((card, index, fullArr) => (
                <Card key={index} name={card.name} car={card.car} />
            ))}
        </>
    )
}

export default App
