import * as React from 'react';
import { View } from 'react-native';
import AppHeader from './components/header'
import HomeScreen from './Screens/home'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SelectScreen from './Screens/SelectScreen'
import YogaScreen from './Screens/YogaScreen'
import ExerciseScreen from './Screens/ExerciseScreen'
import BridgePoseScreen from './Screens/BridgePose'
import ChandranamaskarScreen from './Screens/ChandranamaskarScreen'
import SuryanamaskarScreen from './Screens/SuryanamaskarScreen'
import PranayamamScreen from './Screens/PranayamamScreen'
import KneeTuckCrunchScreen from './Screens/KneeTuckCrunch'
import SplitJumpScreen from './Screens/SplitJumpScreen'
import ReverseCrunchesScreen from './Screens/Reversecrunches'
import HighkneetwistsScreen from './Screens/Highkneetwists'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0b5a79" }}>
      <AppHeader />
      <AppContainer />
    </View>
  );
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SelectScreen: SelectScreen,
  YogaScreen: YogaScreen,
  ExerciseScreen: ExerciseScreen,
  BridgePoseScreen: BridgePoseScreen,
  ChandranamaskarScreen: ChandranamaskarScreen,
  SuryanamaskarScreen: SuryanamaskarScreen,
  PranayamamScreen: PranayamamScreen,
  KneeTuckCrunchScreen: KneeTuckCrunchScreen,
  SplitJumpScreen: SplitJumpScreen,
  ReverseCrunchesScreen: ReverseCrunchesScreen,
  HighkneetwistsScreen: HighkneetwistsScreen,

})
const AppContainer = createAppContainer(AppNavigator)