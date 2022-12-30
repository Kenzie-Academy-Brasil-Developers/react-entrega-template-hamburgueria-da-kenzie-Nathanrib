import { RoutesComponents } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";


const App = () => {
	return (
		<>
     
      <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      
      <GlobalStyle/>
      <UserProvider>
				      <CartProvider>
                  <RoutesComponents />
				      </CartProvider>
			</UserProvider>
     

    
    </>
    
  );
}

export default App;
