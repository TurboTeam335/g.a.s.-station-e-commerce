import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Content from './pages/content';
import Footer from './components/Footer/Index';
import Login from './pages/Login/index';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content-wrapper'>
        <Content />
        {/* <Login /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
