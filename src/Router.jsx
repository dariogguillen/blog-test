import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Pages/Posts';
import Post from './Pages/Post';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  </BrowserRouter>
);

export default Router;