import React, { Component } from "react"
import { Slider, Text, View } from "react-native"

export default (UdaciSlider = ({ max, step, unit, value, onChange }) => {
  return (
    <View>
      <Slider
        maximumValue={max}
        minimumValue={0}
        step={step}
        value={value}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
})
