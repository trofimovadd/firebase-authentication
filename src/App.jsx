import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Profile from './components/Profile'
import News from './components/News'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="signIn" element={ <SignIn /> } />
        <Route path="profile" element={ <Profile /> } />
        <Route path="news" element={ <News /> } />
        <Route path="signUp" element={ <SignUp /> } />
      </Routes>
    </div>
  );
}

export default App;
