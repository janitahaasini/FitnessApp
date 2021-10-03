import * as React from 'react';
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
} from 'react-native';
import AppHeader from '../components/header';

export default class SelectScreen extends React.Component {
  yogaScreen = () => {
    this.props.navigation.navigate('YogaScreen');
  };
  exersiceScreen = () => {
    this.props.navigation.navigate('ExerciseScreen');
  };
  homeScreen= () => {
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    return (
      <View>
        <SafeAreaView style={styles.droidSafeArea} />
        
        <View>
<TouchableOpacity style={{width:40,height:40}} onPress={()=>this.homeScreen()}>
<Text style={{fontSize:40,marginTop:-10}}>←</Text>
</TouchableOpacity> 
</View>
        <View>
          <TouchableOpacity
            style={styles.yogaButton}
            onPress={() => this.yogaScreen()}>
            <Text style={styles.yogaText}>YOGA</Text>
            <Image
              source={require('../assets/yoga/pranayamam.jpg')}
              style={styles.imageYoga}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.exersiceButton}
            onPress={() => this.exersiceScreen()}>
            <Text style={styles.exersiceText}>Exercises</Text>
            <Image
              source={require('../assets/exersices/bends.jpg')}
              style={styles.imageExersice}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  yogaButton: {
    backgroundColor: '#fce58b',
    width: 150,
    height: 150,
    borderRadius: 40,
    marginBottom: 60,
    marginTop: 50,
    marginLeft: 100,
  },
  exersiceButton: {
    backgroundColor: '#fce58b',
    width: 150,
    height: 150,
    borderRadius: 40,
    marginLeft: 100,
    marginTop: 50,
  },
  yogaText: {
    flex: 1,
    fontFamily: 'neucha',
    fontSize: 40,
    paddingLeft: 28,
    marginTop: 50,
  },
  exersiceText: {
    flex: 1,
    fontFamily: 'neucha',
    fontSize: 35,
    paddingLeft: 28,
    marginTop: 50,
  },
  imageYoga: {
    position: 'absolute',
    top: 10,
    right: 15,
    height: 120,
    width: 120,
    resizeMode: 'contain',
    zIndex: -1,
  },
  imageExersice: {
    position: 'absolute',
    top: 10,
    right: 15,
    height: 120,
    width: 120,
    resizeMode: 'contain',
    zIndex: -1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
