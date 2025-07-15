import { useContext, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomsPage from './pages/RoomsPage';
import ContactsPage from './pages/ContactsPage';
import SingleRoom from './pages/SingleRoom';
import { BaseLink } from './LinkContext';
import Checkout from './pages/Checkout';
import Blog from './pages/Blog';

const App = () => {

  const locatiion = useLocation()
  const link = useContext(BaseLink)

  const titlePage = {
    '/hotel/': 'Versel Resolve',
    '/hotel/about': 'О нас | Versel Resolve',
    '/hotel/room': 'Номери | Versel Resolve',
    '/hotel/contacts': 'Контакти | Versel Resolve',
    '/hotel/blog': 'Блог | Versel Resolve',
  }

  useEffect(() => {
    document.title = titlePage[locatiion.pathname] || 'Versel Resolve'
  }, [locatiion])

  return (
    <>
        <Routes>
          <Route path={link} element={<Layout />}>
            <Route index element={<HomePage />} ></Route>
            <Route path={`/hotel/about`} element={<AboutPage />} ></Route>
            <Route path={link + 'room'} element={<RoomsPage />} ></Route>
            <Route path={link + 'checkout'} element={<Checkout />} ></Route>
            <Route path={link + 'blog'} element={<Blog />} ></Route>
            <Route path={link + 'room/:id'} element={<SingleRoom />} ></Route>
            <Route path={link + 'contacts'} element={<ContactsPage />} ></Route>
          </Route>
        </Routes>
    </>
  );
}

export default App;
