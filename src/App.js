import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/index.jsx';
import Questoes from './Pages/Questoes';
import Diciplinas from './Pages/Dicipinas';
import QuestionPage from './Pages/QuestionPage/QuestionPage';
import SpecificVideos from './Pages/SpecificVideos/SpecificVideos';
import Videos from './Pages/VideoPage/VideoPage';
import Genio from './Pages/Genio/Genio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questoes" element={<Questoes />} />
        <Route path="/diciplinas" element={<Diciplinas />} />
        <Route path="/questionpage" element={<QuestionPage />} />
        <Route path="/specificvideos" element={<SpecificVideos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/genio" element={<Genio />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
