import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'

function App() {
  return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element={
            <Page1 />
          } />
          <Route path="/Page2" element={
            <Page2 />
          } />
          <Route path="/Page3" element={
            <Page3 />
          } />
          <Route path="/Page4" element={
            <Page4 />
          } />
          <Route path="/Page5" element={
            <Page5 />
          } />
          <Route path="/Page6" element={
            <Page6 />
          } />
        </Routes>
        {/*
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        */}
      </BrowserRouter>
  );
}

export default App;
