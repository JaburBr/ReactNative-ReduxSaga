import { StackNavigator } from 'react-navigation';
import Main from './pages/main';
import Favorites from './pages/favorites';
import { colors } from './styles';

const Routes = StackNavigator({
  Main: { screen: Main },
  Favorites: { screen: Favorites },
}, {
    navigationOptions: {
      headerStyle:{
        backgroundColor: colors.primaryDark,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    },
  });

export default Routes;
