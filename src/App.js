import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectMovieScreen from './SelectMovieScreen'
import SelectTimeScreen from './SelectTimeScreen'
import Testes from './Testes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Testes />} />
        <Route path="/SelectTimeScreen/:movieId" element={<SelectTimeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
