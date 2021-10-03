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
export default class ExerciseScreen extends Component {
  kneetuckcrunch = () => {
    this.props.navigation.navigate('KneeTuckCrunchScreen');
  };
   splitjump = () => {
    this.props.navigation.navigate('SplitJumpScreen');
  };
  reversecrunches = () => {
    this.props.navigation.navigate('ReverseCrunchesScreen');
  };
  highkneetwists = () => {
    this.props.navigation.navigate('ReverseCrunchesScreen');
  };
    selectScreen=()=>{
    this.props.navigation.navigate('SelectScreen')
  }
  render(){
    
    return(
      <ScrollView>
      <View style={{marginLeft:280}}>
<TouchableOpacity onPress={()=>this.selectScreen()} style={{backgroundColor:'#fce58b',width:25,height:25}} >
<Image source={require('../assets/homeButton.jpg')} style={{width:20,height:20}}/>
</TouchableOpacity>
</View>
      <TouchableOpacity style={styles.kneetuckcrunchButton} onPress={() => this.kneetuckcrunch()} >
      <Text style={styles.kneetuckcrunchText}>Knee tuck crunch</Text>
      <Image source={require('../assets/exersices/kneetuckcrunch.jpg')} style=     {styles.kneetuckcrunchImg}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.splitjumpsButton}  onPress={() => this.splitjump()}>
      <Text style={styles.splitjumpsText}>splitjumps</Text>
      <Image source={require('../assets/exersices/splitjumps.jpg')} style={styles.splitjumpsImg}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reversecrunchesButton} onPress={() => this.reversecrunches()}>
      <Text style={styles.reversecrunchesText}>Reversecrunches</Text>
      <Image source={require('../assets/exersices/reversecrunches.jpg')} style={styles.reversecrunchesImg}/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.highkneetwistsButton} onPress={() => this.highkneetwists()}>
      <Text style={styles.highkneetwistsText}>Highkneetwists</Text>
      <Image source={require('../assets/exersices/highkneetwists.jpg')} style={styles.highkneetwistsImg}/>
      </TouchableOpacity>


      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
 kneetuckcrunchButton:{
   backgroundColor: '#fce58b',
    width: 300,
    height: 150,
    borderRadius: 40,
    marginBottom: 60,
    marginTop: 50,
   
 },
 kneetuckcrunchText:{
   flex: 1,
    fontFamily: 'neucha',
    fontSize: 30,
    paddingLeft: 28,
    marginTop: 50,
    color:'White'
 },
 kneetuckcrunchImg:{
   position: 'absolute',
    top: 10,
    right: 15,
    height: 120,
    width: 120,
    resizeMode: 'contain',
    zIndex: -1,
 },

 splitjumpsButton:{
   backgroundColor: '#fce58b',
    width: 300,
    height: 150,
    borderRadius: 40,
    marginBottom: 60,
    marginTop: 50,
   
 },
 splitjumpsText:{
   flex: 1,
    fontFamily: 'neucha',
    fontSize: 20,
    paddingLeft: 28,
    marginTop: 50,
    color:'White'
 },
 splitjumpsImg:{
   position: 'absolute',
    top: 10,
    right: 15,
    height: 120,
    width: 120,
    resizeMode: 'contain',
    zIndex: -1,
 },
 
 reversecrunchesButton:{
   backgroundColor: '#fce58b',
    width: 300,
    height: 150,
    borderRadius: 40,
    marginBottom: 60,
    marginTop: 50,
   
 },
 reversecrunchesText:{
   flex: 1,
    fontFamily: 'neucha',
    fontSize: 20,
    paddingLeft: 28,
    marginTop: 50,
    color:'White'
 },
 reversecrunchesImg:{
   position: 'absolute',
    top: 10,
    right: 15,
    height: 120,
    width: 120,
    resizeMode: 'contain',
    zIndex: -1,
 },
 highkneetwistsButton:{
   backgroundColor: '#fce58b',
    width: 300,
    height: 150,
    borderRadius: 40,
    marginBottom: 60,
    marginTop: 50,
   
 },
 highkneetwistsText:{
   flex: 1,
    fontFamily: 'neucha',
    fontSize: 20,
    paddingLeft: 28,
    marginTop: 50,
    color:'White'
 },
 highkneetwistsImg:{
   position: 'absolute',
    top: 10,
    right: 15,
    height: 120,
    width: 120,
    resizeMode: 'contain',
    zIndex: -1,
 },
 
});