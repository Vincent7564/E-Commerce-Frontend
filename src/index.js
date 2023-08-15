import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Component/Footer';
import RouteList from './Routes/RouteList';
import CarouselPromotion from './Component/CarouselPromotion'
import { Auth0Provider } from '@auth0/auth0-react';
<link href="/dist/output.css" rel="stylesheet"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-lbgwy1aoejbcjx8n.us.auth0.com"
    clientId="s5L9Gc6g5w2NJPXyHfCjeeC45QBTpjZQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <Navbar />
    <div className='my-5 mx-44 overflow-hidden'>
      <RouteList />
    </div>
    <div className='mt-[5rem] overflow-hidden'>
      <Footer />
    </div>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
