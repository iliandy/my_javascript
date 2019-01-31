import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { Platform, StatusBar, View } from "react-native"
import { createAppContainer, createBottomTabNavigator } from "react-navigation"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { Constants } from "expo"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import AddEntry from "./components/AddEntry"
import History from "./components/History"
import { purple, white } from "./utils/colors"
import reducer from "./reducers"

const RouteConfigs = {
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: "History",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-bookmarks" size={25} color={tintColor} />
      ),
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: "Add Entry",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus-square" size={25} color={tintColor} />
      ),
    },
  },
}

const iosTabNavigatorConfig = {
  defaultNavigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: purple,
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
}

const androidTabNavigatorConfig = {
  defaultNavigationOptions: {
    header: null,
  },
  activeColor: white,
  barStyle: {
    height: 56,
    backgroundColor: purple,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
}

const TabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(RouteConfigs, iosTabNavigatorConfig)
    : createMaterialBottomTabNavigator(RouteConfigs, androidTabNavigatorConfig)

const Tabs = createAppContainer(TabNavigator)

const UdaciStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  store = createStore(reducer)

  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Tabs />
        </View>
      </Provider>
    )
  }
}
