import React, { Component } from "react"
import { Slider, StyleSheet, Text, View } from "react-native"
import { styles } from "./UdaciSteppers"

export default (UdaciSlider = ({ max, step, unit, value, onChange }) => {
  return (
    <View style={styles.row}>
      <Slider
        maximumValue={max}
        minimumValue={0}
        step={step}
        style={{ flex: 1 }}
        value={value}
        onValueChange={onChange}
      />
      <View style={styles.metricCounter}>
        <Text style={styles.valueText}>{value}</Text>
        <Text style={styles.unitText}>{unit}</Text>
      </View>
    </View>
  )
})
