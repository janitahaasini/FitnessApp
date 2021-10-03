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

export default class ReverseCrunchesScreen extends Component{
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

      <Text style={{color:'white',fontWeight:'bold'}}>ReverseCrunchesScreen 🙏🏻,</Text>
      <Image source={require('../assets/exersices/Reversecrunches.gif')} style={{width:330,height:200}}/>
      <View>
      <Text style={{color:'red',fontWeight:'bold',fontSize:30}}>Description:</Text>
      <Text style={{alignItems:'left',color:'#fce58b'}}>
The reverse crunch is a challenging core exercise that primarily hits your rectus abdominis, the muscle in your abdomen that makes up your “six-pack.”

It’s a simple exercise that you can pick up in minutes, and is great for beginners and fitness aficionados alike. As you get stronger, you can increase the number of reps and sets to continue to make it more challenging.
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