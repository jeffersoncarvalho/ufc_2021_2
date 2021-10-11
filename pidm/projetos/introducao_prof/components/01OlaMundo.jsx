import React from 'react'
import {Text,View} from 'react-native'

class OlaMundo extends React.Component{
    render(){
      //aqui dentro vai ficar o código JSX
      return (
          <View>
              <Text style={{fontSize:23,fontWeight:'bold'}}>
                  Primeira Aula de React Native!
              </Text>
          </View>
      )  
    }
}

export default OlaMundo