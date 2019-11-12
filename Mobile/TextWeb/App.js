import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import NewsScreen from './src/screens/NewsScreen';
import DictionaryScreen from './src/screens/DictionaryScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import WikiScreen from './src/screens/WikiScreen';

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: "TxtWeb",
        headTitleStyle: {fontSize: 36}
      })
    },
    Maps: {
      screen: MapScreen,
      navigationOptions: ({navigation}) => ({
        title: "Map",
        headTitleStyle: {fontSize: 36}
      })
    },
    Weather: {
      screen: WeatherScreen,
      navigationOptions: ({navigation}) => ({
        title: "Weather",
        headTitleStyle: {fontSize: 36}
      })
    },
    News: {
      screen: NewsScreen,
      navigationOptions: ({navigation}) => ({
        title: "News",
        headTitleStyle: {fontSize: 36}
      })
    },
    Dictionary: {
      screen: DictionaryScreen,
      navigationOptions: ({navigation}) => ({
        title: "Dictionary",
        headTitleStyle: {fontSize: 36}
      })
    },
    Review: {
      screen: ReviewScreen,
      navigationOptions: ({navigation}) => ({
        title: "Review",
        headTitleStyle: {fontSize: 36}
      })
    },
     Wiki: {
      screen: WikiScreen,
      navigationOptions: ({navigation}) => ({
        title: "Wiki",
        headTitleStyle: {fontSize: 36}
      })
    },
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(navigator);