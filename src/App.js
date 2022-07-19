
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Special from './components/Special_Offers/Special';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Special />
      <Footer />
    </div>
  );
}

export default App;
