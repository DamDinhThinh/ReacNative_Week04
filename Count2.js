import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1

export default function App() {
  const [diceRolls, setDiceRolls] = useState([])
  const [rollCount, setRollCount] = useState(0)

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Roll dice!"
        onPress={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()])
          setRollCount(rollCount + 1)
        }}
      />
      <Text style={{ fontSize: 24, marginVertical: 10 }}>
        Count: {rollCount}
      </Text>
      {/* Display dice rolls concatenated as groups */}
      <Text style={{ fontSize: 24 }}>
        {diceRolls.map((diceRoll, index, array) => {
          if ((index + 1) % 3 === 0) {
            return array.slice(index - 2, index + 1).join('') + ' '
          }
          return null
        })}
      </Text>
    </View>
  )
}