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
import AppHeader from '../components/header'
import Timer from '../components/Timer'

export default class BridgePoseScreen extends Component{
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

      <Text style={{color:'white',fontWeight:'bold'}}>Welcome To BridgePoseScreen 🙏🏻,</Text>
      <Image source={require('../assets/yoga/bridgepose.jpg')} style={{width:200,height:100}}/>
      <View>
      <Text style={{color:'red',fontWeight:'bold',fontSize:30}}>Description:</Text>
      <Text style={{alignItems:'left',color:'#fce58b'}}>
Bridge Pose — Setu Bandha Sarvangasana (SAY-too BAHN-duh shar-vahn-GAHS-uh-nuh) — is a beginning backbend that helps to open the chest and stretch the thighs. Its Sanskrit name comes from five different words:
“Setu” — meaning “bridge”
“Bandha” — meaning “lock”
“Sarva” — meaning “all”
“Anga” — meaning “limb”
“Asana” — meaning “pose”
When you're in the pose, your arms and legs create a “locked bridge” with your body. This pose can be used as preparation for deeper backbends, or practiced with a block as a restorative pose.
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