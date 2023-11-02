import React, { useState, useEffect } from 'react';
import './App.css';


interface CarModel {
  id: number;
  name: string;
}

const App: React.FC = () => {

  const initialCars: CarModel[] = [
    {
      id: 1,
      name: 'Volkswagen'
    },
    {
      id: 2,
      name: 'BMW'
    },
    {
      id: 3,
      name: 'Toyota'
    },
    {
      id: 4,
      name: 'Nissan'
    },
    {
      id: 5,
      name: 'General Motors'
    },
    {
      id: 6,
      name: 'Hyundai'
    },
    {
      id: 7,
      name: 'Peugeot'
    },
    {
      id: 8,
      name: 'Kia'
    },
    {
      id: 9,
      name: 'Volvo'
    },
    {
      id: 10,
      name: 'Mazda'
    }
  ];

  const [cars, setCars] = useState(initialCars);
  const [checkedCars, setCheckedCars] = useState<number[]>([3, 5]);

  const handleCheck = (id: number) => {
    if (checkedCars.includes(id)) {
      setCheckedCars(checkedCars.filter((checkedCarId) => checkedCarId !== id));
    } else {
      setCheckedCars([...checkedCars, id]);
    }
  };

  const handleReset = () => {
    // Set the cars state to the initialCars array with "Toyota" and "General Motors" in the desired order
    setCars([
      ...initialCars.filter((car) => car.name === 'Toyota' || car.name === 'General Motors'),
      ...initialCars.filter((car) => car.name !== 'Toyota' && car.name !== 'General Motors'),
    ]);
    setCheckedCars([3, 5]);
  };

  const sortCheckedCars = () => {
    const unchecked = cars.filter((car) => !checkedCars.includes(car.id));
    const checked = cars.filter((car) => checkedCars.includes(car.id));
    setCars([...checked, ...unchecked]);
  };

  useEffect(() => {
    // Only update the state once during the initial render
    sortCheckedCars()
  }, []);

  return (
    <div className='main'>
      <header>
        <nav className='heading'>
          <button onClick={handleReset}>Reset</button>
          <h2>Future Cars</h2>
          <button onClick={sortCheckedCars}>Apply Changes</button>
        </nav>
      </header>

      <section className='car-list'>
        <div>
          {cars.map(car => (
            <li key={car.id} className='car'>
              <input type="checkbox"
                checked={checkedCars.includes(car.id)}
                onChange={() => handleCheck(car.id)} />
              <h3 className='car_name'>{car.name}</h3>
              <p className='car_id'>{car.id}</p>
            </li>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;