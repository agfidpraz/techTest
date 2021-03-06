import { Provider } from 'react-redux'
import Routers from './routers'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
