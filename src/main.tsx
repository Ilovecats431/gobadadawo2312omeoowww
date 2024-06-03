import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainNavigation, { Test } from './header';
import Body from './body';
import FooterSection from './footer';
import NavigationBar from './nav/sideNav';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainNavigation />
    <Body />
    <FooterSection/>
  </React.StrictMode>
);
