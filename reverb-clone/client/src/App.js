import 'font-awesome/css/font-awesome.min.css';
import { WishlistProvider } from './pages/Wishlist/WishlistContext';
import { CartProvider } from './pages/Cart/CartContext';
import Header from './components/Header';
import Content from './pages/content';
import Footer from './components/Footer/Index';
import useScrollToTop from './utils/useScrollToTop';

function App() {
  const isLoginPage = window.location.pathname === '/login';

  useScrollToTop();

  return (
    <WishlistProvider>
      <CartProvider>
        <div className='App'>
          <Header />
          <div className='content-wrapper'>
            <Content />
          </div>
          <Footer />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
