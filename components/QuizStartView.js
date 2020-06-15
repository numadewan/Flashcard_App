import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, StyleSheet,Alert } from 'react-native'
import { Button,Text,Card} from 'react-native-elements'

import {
  addCardsToDeck,
  removeDeck,
} from '../actions'

class QuizStartView extends Component {

  //delete alert on press
  handleRemoveDeck=(e)=>{
    const {deckName} = this.props
    Alert.alert(
      'Are you sure you want to delete this deck?',
      'This will remove this deck',
      [
        {text: 'NO', onPress: () => console.log("Cancel Delete deck"), style: 'cancel'},
        {text: 'YES', onPress: () => {
          this.props.removeDeck(deckName)
          this.props.navigation.push('Flash Cards')
        }},
      ]
    )
  }


  //Deck View 
  render() {
    const {deckName,totalCards,cards}= this.props

    return (
      <View style={styles.container}>
        <Card>
          <View style={{marginTop:32,marginBottom:32}}>
            <Text h3 style={{textAlign:'center', color: '#622525'}}>{deckName}</Text>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <Text  style={{color: '#622525'}}>Total number of cards: {totalCards}</Text>
            </View>
          </View>
        </Card>

        <View style={{padding: 15}}>
          <Button
            title=" VIEW CARDS"
            onPress={e=>this.props.navigation.push('Quiz',{deckName,cards})}
            linearGradientProps={{ colors: ['#791717', '#F44336'],  
              }}
          />
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button
              title=" ADD CARDS"
              onPress={e=>this.props.navigation.push('Add Card',{ deckName })}
              buttonStyle={{marginTop: 15}}
              linearGradientProps={{colors: ['darkgreen', 'green'],
              }}
            />
            <Button
              title=" DELETE DECK"
              onPress={this.handleRemoveDeck}
              linearGradientProps={{colors: ['#791717', '#F44336'],  
              }}
              buttonStyle={{marginTop: 15}}
            />
          </View>
        </View>
      </View>
    )
  }
}


const styles= StyleSheet.create({
 container:{
  flex:1,
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: '#572121'
 }

})

function mapStateToProps(state,props){
 try{
  const {deckName}= props.route.params.deck
  const cards=state[deckName].cards
  return { cards,deckName,totalCards:cards.length}
}catch (e){
  return {
    cards:[],
    deckName:"",
    totalCards:0}
 }
}

const mapDispatchToProps={
  addCardsToDeck,
  removeDeck,
}
export default  connect(mapStateToProps,mapDispatchToProps)(QuizStartView)