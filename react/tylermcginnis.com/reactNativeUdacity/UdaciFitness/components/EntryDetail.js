import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import MetricCard from "./MetricCard"
// import { getDailyReminderValue, timeToString } from "../utils/helpers"
import { white } from "../utils/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
})

class EntryDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params
    const day = entryId.slice(8)
    const month = entryId.slice(5, 7)
    const year = entryId.slice(0, 4)

    return {
      title: `${month}/${day}/${year}`,
    }
  }

  render() {
    const { metrics } = this.props

    return (
      <View style={styles.container}>
        <MetricCard metrics={metrics} />
        <Text>
          Entry Detail -{" "}
          {JSON.stringify(this.props.navigation.state.params.entryId)}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state, { navigation }) => {
  const { entryId } = navigation.state.params

  return {
    entryId,
    metrics: state[entryId],
  }
}

export default connect(mapStateToProps)(EntryDetail)
