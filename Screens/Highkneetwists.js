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

export default class HighkneetwistsScreen extends Component{
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

      <Text style={{color:'white',fontWeight:'bold'}}>HighkneetwistsScreen🙏🏻,</Text>
      <Image source={require('../assets/exersices/highKneeTwists.gif')} style={{width:330,height:200}}/>
      <View>
      <Text style={{color:'red',fontWeight:'bold',fontSize:30}}>Description:</Text>
      <Text style={{alignItems:'left',color:'#fce58b'}}>
High Knees Twists is an intensive cardio type standing abs exercise. This exercise is similair to a regular high knees exercise (also known as run in place, sprinting on spot), but there is a twist. Literally. This variation of high knees is designed to put more your abodominal muscles to work. Especially the obliques by twisting your torso side to side.
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