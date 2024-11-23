import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllRoute from "./routes/AllRoute"

function App() {
  return (
    <div >
      <Navbar />
      <AllRoute />
      <Footer />
      
    </div>
  );
}

export default App;
