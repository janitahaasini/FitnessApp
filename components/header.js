import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View
      style={styles.header}>
      <Text style={styles.text}>FITNESS APP</Text>
       <Image source={require('../assets/logo.jpg')} style={styles.logoImage}/>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  header:{
    backgroundColor:'rgb(106, 197, 254)',
    width:334,
    height:50,
    borderRadius:6,
    borderColor:"#34d1a0",
    borderWidth:9,
    marginTop:9,
    
  },

  text:{
    fontWeight:'bolder',
    fontSize:40,
    color:'#fce58b',
    textAlign:'center',
    justifyContent:'center',
    paddingLeft:0,
    fontFamily:'neucha',
    margin:-6
  },
  logoImage:{
    width:20,
    height:20,
   marginTop:-30,
   marginLeft:9
  }
})
export default AppHeader;