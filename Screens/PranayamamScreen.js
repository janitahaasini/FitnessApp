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

export default class PranayamamScreen extends Component{
   selectScreen=()=>{
    this.props.navigation.navigate('SelectScreen')
  };
  yogaScreen=()=>{
    this.props.navigation.navigate('YogaScreen')
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
<TouchableOpacity style={{width:40,height:40}} onPress={()=>this.yogaScreen()}>
<Text style={{fontSize:40,marginTop:-40}}>←</Text>
</TouchableOpacity> 
</View>

      <Text style={{color:'white',fontWeight:'bold'}}>Welcome To PranayamamScreen 🙏🏻,</Text>
      <Image source={require('../assets/yoga/pranayamam.gif')} style={{width:330,height:200}}/>
      <View>
      <Text style={{color:'red',fontWeight:'bold',fontSize:30}}>Description:</Text>
      <Text style={{alignItems:'left',color:'#fce58b'}}>
Pranayama is the ancient practice of controlling your breath. You control the timing, duration, and frequency of every breath and hold.

The goal of pranayama is to connect your body and mind. It also supplies your body with oxygen while removing toxins. This is meant to provide healing physiological benefits.

Pranayama involves different breathing techniques.
</Text>
<Text style={{color:'red',fontWeight:'bold',fontSize:30}}>
Time:
</Text>
<Text style={{alignItems:'left',color:'#fce58b'}}>
1min
</Text>
      </View>
      <View>
      <Timer/>
      </View>
      </View>
    )
  }
}