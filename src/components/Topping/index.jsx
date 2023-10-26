import Check from "../Check";
import './style.css';

const Topping = ({ topping, onCheckedChange }) => {

  return (
    <div className="topping">
      <Check checked={topping.selected} vegan={topping.vegan} onChange={onCheckedChange}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
