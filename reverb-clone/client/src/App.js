import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Content from './pages/content';
import Footer from './components/Footer/Index';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content-wrapper'>
        {/* <Content /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
