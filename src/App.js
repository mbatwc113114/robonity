// App.js
import { AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import RoboShare from './pages/RoboSharePage';
import EventPage from './pages/EventPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/roboshare" element={<RoboShare />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />
        <Route path="/event" element={ <EventPage event="robo puzzle"/>} />
        <Route path="/events/:eventId" element={<EventPage />} />
        {/* Add other routes here */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
