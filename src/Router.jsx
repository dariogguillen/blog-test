import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Pages/Posts';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Posts />} />
    </Routes>
  </BrowserRouter>
);

export default Router;