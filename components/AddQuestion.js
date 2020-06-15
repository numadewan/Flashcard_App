import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Button,Card, Input } from 'react-native-elements'

import {
  addCardsToDeck,
} from '../actions'
class AddQuestion extends Component {

  state={
    question: "",
    answer:""
  }

  handleAddCard=()=>{
    const {deckName} =this.props.route.params
    const {question, answer} = this.state
    this.props.addCardsToDeck(deckName,{question,answer})
    this.setState({question:"",answer:""})
    this.props.navigation.goBack()
  }
  
//Add cards UI
  render() {
    const {question, answer} = this.state
    return (
      <View style={styles.container}>
        <Card title="ADD A CARD">
          <View>
            <Input
              inputStyle={{color:'gray' }}
              placeholder="Enter Question"
              label="Question"
              multiline={true}
              value={question}
              onChangeText={text=>this.setState({question:text})}
            />

            <Input
              inputStyle={{color:'gray'}}
              label="Answer"
              placeholder="Enter Answer"
              multiline={true}
              value={answer}
              onChangeText={text=>this.setState({answer:text})}
            />

            <Button
              title=" ADD"
              disabled={question.trim()==="" || answer.trim()===""}
              onPress={this.handleAddCard}
              buttonStyle={{marginTop: 16, backgroundColor: 'brown'}}
            />
          </View>
        </Card>
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

const mapDispatchToProps={
  addCardsToDeck,
}

export default  connect(null,mapDispatchToProps)(AddQuestion)