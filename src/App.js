import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeFashionFour from './Pages/Home/HomeFashionFour';

function App() {
  return (
   <div className="App">
      <Provider store={store}>
         <Routes>
           <Route path='/' element={<HomeFashionFour/>}></Route>
         </Routes>
         </Provider>
    </div> 
  );
}

export default App;
