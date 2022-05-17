import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectMovieScreen from './SelectMovieScreen'
import SelectTimeScreen from './SelectTimeScreen'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SelectMovieScreen />} />
        <Route path="/SelectTimeScreen/:movieId" element={<SelectTimeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
