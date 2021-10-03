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

export default class SplitJumpScreen extends Component{
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

      <Text style={{color:'white',fontWeight:'bold'}}>Welcome To SplitJumpScreen 🙏🏻,</Text>
      <Image source={require('../assets/exersices/SplitJumps.gif')} style={{width:320,height:200}}/>
      <View>
      <Text style={{color:'red',fontWeight:'bold',fontSize:30}}>Description:</Text>
      <Text style={{alignItems:'left',color:'#fce58b'}}>
The alternating lunge jump is an explosive bodyweight exercise that targets the lower-body muscles, including the quads, glutes, and hamstrings. It can be performed for time or reps in power training, and is also effective in any fat-loss or athleticism-focused workout.
</Text>
<Text style={{color:'red',fontWeight:'bold',fontSize:30}}>
Time:
</Text>
<Text style={{alignItems:'left',color:'#fce58b'}}>
30sec
</Text>
      </View>
      <View>
      <Timer/>
      </View>
      </View>
    )
  }
}