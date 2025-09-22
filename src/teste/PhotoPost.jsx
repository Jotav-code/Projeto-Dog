import React from 'react';

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  const formData = new FormData();
  formData.append('img', img);
  formData.append('nome', nome);
  formData.append('peso', peso);
  formData.append('idade', idade);
  formData.append('img', img);

  function handeleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
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
        placeholder="token"
        type="text"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        placeholder="Nome"
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        placeholder="Peso"
        type="number"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        placeholder="Idade"
        type="number"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>enviar</button>
    </form>
  );
};

export default PhotoPost;
