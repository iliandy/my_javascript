import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import MetricCard from "./MetricCard"
import TextButton from "./TextButton"
import { addEntry } from "../actions"
import { getDailyReminderValue, timeToString } from "../utils/helpers"
import { removeEntry } from "../utils/api"
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

  shouldComponentUpdate(nextProps) {
    return nextProps.metrics !== null && !nextProps.metrics.today
  }

  reset = () => {
    const { entryId, goBack, remove } = this.props

    remove()
    goBack()
    removeEntry(entryId)
  }

  render() {
    const { metrics } = this.props

    return (
      <View style={styles.container}>
        <MetricCard metrics={metrics} />
        <TextButton style={{ margin: 20 }} onPress={this.reset}>
          Reset
        </TextButton>
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

const mapDispatchToProps = (dispatch, { navigation }) => {
  const { entryId } = navigation.state.params

  return {
    remove: () =>
      dispatch(
        addEntry({
          [entryId]:
            timeToString() === entryId ? getDailyReminderValue() : null,
        })
      ),
    goBack: () => navigation.goBack(),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryDetail)
