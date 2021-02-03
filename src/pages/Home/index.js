import { Grid, Hidden } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/organisms/Footer';
import Header from '../../components/organisms/Header';
import List from '../../components/organisms/List';
import Sidebar from '../../components/organisms/Sidebar';
import './App.scss';

const Home = () => {
  return (
    <div>
      <Header />
      <Grid container className="home-container">
        <Hidden xsDown>
          <Grid item xs={3} sm={3} md={3} lg={0}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item xs={9} sm={9} md={9} lg={9}>
          <List />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Home;