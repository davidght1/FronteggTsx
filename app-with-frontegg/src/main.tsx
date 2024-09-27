import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-e31uzrahi6nf.frontegg.com',
  clientId: '20cb5ef9-7f48-44bf-800f-b5275e9f082b', 
  appId: '677d3fb6-4b11-4fc6-bc6b-a231feecc960'
};

const authOptions = {
 keepSessionAlive: true // Uncomment this in order to maintain the session alive
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);