import React from 'react';

const PhotoGet = () => {
  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/photo/3978')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>enviar</button>
    </form>
  );
};

export default PhotoGet;
