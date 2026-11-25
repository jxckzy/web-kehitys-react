import {useState} from 'react';

const PizzaForms = () => {
  const [inputs, setInputs] = useState({
    firstname: '',
    mytxt: '',
    pizzaBottom: '',
    tomato: true,
    cheese: false,
    jalapeno: false,
    drink: '',
  });

  const handleChange = (event) => {
    const {name, type, value, checked} = event.target;

    // Checkbox palauttaa boolean-arvon (true/false).
    // Muissa kentissä käytetään value-ominaisuutta.
    const inputValue = type === 'checkbox' ? checked : value;

    console.log('Arvot INPUT-kentistä:', name, inputValue);

    // Kopioidaan edellinen state ja päivitetään yksi kenttä
    setInputs((previousInputs) => ({
      ...previousInputs,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputs, null, 2));
  };

  return (
    <>
      <h2>Pizza Forms</h2>
      <form onSubmit={handleSubmit} style={{width: '400px', margin: 'auto'}}>
        {/* TEXT INPUT */}
        <label htmlFor="etunimi">Etunimi:</label>
        <input
          type="text"
          name="firstname"
          id="etunimi"
          value={inputs.firstname}
          onChange={handleChange}
        />
        <hr />
        {/* TEXTAREA */}
        <label htmlFor="tekstikentta">Anna lisätietoja:</label>
        <textarea
          name="mytxt"
          id="tekstikentta"
          value={inputs.mytxt}
          onChange={handleChange}
        />
        <hr />
        {/* SELECT */}
        <label htmlFor="pizzaBottom">Select pizza bottom</label>
        <select
          id="pizzaBottom"
          name="pizzaBottom"
          value={inputs.pizzaBottom}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Choose pizza bottom
          </option>
          <option value="wheat">Wheat</option>
          <option value="rye">Rye</option>
          <option value="gluten-free">Gluten Free</option>
        </select>
        <hr />
        {/* CHECKBOXES */}
        <p>Select toppings</p>
        <label>
          Tomato
          <input
            type="checkbox"
            name="tomato"
            checked={inputs.tomato}
            onChange={handleChange}
          />
        </label>
        <label>
          Cheese Pleeze
          <input
            type="checkbox"
            name="cheese"
            checked={inputs.cheese}
            onChange={handleChange}
          />
        </label>
        <label>
          Jalapeno
          <input
            type="checkbox"
            name="jalapeno"
            checked={inputs.jalapeno}
            onChange={handleChange}
          />
        </label>
        <hr />
        <p>Select your drink</p>
        <label>
          Fanta
          <input
            type="radio"
            name="drink"
            value="fanta"
            checked={inputs.drink === 'fanta'}
            onChange={handleChange}
          />
        </label>
        <label>
          Coca-cola
          <input
            type="radio"
            name="drink"
            value="coca-cola"
            checked={inputs.drink === 'coca-cola'}
            onChange={handleChange}
          />
        </label>
        <label>
          Sprite
          <input
            type="radio"
            name="drink"
            value="sprite"
            checked={inputs.drink === 'sprite'}
            onChange={handleChange}
          />
        </label>
        <hr />

        <button type="submit">Send Data</button>
      </form>
    </>
  );
};

export default PizzaForms;
