import React, { Component } from "react"
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { Location, Permissions } from "expo"
import { Foundation } from "@expo/vector-icons"
import { blue, purple, white } from "../utils/colors"
import { calculateDirection } from "../utils/helpers"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: "center",
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: white,
    fontSize: 20,
  },
  directionContainer: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 35,
    textAlign: "center",
  },
  direction: {
    color: purple,
    fontSize: 120,
    textAlign: "center",
  },
  metricContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: blue,
  },
  metric: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  subHeader: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 5,
  },
})

export default class Live extends Component {
  state = {
    coords: null,
    direction: "",
    status: null,
  }

  componentDidMount() {
    Permissions.getAsync(Permissions.LOCATION)
      .then(({ status }) => {
        if (status === "granted") {
          return this.setLocation()
        }

        this.setState(() => ({ status }))
      })
      .catch((error) => {
        console.warn("Error getting location permission: ", error)

        this.setState(() => ({ status: "undetermined" }))
      })
  }

  askPermission = () => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({ status }) => {
        if (status === "granted") {
          return this.setLocation()
        }

        this.setState(() => ({ status }))
      })
      .catch((error) => {
        console.warn("Error asking location permission: ", error)
      })
  }

  setLocation = () => {
    Location.watchPositionAsync(
      {
        enableHighAccuracy: true,
        timeInterval: 1,
        distanceInterval: 1,
      },
      ({ coords }) => {
        const newDirection = calculateDirection(coords.heading)
        const { direction } = this.state

        this.setState(() => ({
          coords,
          status: "granted",
          direction: newDirection,
        }))
      }
    )
  }

  render() {
    const { coords, direction, status } = this.state

    if (status === null) {
      return <ActivityIndicator size="large" style={{ marginTop: 30 }} />
    }
    // if (status === "denied") {
    //   return (
    //     <View style={styles.center}>
    //       <Foundation name="alert" size={50} />
    //       <Text>
    //         You denied location permissions. Enable location services for this
    //         app.
    //       </Text>
    //     </View>
    //   )
    // }
    if (status === "denied" || status === "undetermined") {
      return (
        <View style={styles.center}>
          <Foundation name="alert" size={50} />
          <Text>You need to enable location services for this app.</Text>
          <TouchableOpacity style={styles.button} onPress={this.askPermission}>
            <Text style={styles.buttonText}>Enable</Text>
          </TouchableOpacity>
        </View>
      )
    }
    // debugger
    return (
      <View style={styles.container}>
        <View style={styles.directionContainer}>
          <Text style={styles.header}>You're heading</Text>
          <Text style={styles.direction}>{direction}</Text>
        </View>
        <View style={styles.metricContainer}>
          <View style={styles.metric}>
            <Text style={[styles.header, { color: white }]}>Altitude</Text>
            <Text style={[styles.subHeader, { color: white }]}>
              {Math.round(coords.altitude * 3.28084)} Feet
            </Text>
          </View>
          <View style={styles.metric}>
            <Text style={[styles.header, { color: white }]}>Speed</Text>
            <Text style={[styles.subHeader, { color: white }]}>
              {(coords.speed * 2.23694).toFixed(2)} MPH
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
