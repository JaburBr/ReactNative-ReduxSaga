import Reactotron, { asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {

  const tron = Reactotron
    .configure() //.configure({ host: '192.168.1.1' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect() // let's connect!

  console.tron = tron;

  tron.clear();
}
