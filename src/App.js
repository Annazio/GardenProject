import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import SingleItemPage from './pages/SingleItemPage';
import ShoppingCardPage from './pages/ShoppingCardPage';
import NotFoundPage from './pages/NotFoundPage';
import Wrap from './component/Wrap';
import ProductsListPage from './pages/ProductListPage';
import SingleCategoryPage from './pages/SingleCategoryPage';
import SalePage from './pages/SalePage'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Wrap/>}>
          <Route index element={<HomePage />}/>
          <Route path ="categories" element={<CategoriesPage />}/>
          <Route path ="products/all" element={<ProductsListPage />}/>
          <Route path ="products/sale" element={<SalePage />}/>
          <Route path ="categories/:id" element={<SingleCategoryPage />}/>
          <Route path ="products/:id" element={<SingleItemPage />}/>
          <Route path ="shoppingcard" element={<ShoppingCardPage />}/>
          <Route path ="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
