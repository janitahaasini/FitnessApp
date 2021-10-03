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

export default class ChandranamaskarScreen extends Component{
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

      <Text style={{color:'white',fontWeight:'bold'}}>Welcome To ChandranamaskarScreen 🙏🏻,</Text>
      <Image source={require('../assets/yoga/chandranamaskar.gif')} style={{width:200,height:100}}/>
      <View>
      <Text style={{color:'red',fontWeight:'bold',fontSize:30}}>Description:</Text>
      <Text style={{color:'#fce58b'}}>
The Chandra Namaskar is a salutation to the moon. The moon represents emotions, emotional intelligence and taste. As the Chandra Nadi or Moon Channel runs along the left side, you begin the Chandra Namaskar with your left leg first. Chandra Namaskar must be practiced at 6 pm facing the Moon. Performing this namaskar during full moon nights is extremely nourishing to the body and spirit.

Chandra Namaskar - 14 steps make half the cycle:

1. Pranam asana (The Prayer Pose)

2. Hastha Utanasana (Raised arms pose)

3. Padahastasana (Standing forward bend)

4. Ashwa Sanchalanasana (Equestrian pose)

5. Inhale and bend back (Ardha Chandra asana)

6. Santholanasana (Plank Pose)

7. Ashtanga Namaskar Asana (Eight limbed salutation)

8. Bhujangasana (Cobra pose)

9. Adho Mukha Svanasana (Downward dog pose)

10. Ashwa Sanchalanasana (Equestrian pose)

11. Inhale and bend back (Ardha Chandra asana)

12. Padahastasana (Standing forward bend)

13. Hastha Utanasana

14. Pranam asana


</Text>
<Text style={{color:'red',fontWeight:'bold',fontSize:30}}>
Time:
</Text>
<Text style={{alignItems:'left',color:'#fce58b'}}>
Repeat the 14 steps with the Right leg to make it 1 complete cycle with a total of 28 counts.
</Text>
      </View>
      <View>
      <Timer/>
      </View>
      </View>
    )
  }
}