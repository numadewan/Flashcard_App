import React, { Component } from 'react'
import { View,ScrollView, StyleSheet } from 'react-native'
import { Button,Text,Card } from 'react-native-elements'

class Question extends Component {
  state={
    deckName:"",
    cards:[],
    isAnswerVisible: false,
    correct:0,
    incorrect:0,
    curresntQuestionIndex:0
  }

  componentDidMount(){
    const {deckName,cards}= this.props.route.params
    this.setState({deckName,cards})

  }

  handleAnswerClick=(ans)=>{
    const {cards,curresntQuestionIndex}= this.state
    this.setState(prevState=>{
      return {[ans]:prevState[ans]+1, curresntQuestionIndex: prevState.curresntQuestionIndex+1,isAnswerVisible:false}
    })
  }

    //calculating result
  calculateResult=()=>{
    
    //const correctResult= ((correct/total)*100)
   
  }

  render() {
    const {isAnswerVisible,deckName,cards,curresntQuestionIndex}= this.state
    const totalQuestion=cards.length


    if(curresntQuestionIndex === totalQuestion){
      this.calculateResult()  
      return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{textAlign:'center'}}>You have viewed all cards.</Text>
      </View>
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{paddingLeft:16, flexDirection:'row', alignItems:'flex-start'}}>         
            <Text style={{color:'white', fontSize:13}}> {deckName}</Text>
          </View>
          <Card title="Question">
            <View>
              <Text style={{textAlign:'left', fontSize:20}}>{cards[curresntQuestionIndex].question}</Text>
            </View>
          </Card>
          {
          isAnswerVisible && (
            <Card title="Answer">
            <View>
              <Text style={{textAlign:'left', fontSize:20}}>{cards[curresntQuestionIndex].answer}</Text>
            </View>
          </Card>
          )}


          <View style={{padding: 15}}>
            <Button
              title={isAnswerVisible? " HIDE ANSWER":" SHOW ANSWER"}
              onPress={e=>this.setState({isAnswerVisible: !this.state.isAnswerVisible})}            
              buttonStyle={{marginTop: 16, backgroundColor: 'green'}}
            />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Button
                title=" CORRECT "
                onPress={e=>this.handleAnswerClick("correct")}
                buttonStyle={{marginTop: 16, backgroundColor: 'brown'}}
               
              />
              <Button
                title=" INCORRECT"
                onPress={e=>this.handleAnswerClick("incorrect")}
                buttonStyle={{marginTop: 16, backgroundColor: 'brown'}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}


const styles= StyleSheet.create({
 container:{
  paddingTop: 20,
  textAlign: 'center',
  justifyContent: 'center',
  backgroundColor: '#572121',
 }
})

export default  Question