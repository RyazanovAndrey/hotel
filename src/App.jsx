import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomsPage from './pages/RoomsPage';
import ContactsPage from './pages/ContactsPage';
import SingleRoom from './pages/SingleRoom';

const App = () => {

  const locatiion = useLocation()

  const titlePage = {
    '/' : 'Головна',
    '/about' : 'О нас',
    '/room' : 'Номери',
    '/contacts' : 'Контакти',
  }

  useEffect(() => {
    document.title = titlePage[locatiion.pathname] || 'Versel Resolve'
  }, [locatiion])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />} ></Route>
          <Route path='/about' element={<AboutPage/>} ></Route>
          <Route path='/room' element={<RoomsPage/>} ></Route>
          <Route path='/room/:id' element={<SingleRoom/>} ></Route>
          <Route path='/contacts' element={<ContactsPage/>} ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
