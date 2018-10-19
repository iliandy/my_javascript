import React, { Component } from "react"
import { Text, StyleSheet, View, Dimensions } from "react-native"
import Contact from "../Contact/Contact"
import Colors from "../../constants/Colors"

export default class Home extends Component {
  render() {
    return (
      <View style={styles.homeBackground}>
        <Contact />
        <Contact />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeBackground: {
    height: Dimensions.get("window").height,
    backgroundColor: Colors.steelBlue,
  },
})
