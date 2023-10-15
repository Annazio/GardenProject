import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import SingleCategoryPage from './pages/SingleCategoryPage';
import SingleItemPage from './pages/SingleItemPage';
import ShoppingCardPage from './pages/ShoppingCardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
          <Route path ="/" element={<HomePage />}/>
          <Route path ="/categories" element={<CategoriesPage />}/>
          <Route path ="/singlecategory" element={<SingleCategoryPage />}/>
          <Route path ="/singleitem" element={<SingleItemPage />}/>
          <Route path ="/shoppingcard" element={<ShoppingCardPage />}/>
          <Route path ="/notfound" element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
