import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store.js";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
