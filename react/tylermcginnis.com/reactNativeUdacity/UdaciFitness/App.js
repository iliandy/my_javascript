import React from "react"
import { Platform, View } from "react-native"
import AddEntry from "./components/AddEntry"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import History from "./components/History"
import {
  createAppContainer,
  createBottomTabNavigator,
  createMaterialBottomTabNavigator,
} from "react-navigation"
import { purple, white } from "./utils/colors"
import { FontAwesome, Ionicons } from "@expo/vector-icons"

const RouteConfigs = {
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: "History",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
      ),
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: "Add Entry",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus-square" size={30} color={tintColor} />
      ),
    },
  },
}

const TabNavigationConfig = {
  defaultNavigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
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

const TabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(RouteConfigs, TabNavigationConfig)
    : createMaterialBottomTabNavigator(RouteConfigs, TabNavigationConfig)

const Tabs = createAppContainer(TabNavigator)
export default class App extends React.Component {
  store = createStore(reducer)

  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <Tabs />
        </View>
      </Provider>
    )
  }
}
