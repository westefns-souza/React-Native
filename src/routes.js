import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const MainNavigator = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF"
        }
    },
    Product: {
        screen: Product,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF"
        }
    }
});

const App = createAppContainer(MainNavigator);

export default App;