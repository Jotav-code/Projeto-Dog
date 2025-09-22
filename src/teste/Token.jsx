import React from 'react';

const Token = () => {
  const [username, setText] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handeleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return setToken(json.token);
      });
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
        placeholder="senha"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>enviar</button>
      <p style={{ wordBreak: 'break-all' }}>{token}</p>
    </form>
  );
};

export default Token;
