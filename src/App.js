import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Blogs/Blogs';

import AddProduct from './Pages/AddProducts/AddProducts';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
// import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

import AddItem from './Pages/AddItem/AddItem';
import MyItem from './Pages/MyItem/MyItem';
import { ToastContainer } from 'react-bootstrap';
import Order from './Pages/Order/Order';


function App() {
  return (
    <div className='app'>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>


        <Route path='/addItem' element={
          <RequireAuth>
         <AddItem></AddItem>
          </RequireAuth>
        }>
        </Route>

        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }>
        </Route>

        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }>
        </Route>
        <Route path="/Blogs" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout/:productId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path="/addproduct" element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

        <Route path="/manageproduct" element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }></Route>
        <Route path="/orders" element={
          <RequireAuth>
          <Order></Order>
          </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
