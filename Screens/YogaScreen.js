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
export default class YogaScreen extends Component {
  bridgePose = () => {
    this.props.navigation.navigate('BridgePoseScreen');
  };
  chandranamaskar = () => {
    this.props.navigation.navigate('ChandranamaskarScreen');
  };
  suryanamaskar = () => {
    this.props.navigation.navigate('SuryanamaskarScreen');
  };
  pranayamam = () => {
    this.props.navigation.navigate('PranayamamScreen');
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

      <TouchableOpacity style={styles.bridgePoseButton} onPress={() => this.bridgePose()}>
      <Text style={styles.bridgePoseText}>BridgePose</Text>
      <Image source={require('../assets/yoga/bridgepose.jpg')} style={styles.bridgePoseImg}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.chandranamaskarButton} onPress={() => this.chandranamaskar()}>
      <Text style={styles.chandranamaskarText}>Chandranamaskar</Text>
      <Image source={require('../assets/yoga/chandranamaskar.jpg')} style={styles.chandranamaskarImg}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.suryanamaskarButton} onPress={() => this.suryanamaskar()}>
      <Text style={styles.suryanamaskarText}>Suryanamaskar</Text>
      <Image source={require('../assets/yoga/suryanamaskar.jpg')} style={styles.suryanamaskarImg}/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.pranayamamButton} onPress={() => this.pranayamam()}>
      <Text style={styles.pranayamamText}>Pranayamam</Text>
      <Image source={require('../assets/yoga/pranayamam.jpg')} style={styles.pranayamamImg}/>
      </TouchableOpacity>

      
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
 bridgePoseButton:{
   backgroundColor: '#fce58b',
    width: 300,
    height: 150,
    borderRadius: 40,
    marginBottom: 60,
    marginTop: 50,
   
 },
 bridgePoseText:{
   flex: 1,
    fontFamily: 'neucha',
    fontSize: 30,
    paddingLeft: 28,
    marginTop: 50,
    color:'White'
 },
 bridgePoseImg:{
   position: 'absolute',
    top: 10,
    right: 15,
    height: 120,
    width: 120,
    resizeMode: 'contain',
    zIndex: -1,
 },

 chandranamaskarButton:{
   backgroundColor: '#fce58b',
    width: 300,
    height: 150,
    borderRadius: 40,
    marginBottom: 60,
    marginTop: 50,
   
 },
 chandranamaskarText:{
   flex: 1,
    fontFamily: 'neucha',
    fontSize: 20,
    paddingLeft: 28,
    marginTop: 50,
    color:'White'
 },
 chandranamaskarImg:{
   position: 'absolute',
    top: 10,
    right: 15,
    height: 120,
    width: 120,
    resizeMode: 'contain',
    zIndex: -1,
 },
 
 suryanamaskarButton:{
   backgroundColor: '#fce58b',
    width: 300,
    height: 150,
    borderRadius: 40,
    marginBottom: 60,
    marginTop: 50,
   
 },
 suryanamaskarText:{
   flex: 1,
    fontFamily: 'neucha',
    fontSize: 20,
    paddingLeft: 28,
    marginTop: 50,
    color:'White'
 },
 suryanamaskarImg:{
   position: 'absolute',
    top: 10,
    right: 15,
    height: 120,
    width: 120,
    resizeMode: 'contain',
    zIndex: -1,
 },
 pranayamamButton:{
   backgroundColor: '#fce58b',
    width: 300,
    height: 150,
    borderRadius: 40,
    marginBottom: 60,
    marginTop: 50,
   
 },
 pranayamamText:{
   flex: 1,
    fontFamily: 'neucha',
    fontSize: 20,
    paddingLeft: 28,
    marginTop: 50,
    color:'White'
 },
 pranayamamImg:{
   position: 'absolute',
    top: 10,
    right: 15,
    height: 120,
    width: 120,
    resizeMode: 'contain',
    zIndex: -1,
 },
 
});