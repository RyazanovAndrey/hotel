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

  const routes = [
    {path: '/', element: <HomePage/>},
    {path: '/about', element: <AboutPage/>},
    {path: '/room', element: <RoomsPage/>},
    {path: '/room/:id', element: <SingleRoom/>},
    {path: '/contacts', element: <ContactsPage/>},
  ]

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
          {routes.map(item => (
            <Route path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
