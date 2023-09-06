import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//styles
import './App.css';

//pages
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        {user && <Sidebar />}
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Dashboard /> : <Login />} />
            <Route path="/login" element={!user ? <Login /> : <Dashboard />} />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Dashboard />}
            />
            <Route path="/create" element={user ? <Create /> : <Login />} />
            <Route
              path="/project/:id"
              element={user ? <Project /> : <Login />}
            />
          </Routes>
        </div>
        {user && <OnlineUsers />}
      </BrowserRouter>
    </div>
  );
}

export default App;
