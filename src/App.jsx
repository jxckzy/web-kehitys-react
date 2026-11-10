import './App.css';
import Greeting from './components/Greeting.jsx';

const App = () => {
  const sitename = 'My App';
  const style = {
    color: 'red',
    fontSize: '24px',
  };

  return (
    <>
      <h1 className="otsikko">{sitename}</h1>
      <p style={style}>Tässä on yksinkertainen sovellukseni.</p>
      <p style={style}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Greeting name="Alice" age={25} isTeacher={false} />
    </>
  );
};
export default App;
