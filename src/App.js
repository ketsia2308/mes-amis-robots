import './App.css';
import Title from './Title';
import { Routes, Route } from 'react-router-dom';
import Fetch from './Fetch';
import DetailRobots from './DetailRobots';


function App() {
  return(
    <>
      <Title />
      <Routes>
        <Route path="/" element={<Fetch/>} />
        <Route path="/details/:id" element={<DetailRobots/>}/>
      </Routes>
    </>
    
  )
}

export default App;
