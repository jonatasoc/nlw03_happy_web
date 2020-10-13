import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

const Landing: React.FC = () => (
  <Container>
    <div className="content-wrapper">
      <img src={logoImg} alt="Happy" />

      <main>
        <h1>Felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>Brasília</strong>
        <span>Distrito Federal</span>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
      </Link>
    </div>
  </Container>
);

export default Landing;
