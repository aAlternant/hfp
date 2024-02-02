import { Route, Routes } from 'react-router-dom';
// import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Auth } from './pages/Auth/Auth';
import { HabitsCalendar } from './pages/HabitsCalendar/HabitsCalendar';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HabitsCalendar />} />
        <Route path="login" element={<Auth loginButton={true} />} />
        <Route path="register" element={<Auth />} loginButton={false} />
        {/* <Route path="habits-calendar" element={<HabitsCalendar />} /> */}
      </Routes>
    </>
  );
};
