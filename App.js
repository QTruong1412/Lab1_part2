import { StyleSheet, Text, View,TouchableOpacity,Vibration } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {Entypo} from '@expo/vector-icons';

export default function App() {
  const[darkMode,setDarkMode]=useState(false);
  const[currentNumber,setcurrentNumber]=useState('');
  const[lastNumber,setlastNumber]=useState('');
  const buttons=['c','DEL','/',7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","="]
  function calculator(){
    let lastArr=currentNumber[currentNumber.length-1];
    if (lastArr==='/'||lastArr==='*'||lastArr==='-'||lastArr==='+'||lastArr==='.'){
      setcurrentNumber(currentNumber)
      return
    }
    else{
      let results=eval(currentNumber).toString();
      setcurrentNumber(results)
      return
    }
  }
  function handleInput(buttonPressed){
    if(buttonPressed==="+"||buttonPressed==="-"||buttonPressed==="*"||buttonPressed==="/"||buttonPressed==="."){
      Vibration.vibrate(35);
      setcurrentNumber(currentNumber+buttonPressed);
      return
    }
    else if(buttonPressed===1||buttonPressed===2||buttonPressed===3||buttonPressed===4||buttonPressed===5||buttonPressed===6||buttonPressed===7||buttonPressed===8||buttonPressed===9||buttonPressed===0||buttonPressed==="."){
      Vibration.vibrate(35);
    }
    switch(buttonPressed){
      case "DEL":
        Vibration.vibrate(35);
        setcurrentNumber(currentNumber.substring(0,(currentNumber.length-1)))
        return
      case "C":
        Vibration.vibrate(35);
        setlastNumber('')
        setcurrentNumber('')
        return
      case "-":
        Vibration.vibrate(35);
        setlastNumber(currentNumber+"=")
        calculator()
        return
    }
    setcurrentNumber(currentNumber+buttonPressed)
  }
  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white' : 'black'} onPress={()=> darkMode ? setDarkMode(false) : setDarkMode(true)}/>
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '='||button === '/'||button === '*'||button === '+'||button === '-'?
          <TouchableOpacity key={button} style={[styles.button,{backgroundColor:'#00b9d6'}]} onPress={()=>handleInput(button)}>
            <Text style={[styles.textButton,{color:'white',fontSize:28}]}>
              {button}
            </Text>
          </TouchableOpacity>
          :
          button === '.'||button === 'DEL'?
          <TouchableOpacity key={button} style={[styles.button,{backgroundColor:button==='.'?
          darkMode ? '#303946': '#fff':darkMode ===true? '#414853': '#ededed',minWidth:'37%'}]}
          onPress={()=>handleInput(button)}>
            <Text style={styles.textButton}>
              {button}
            </Text>
          </TouchableOpacity>
          :
          button === 'C'?
          <TouchableOpacity key={button} style={[styles.button,{backgroundColor:typeof(button)==='number'?
          darkMode ? '#303946': '#fff':darkMode ===true? '#414853': '#ededed',minWidth:'36%'}]}
          onPress={()=>handleInput(button)}>
            <Text style={styles.textButton}>
              {button}
            </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity key={button} style={[styles.button,{backgroundColor:typeof(button)==='number'?
          darkMode ? '#303946': '#fff':darkMode ===true? '#414853': '#ededed'}]}
          onPress={()=>handleInput(button)}>
            <Text style={styles.textButton}>
              {button}
            </Text>
          </TouchableOpacity>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  results:{
    backgroundColor: darkMode ? '#282f3b': '#f5f5',
    maxWidth:'100%',
    maxHeight:'35%',
    alignContent:'flex-end',
    justifyContent:'flex-end',
  },
  resultText:{
    maxHeight:45,
    color:'#00b9d6',
    margin:15,
    fontSize:35,
  },
  historyText:{
    color:darkMode ? '#B5B7BB': '#e5e5e5',
    fontSize:20,
    marginRight:10,
    alignSelf:'flex-end',
  },
  themeButton:{
    alignSelf:'flex-start',
    bottom:'5%',
    margin:15,
    backgroundColor:darkMode ? '#7b8084': '#e5e5e5',
    alignContent:"center",
    width:50,
    height:50,
    borderRadius:25,
    justifyContent:"center",
  },
  buttons:{
    width:"100%",
    height:"35%",
    flexDirection:'row',
    flexWrap:'wrap',
  },
  button:{
    borderColor:darkMode ? '#3f4d5b': '#e5e5e5',
    alignContent:'center',
    justifyContent:"center",
    minWidth:'24%',
    minHeight:'24%',
    flex:2,
  },
  textButton:{
    color:darkMode ? '#b5b7bb': '#e5e5e5',
    fontSize:28,
  }
});
