import './style.css';
import setupGame from './Modules/Control/setup-controller';
import initiateShipPlacement from './Modules/Control/ship-placement-controller';
// import {
//   simulateSmartHunting,
//   simulateRandomAttack,
//   simulateRandomHunting,
// } from './scripts/computer-ai-simulator';

setupGame();
initiateShipPlacement();

// simulator scripts below - not needed for main app
// simulateSmartHunting();
// simulateRandomHunting();
// simulateRandomAttack();
