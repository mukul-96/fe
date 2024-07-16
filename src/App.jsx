import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Voting from './Components/Voting';
import SignUp from './Components/SignUp';
import AdminPanel from './Components/AdminPanel';
import Landing from './Components/Landing';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/voter/voting" element={<Voting />} />
        <Route path="/voter/signup" element={<SignUp />} />
        <Route path="/admin/manage" element={<AdminPanel />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
