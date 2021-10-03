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

export default class SuryanamaskarScreen extends Component{
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
      <Text style={{color:'white',fontWeight:'bold'}}>Welcome To SuryanamaskarScreen 🙏🏻,</Text>
      <Image source={require('../assets/yoga/suryanamaskar.gif')} style={{width:200,height:100}}/>
      <View>
      <Text style={{color:'red',fontWeight:'bold',fontSize:30}}>Description:</Text>
      <Text style={{alignItems:'left',color:'#fce58b'}}>
Surya Namaskar (Sanskrit: सूर्यनमस्कार, romanized: Sūryanamaskāra) Salute to the Sun or Sun Salutation,[2] is a practice in yoga as exercise incorporating a flow sequence of some twelve gracefully linked asanas.[3][4] The asana sequence was first recorded as yoga in the early 20th century, though similar exercises were in use in India before that, for example among wrestlers. The basic sequence involves moving from a standing position into Downward and Upward Dog poses and then back to the standing position, but many variations are possible. The set of 12 asanas is dedicated to the solar deity Surya. In some Indian traditions, the positions are each associated with a different mantra.
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