import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../home/header/header'
import Description from '../home/descriotion/description'
import Footer from '../home/footer/footer'

function Home() {
  return(
    <div>
    <Header  />
    <Description />
    <Footer  />

    </div>
  
  )
}

export default Home;
