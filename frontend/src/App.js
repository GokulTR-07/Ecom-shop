import './App.css';
import { BrowserRouter, Routes, Route
  // , Navigate
} from 'react-router-dom';
import {LoginPage, SignupPage, ActivationPage, HomePage, ProductsPage, ProductDetailsPage ,BestSellingPage, EventsPage, FAQPage, ProfilePage, ShopCreatePage, SellerActivationPage, ShopLoginPage, CheckoutPage, PaymentPage, OrderSuccessPage, OrderDetailsPage, TrackOrderPage, UserInbox} from './routes/Routes.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';
import Store from './redux/store.js';
import { loadSeller, loadUser } from './redux/actions/user.js';
import ProtectedRoute from "./routes/ProtectedRoute.js";
import { ShopHomePage } from "./ShopRoutes.js";
import SellerProtectedRoute from './routes/SellerProtectedRoute.js';
import { ShopDashboardPage, ShopCreateProduct, ShopAllProducts,ShopCreateEvents, ShopAllEvents, ShopAllCoupons, ShopPreviewPage,ShopAllOrders,ShopOrderDetails, ShopAllRefunds, ShopSettingsPage, ShopWithDrawMoneyPage, ShopInboxPage } from "./routes/ShopRoutes";
import {
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw
} from "./routes/AdminRoutes.js";
import { getAllProducts } from './redux/actions/product.js';
import { getAllEvents } from './redux/actions/event.js';
import axios from 'axios';
import { server } from './server.js';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedAdminRoute from './routes/ProtectedAdminRoute.js';

// const stripePromise = loadStripe("pk_test_51OmCpsSC2wMK0MF2CsNEdT0UdVw4P0iaYrnpew9C0tliw8yeVUn1Gl1X7ZBWmP2uY2jdwlpqoOYZYqij8ZxxoidI000UBuxXa6")

function App() {

  const [stripeApiKey, setStripeApiKey] = useState("");
  // const [clientSecret, setClientSecret] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    console.log(data.stripeApiKey)
    setStripeApiKey(loadStripe(data.stripeApiKey));
  }

  // async function getClientSecret(){
  //   const { secret } = await axios.post(`${server}/payment/process`);
  //   console.log(secret.clientSecret);
  //   setClientSecret(secret.clientSecret);
  // }
  // getClientSecret();

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    getStripeApiKey();
    
  }, []);

  // useEffect(()=>{
  //   fetch(`${server}/payment/process`, {
  //     method: "POST",
  //     body : JSON.stringify({}),
  //   }).then(async (res)=> {
  //     const {clientSecret} = await res.json();
  //     setClientSecret(clientSecret);
  //   })
  // },[])


  
  return (
        <BrowserRouter>
          {stripeApiKey && 
          // clientSecret && 
          (
          <Elements stripe={stripeApiKey} 
          // options={{clientSecret}}
          >
            <Routes>
              <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <PaymentPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Elements>
        )}
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/sign-up' element={<SignupPage/>}/>
          <Route path='/activation/:activation_token' element={<ActivationPage/>}/>
          <Route path='/seller/activation/:activation_token' element={<SellerActivationPage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/product/:id' element={<ProductDetailsPage/>}/>
          <Route path='/best-selling' element={<BestSellingPage/>}/>
          <Route path='/events' element={<EventsPage/>}/>
          <Route path='/faq' element={<FAQPage/>}/>
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
          <Route path="/order/success" element={<OrderSuccessPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inbox"
            element={
              <ProtectedRoute>
                <UserInbox/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/order/:id"
            element={
              <ProtectedRoute>
                <OrderDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/track/order/:id"
            element={
              <ProtectedRoute>
                <TrackOrderPage />
              </ProtectedRoute>
            }
          />
          <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
          {/* Shop Routes */}
          <Route path='/shop-create' element={<ShopCreatePage/>}/>
          <Route path='/shop-login' element={<ShopLoginPage/>}/>
          <Route path='/shop/:id' element={
            <SellerProtectedRoute>
              <ShopHomePage/>
            </SellerProtectedRoute>
          }/>
          <Route path='/settings' element={
            <SellerProtectedRoute>
              <ShopSettingsPage/>
            </SellerProtectedRoute>
          }/>
          <Route path='/dashboard' element={
            <SellerProtectedRoute>
              <ShopDashboardPage/>
            </SellerProtectedRoute>
          }/>
          <Route path='/dashboard-create-product' element={
            <SellerProtectedRoute>
              <ShopCreateProduct/>
            </SellerProtectedRoute>
          }/>
          <Route path='/dashboard-orders' element={
            <SellerProtectedRoute>
              <ShopAllOrders/>
            </SellerProtectedRoute>
          }/>
          <Route path='/dashboard-refunds' element={
            <SellerProtectedRoute>
              <ShopAllRefunds/>
            </SellerProtectedRoute>
          }/>
          <Route path='/order/:id' element={
            <SellerProtectedRoute>
              <ShopOrderDetails/>
            </SellerProtectedRoute>
          }/>
          <Route path='/dashboard-products' element={
            <SellerProtectedRoute>
              <ShopAllProducts/>
            </SellerProtectedRoute>
          }/>
          <Route path='/dashboard-create-event' element={
            <SellerProtectedRoute>
              <ShopCreateEvents/>
            </SellerProtectedRoute>
          }/>
          <Route path='/dashboard-events' element={
            <SellerProtectedRoute>
              <ShopAllEvents/>
            </SellerProtectedRoute>
          }/>
          <Route path='/dashboard-coupons' element={
            <SellerProtectedRoute>
              <ShopAllCoupons/>
            </SellerProtectedRoute>
          }/>
          <Route path='/dashboard-withdraw-money' element={
            <SellerProtectedRoute>
              <ShopWithDrawMoneyPage/>
            </SellerProtectedRoute>
          }/>
          <Route path='/dashboard-messages' element={
            <SellerProtectedRoute>
              <ShopInboxPage/>
            </SellerProtectedRoute>
          }/>
           {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardUsers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-sellers"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardSellers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-orders"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardOrders />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path="/admin-products"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardProducts />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path="/admin-events"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardEvents />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path="/admin-withdraw-request"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardWithdraw />
            </ProtectedAdminRoute>
          }
        />
        </Routes>
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
      </BrowserRouter>
  )
}

export default App;
