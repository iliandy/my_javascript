import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Entypo, FontAwesome } from "@expo/vector-icons"

export default (UdaciStepper = ({
  max,
  step,
  unit,
  value,
  onDecrement,
  onIncrement,
}) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesome name="minus" size={30} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
          <FontAwesome name="plus" size={30} color={"black"} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
})
