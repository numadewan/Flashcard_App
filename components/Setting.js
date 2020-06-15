import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, StyleSheet,Linking,Alert } from 'react-native'
import { Button,Text,Card,SocialIcon,Avatar } from 'react-native-elements'

import {
  resetData,
} from '../actions'

class Setting extends Component {

  handleSubmit=(e)=>{
    Alert.alert(
      'Are you sure you want to reset?',
      'This will delete all of your decks and cards.',
      [
        {text: 'NO', onPress: () => console.log("Cancel reset"), style: 'cancel'},
        {text: 'YES', onPress: () => {
          this.props.resetData()
          this.props.navigation.navigate('Deck')
        }},
      ]
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Card title="RESET DATA">
            <View>
            <Text style={{color:'gray', padding: 12, textAlign:'center'}}> Remove all user data ?</Text>
            <Button
              title=" RESET"
              raised={true}
              onPress={this.handleSubmit}
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
  justifyContent: 'center'
  ,
  backgroundColor: '#572121'
 }
})
const mapDispatchToProps={
  resetData,
}

export default  connect(null,mapDispatchToProps)(Setting)