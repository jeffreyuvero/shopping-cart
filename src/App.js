
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Product />
        <Cart />
      </Provider> 
    </div>
  );
}

export default App;
