import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import Header from './components/Header';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<PageOne />} />
        <Route exact path='/pageone' element={<PageTwo />} />
      </Routes>
    </div>
  );
}

export default App;
