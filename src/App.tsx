import {Provider} from 'react-redux';
import {Text} from 'react-native';
import { store } from './store';

const App = () => {

  return (
    <Provider store={store}>
      <Text>
        place holder for your own page
      </Text>
    </Provider>
  );
};


export default App;
