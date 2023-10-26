import {usePrefs} from '../../prefContext';

const Header = () => {
    const { veganOnly, setVeganOnly } = usePrefs();

    const handleChange = (e) => {
        setVeganOnly(e.target.value)
    }
    
    return (
        <header>
          <div className="pizza" />
          <h1>Build your own pizza</h1>
          <select value={veganOnly} onChange={handleChange}>
            <option value="vegan">Vegan Only</option>
            <option value="non-vegan">All toppings</option>
          </select>
        </header>
    )

  };
  
  export default Header;
  