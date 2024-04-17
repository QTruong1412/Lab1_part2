import { StyleSheet, Text, View,TouchableOpacity,Vibration } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {Entypo} from '@expo/vector-icons';

const Calulator = () => {
  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white' : 'black'} onPress={()
          => darkMode ? setDarkMode(false) : setIDarkMode(true)}/>
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>{buttons.map((button) =>
        button === )}</View>
    </View>
  )
}

export default Calulator

const styles = StyleSheet.create({
    results:{
        backgroundColor: darkMode ? '#282f3b': '#f5f5',
        maxWidth:'100%',
        maxHeight:'35%',
        alignContent:'flex-end',
        justifyContent:'flex-end',
    },
})