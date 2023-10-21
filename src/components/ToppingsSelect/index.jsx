import {useState} from 'react';
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [currentToppings, setCurrentToppings] = useState(toppings)

  const handleToppingChange = (index, currentlyChecked) => {
    const newToppings = [...currentToppings]; // copying the actual state
    newToppings[index].selected = currentlyChecked;
    setCurrentToppings(newToppings);
  };

  const totalToppingItems = () => {
    return currentToppings.reduce((sum, item) => item.selected ? sum + 1 : sum + 0, 0);
  }

  const totalToppingPrice = () => {
    return currentToppings.reduce((sum, item) => item.selected ? sum + item.price : sum + 0, 0);
  }

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {totalToppingItems()}, total price: {totalToppingPrice().toFixed(2)} Euro</p>

      <div className="toppings">
        {toppings.map((topping, idx) => (
          <Topping topping={topping} key={topping.name} onCheckedChange={(checked) => handleToppingChange(idx, checked)}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
