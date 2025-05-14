// src/ga.js
import ReactGA from 'react-ga4';

export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId);
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
