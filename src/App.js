//import logo from './logo.svg';
//import './App.css';

import Home from './Home';
import MessageList from './MessageList';
import Missing from './Missing';
import User from './User';


import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';


function App() {

  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="presentation1" element={<Car />} />*/}
          <Route path="user/:id" element={<User/>} />
          <Route path="messages" element={<MessageList/>} />

          <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
