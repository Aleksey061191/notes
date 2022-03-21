import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { DefaultLayout } from "./components/layout/DefaultLayout";
import { store } from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <DefaultLayout />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
