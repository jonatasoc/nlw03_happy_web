import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import { Container } from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [170, 2]
});

const OphanagesMap: React.FC = () => (
  <Container>
    <aside>
      <header>
        <img src={mapMarkerImg} alt="Happy" />

        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
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

      <Marker
        position={[-15.7750837, -48.0772774]}
        icon={mapIcon}
      >
        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
          Lar das Crianças
          <Link to="/orphanages/1">
            <FiArrowRight size={20} color="#fff" />
          </Link>
        </Popup>
      </Marker>
    </Map>

    <Link to="/orphanages/create">
      <FiPlus size={32} color="#fff" />
    </Link>
  </Container>
);

export default OphanagesMap;
