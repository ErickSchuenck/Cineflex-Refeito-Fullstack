import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectMovieScreen from './SelectMovieScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SelectMovieScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
