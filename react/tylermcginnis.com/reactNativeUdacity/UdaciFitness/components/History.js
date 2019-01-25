import React, { Component } from "react"
import { Text, View } from "react-native"
import { connect } from "react-redux"
import { addEntry, receiveEntries } from "../actions"
import { getDailyReminderValue, timeToString } from "../utils/helpers"
import { fetchCalendarResults } from "../utils/api"

class History extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props

    fetchCalendarResults()
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({ entries }) => {
        if (!entries[timeToString()]) {
          dispatch(
            addEntry({
              [timeToString()]: getDailyReminderValue(),
            })
          )
        }
      })
      .then(() => this.setState(() => ({ ready: true })))
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  }
}

export default connect(mapStateToProps)(History)
