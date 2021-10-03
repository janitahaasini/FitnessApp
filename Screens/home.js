import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Button ,Image} from 'react-native';
import selectScreen from './SelectScreen'

export default class HomeScreen extends Component {
  selectScreen=()=>{
    this.props.navigation.navigate('SelectScreen')
  }
  render() {
    return (
      <View style={styles.container}>
       <Image source={require('../assets/logo.jpg')} style={styles.logoImage}/>
     <TouchableOpacity style={styles.startButton} onPress={()=>this.selectScreen()}>
     <Text style={styles.startText}>START</Text>
     </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
  startButton:{
    backgroundColor:"#fce58b",
    width:150,
    height:150,
    borderRadius:40,
    marginTop:70
  },
  startText:{
    flex:1,
  fontFamily:"neucha",
  fontSize:40,
  paddingLeft:28,
  marginTop:50
  },
  logoImage:{
    width:90,
    height:90,
    marginBottom:1,
    marginTop:-40
  }
  

});
