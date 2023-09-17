// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './component/home/home';
import { Provider } from 'react-redux';
import store from './redux/store/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>

  );
}

export default App;
