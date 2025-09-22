import React from 'react';
import UserPhost from './teste/UserPhost';
import Token from './teste/Token';
import PhotoPost from './teste/PhotoPost';
import PhotoGet from './teste/PhotoGet';

const App = () => {
  return (
    <div>
      <h1>cadastrar</h1>
      <UserPhost />
      <h1>Token</h1>
      <Token />
      <h1>PhotoPost</h1>
      <PhotoPost />
      <h1>Photo Get</h1>
      <PhotoGet />
    </div>
  );
};

export default App;
