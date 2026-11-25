import {useState} from 'react';

const TestForm = () => {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Lähetetään!', username);
  };

  return (
    <div>
      <h3>Testiform</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="useranme">Username</label>
        <input
          type="text"
          name="user"
          id="username"
          value={username}
          onChange={handleChange}
        />
        <button>Lähetä käyttäjä</button>
      </form>
    </div>
  );
};

export default TestForm;
