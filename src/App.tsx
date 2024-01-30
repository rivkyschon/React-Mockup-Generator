import React from 'react';
import TestPage from './pages/TestPage';
import './index.css';
import AIMockupGenerator from './components/AIMockupGenerator';

const App: React.FC = () => {
  return (
    <div className="App">
      <TestPage />
      <AIMockupGenerator />
    </div>
  );
};

export default App;
