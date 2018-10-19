import React, { Component, Fragment } from "react"
import { Text, StyleSheet, View } from "react-native"
import Colors from "../../constants/Colors"

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.contact}>
        <View style={styles.contactDetails}>
          <Text style={styles.name}>Andy Li</Text>
          <Text>
            <Text style={styles.emailTitle}>Email: </Text>
            <Text style={styles.email}>email@email.com</Text>
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contact: {
    backgroundColor: Colors.softWhite,
    margin: 4,
    padding: 3,
    borderColor: Colors.black,
    borderWidth: 2,
    color: Colors.text,
    flexDirection: "row",
  },
  contactDetails: {
    flex: 4,
  },
  photoButton: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.text,
  },
  emailTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  email: {
    fontSize: 16,
  },
})
