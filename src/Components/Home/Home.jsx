import React from 'react';
import Style from './Home.module.css';
import Feed from '../Feed/Feed';
import Loading from '../Helper/Loading';
import Head from '../Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="home do site dogs,com o feed" />
      {/* <Loading /> */}
      <Feed />
    </section>
  );
};

export default Home;
