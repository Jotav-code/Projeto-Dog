import React from 'react';

const UserPhost = () => {
  const [username, setText] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handeleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json));
  }

  return (
    <form onSubmit={handeleSubmit}>
      <input
        placeholder="nome"
        type="text"
        value={username}
        onChange={({ target }) => setText(target.value)}
      />
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        placeholder="senha"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>enviar</button>
    </form>
  );
};

export default UserPhost;
