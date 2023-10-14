import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Announcements from './components/Announcements';
import Main from './components/Main';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Announcements />
      <Main />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
