import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Announcements from './components/Announcements';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Announcements />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
