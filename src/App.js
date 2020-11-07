import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './GlobalStyle';
import Routes from './Routes';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
};

export default App;
