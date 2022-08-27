import logo from './logo.svg';
import './App.css';
import AppLayout from './Components/AppLayout';
import { Provider } from 'react-redux';
import Store from './Store/Store';

function App() {
    return (
      <Provider store={Store}>
        <div className="App">
          <AppLayout>

          </AppLayout>
        </div>
        </Provider>
    );
}

export default App;
