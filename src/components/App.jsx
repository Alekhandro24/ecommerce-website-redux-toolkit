import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home, Category, Cart } from '../pages';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
