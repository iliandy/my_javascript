import React, { Component } from "react"
import { ActivityIndicator, Text, View } from "react-native"

export default class Live extends Component {
  state = {
    coords: null,
    direction: "",
    status: "denied",
  }

  render() {
    const { coords, direction, status } = this.state

    if (status === null) {
      return <ActivityIndicator size="large" style={{ marginTop: 30 }} />
    }

    if (status === "denied") {
      return (
        <View>
          <Text>Denied</Text>
        </View>
      )
    }

    if (status === "undetermined") {
      return (
        <View>
          <Text>Undetermined</Text>
        </View>
      )
    }

    return (
      <View>
        <Text>Live</Text>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    )
  }
}
