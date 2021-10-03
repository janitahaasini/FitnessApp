import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  Platform,
  StatusBar,
  ScrollView
} from 'react-native';
import AppHeader from '../components/header';
import Timer from '../components/Timer'

export default class KneeTuckCrunchScreen extends Component{
  selectScreen=()=>{
    this.props.navigation.navigate('SelectScreen')
  };
  exerciseScreen=()=>{
    this.props.navigation.navigate('ExerciseScreen')
  }
  render(){
    return(
     <View>

      <View style={{marginLeft:280}}>
<TouchableOpacity onPress={()=>this.selectScreen()} style={{backgroundColor:'#fce58b',width:25,height:25}} >
<Image source={require('../assets/homeButton.jpg')} style={{width:20,height:20}}/>
</TouchableOpacity>
</View>

<View>
<TouchableOpacity style={{width:40,height:40}} onPress={()=>this.exerciseScreen()}>
<Text style={{fontSize:40,marginTop:-40}}>←</Text>
</TouchableOpacity> 
</View>

      <Text style={{color:'white',fontWeight:'bold'}}>Welcome To KneeTuckCrunchScreen 🙏🏻,</Text>
      <Image source={require('../assets/exersices/kneetuckcrunches.gif')} style={{width:330,height:200}}/>
      <View>
      <Text style={{color:'red',fontWeight:'bold',fontSize:30}}>Description:</Text>
      <Text style={{alignItems:'left',color:'#fce58b'}}>
Knee tucks have a number of benefits. They can help you:

improve your strength and endurance significantly in a short amount of time
shape and tone your whole body
work on controlled movements
You may even notice a significant improvement in your overall peak power — an essential component of any high-intensity interval training (HIIT) workout.

This means your body could burn calories long after the exercise is completed.
</Text>
<Text style={{color:'red',fontWeight:'bold',fontSize:30}}>
Time:
</Text>
<Text style={{alignItems:'left',color:'#fce58b'}}>
45sec
</Text>
      </View>
      <View>
      <Timer/>
      </View>
      </View>
    )
  }
}