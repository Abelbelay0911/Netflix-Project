import React from 'react';
import Header from '../../components/Header/Header';
import Fotter from '../../components/Footer/Fotter';
import Banner from '../../components/Banner/Banner';
import RowList from '../../components/Rows/RowList/RowList';

const Home = () => {
    return (
      <>
        <h3>
          <Header />
          <Banner />
          <RowList />
          <Fotter />
      
        </h3>
      </>
    );
}

export default Home;
