import React, {Component} from 'react'
import {StyleSheet,SafeAreaView } from 'react-native'
import {connect} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

import {
  loadInitialData,
  addDeck,
  addCardsToDeck,
  removeDeck,
  resetData,
} from '../actions'

import Setting from './Setting'
import AddDeck from './AddDeck'
import DeckStackScreens from './DeckStackScreens'



class Main extends Component {

  componentDidMount(){
    this.props.loadInitialData()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <Tab.Navigator style={styles.container}         
        >
          <Tab.Screen name="Deck" component={DeckStackScreens} />
          <Tab.Screen name="Add" component={AddDeck} />
          <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  }
});



function mapStateToProps(state){
  return { deck: state}
}

const mapDispatchToProps={
  loadInitialData,
  addDeck,
  addCardsToDeck,
  removeDeck,
  resetData,
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
