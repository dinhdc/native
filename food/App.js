import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from "./src/screens/SearchScreen";
import SingleResultScreen from "./src/screens/SingleResultScreen";

const navigator = createStackNavigator({
    Search: SearchScreen,
    SingleResult: SingleResultScreen,
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search',
        headerTitleAlign: 'center'
    }
})

export default createAppContainer(navigator)
