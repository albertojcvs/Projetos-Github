import React from 'react';
import './Styles/Global.css';
import Routes from './Routes';

import {transitions, positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplete from 'react-alert-template-basic'
function App() {
  return (
   < AlertProvider template = {AlertTemplete} position={positions.BOTTOM_RIGHT} timeout='5000' offse='30px' transition= {transitions.SCALE} >
   <Routes />
   </ AlertProvider>
  );
}

export default App;
