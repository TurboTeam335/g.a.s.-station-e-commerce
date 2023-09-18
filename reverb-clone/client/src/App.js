import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Content from './pages/content';
import Footer from './components/Footer/Index';
import useScrollToTop from './utils/useScrollToTop';

function App() {
  const isLoginPage = window.location.pathname === '/login';

  useScrollToTop(); // Call the hook here

  return (
    <div className='App'>
      <Header />
      <div className='content-wrapper'>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
