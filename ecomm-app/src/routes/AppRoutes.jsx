import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import NotFound from '../pages/notFound/NotFound';
// import Loader from '../components/loader';
import useFetchData from '../hooks/useFetchData';
import ProductListing from '../pages/productListing/ProductListing';
import CartItems from '../pages/cartItems/CartItems';
const AppRoutes = () => {

  const {data: categories, error, isLoading } = useFetchData('https://fakestoreapi.com/products/categories', []);
  return (
      <>
      {/* <Loader /> */}
        <Router>
          
          <Header categories={categories} isLoading={isLoading}/> 
            <Routes>
              {/* Dynamic routing  */}
              {/* <Route path='/users/:userId/posts/:postId' element={<PostDetails />} /> */}
              <Route path='/' element={<ProductListing />} />
              <Route path='/cart' element={<CartItems />} />
              <Route  path='/products/:categoryName' element={<ProductListing />}/>
              <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
      </>
  )

}

export default AppRoutes;