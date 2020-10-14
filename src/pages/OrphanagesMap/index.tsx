import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import { Container } from './styles';

const OphanagesMap: React.FC = () => (
  <Container>
    <aside>
      <header>
        <img src={mapMarkerImg} alt="Happy" />

        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :{')'}</p>
      </header>

      <footer>
        <strong>Brasília</strong>
        <span>Distrito Federal</span>
      </footer>
    </aside>

    <Map
      center={[-15.7744227, -48.0773005]}
      zoom={10}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </Map>

    <Link to="/">
      <FiPlus size={32} color="#fff" />
    </Link>
  </Container>
);

export default OphanagesMap;
