import Navbar from './Navbar';
import Home from '../todo/Home';
import User from '../User/User';
import Weather from '../weather-api/Weather';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from '../todo/Create';
import NotFound from '../NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<User />} />
            <Route path='/home' element={<Home />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/create' element={<Create />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
