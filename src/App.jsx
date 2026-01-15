import Body from './components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore.jsx';

function App() {

  return (
    <Provider store={appStore}> //providing the redux store to the entire app
      <Body />
    </Provider>
  )
}

export default App;
