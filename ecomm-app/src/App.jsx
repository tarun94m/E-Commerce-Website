import CartProvider from "./context/cart/CartProvider";
import AppRoutes from "./routes/AppRoutes";
const App = () => {
  
  return (
    <>
      <CartProvider>
         <AppRoutes />
      </CartProvider>
    </>
  )
}

export default App;
