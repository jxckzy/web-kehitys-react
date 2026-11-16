import './App.css';
import Greeting from './components/Greeting.jsx';
import Home from './components/Home.jsx';

const App = () => {
  const sitename = 'My App';
  const style = {
    color: 'red',
    fontSize: '24px',
  };

  return (
    <>
      <h1 style={style}>{sitename}</h1>
      <p className="subtitle">Tässä on yksinkertainen sovellukseni.</p>
      {/* <p style={style}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Greeting name="Alice" age={25} isTeacher={false} /> */}
      <Home />
    </>
  );
};
export default App;
