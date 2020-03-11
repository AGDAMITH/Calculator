/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';




export default class App extends Component {
constructor() {
  super()
  this.state = {
    resultText: "",
    calculationText: ""
  }
}
calculateResult() {
  const text = this.state.resultText
  console.log(text,eval(text))
  this.setState({
    calculationText: eval(text)
  })
  //BODMAS

}

validate() {
  const text = this.state.resultText
  switch(text.slice(-1)) {
    case '+':
    case '-':
    case '*':
    case '/':
      return false
  }
  return true
}

buttonPressed(text) {
  console.log(text)
  if(text=="="){
    return this.validate() && this.calculateResult()
  }

  this.setState({
    resultText: this.state.resultText+text
  })
}

operate(operation) {
  switch(operation) {
    case 'C':
      console.log(this.state.resultText)
      let text = this.state.resultText.split('')
      text.pop()
      this.setState({
        resultText: text.join('')
      })
      break
    case '+':
    case '-':
    case '*':
    case '/':
      const lastChar = this.state.resultText.split('').pop()
      if (operation.indexOf(lastChar) != -1 ) return
      if (operation.lastChar == '+' || operation.lastChar == '-' || operation.lastChar == '*' || operation.lastChar == '/' ) return
      this.setState({
        _str: "Hello TecAdmin!",
        get str() {
          return this._str;
        },
        set str(value) {
          this._str = value;
        },
        
      })
      

      
      if(this.state.text == '') return
      this.setState({
        resultText: this.state.resultText + operation
      })
  }
}
 
render () {
  return (
    
      <View style={styles.container}>

        <View style={styles.result}>
          <Text style={styles.resultText}>
            {this.state.resultText}
          </Text>
        </View>

        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>

        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity onPress = {() => this.buttonPressed(7)} style={styles.btn}>
                <Text style={styles.btnText}>7</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress = {() => this.buttonPressed(8)} style={styles.btn}>
                <Text style={styles.btnText}>8</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {() => this.buttonPressed(9)} style={styles.btn}>
                <Text style={styles.btnText}>9</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress = {() => this.buttonPressed(4)} style={styles.btn}>
                <Text style={styles.btnText}>4</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress = {() => this.buttonPressed(5)} style={styles.btn}>
                <Text style={styles.btnText}>5</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {() => this.buttonPressed(6)} style={styles.btn}>
                <Text style={styles.btnText}>6</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress = {() => this.buttonPressed(1)} style={styles.btn}>
                <Text style={styles.btnText}>1</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress = {() => this.buttonPressed(2)} style={styles.btn}>
                <Text style={styles.btnText}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {() => this.buttonPressed(3)} style={styles.btn}>
                <Text style={styles.btnText}>3</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress = {() => this.buttonPressed('.')} style={styles.btn}>
                <Text style={styles.btnText}>.</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress = {() => this.buttonPressed(0)} style={styles.btn}>
                <Text style={styles.btnText}>0</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {() => this.buttonPressed('=')} style={styles.btn}>
                <Text style={styles.btnText}>=</Text>
              </TouchableOpacity>

            </View>
          </View>
          <View style={styles.operations}>
              
              <TouchableOpacity onPress = {() => this.operate('C')}>
                <Text style={styles.opText}>C</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {() => this.operate('+')}>
                <Text style={styles.opText}>+</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress = {() => this.operate('-')}>
                <Text style={styles.opText}>-</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {() => this.operate('*')}>
                <Text style={styles.opText}>*</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {() => this.buttonPressed('/')}>
                <Text style={styles.opText}>/</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
  
  );
};
}
  

const styles = StyleSheet.create({
  container: {
    flex : 1
  },
  result: {
    flex : 2,
    backgroundColor : '#ffffff',
    justifyContent : "center",
    alignItems : "flex-end"
  },
  calculation: {
    flex : 1,
    backgroundColor : '#ffffff',
    justifyContent : "center",
    alignItems : "flex-end"
  },
  resultText :{
    fontSize : 30,
    color : '#767676'
  },
  calculationText :{
    fontSize : 40,
    color : '#767676'
  },
  btn : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    alignSelf : "stretch"

  },
  buttons: {
    flex : 6,
    flexDirection : 'row',
    
  },
  btnText:{
    fontSize:40,
    color: 'white'
  },
  opText:{
    fontSize:40,
    color: 'white'
  },
  numbers: {
    flex : 3,
    backgroundColor : '#434343'
  },
  operations: {
    flex : 1,
    backgroundColor : '#636363',
    justifyContent : "space-around",
    alignItems : "center"
  },
  row : {
    flexDirection : 'row',
    flex : 1,
    justifyContent : "space-around",
    alignItems : "center"
  }

});
