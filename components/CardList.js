import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import {
  loadInitialData,
} from '../actions'

class CardList extends Component {

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => item.title+index}
          data={Object.values(this.props.deck)}
          renderItem={({item})=>(
            <ListItem
              style={{padding: 5, margin: '10%', }}
              Component={TouchableScale}       
              title={item.title}
              titleStyle={{ color: 'brown', fontWeight: 'bold', fontSize:20 }}
              subtitleStyle={{ color: 'brown' }}
              subtitle={item.cards.length + " cards"}
              onPress={e=>this.props.navigation.push('Start Quiz',{ deck:{deckName: item.title, cards: item.cards} })}
            />
          )}
          contentContainerStyle={{ paddingBottom: 55, backgroundColor: '#572121'}}
        />
      </View>
    )
  }
}

function mapStateToProps(state){
  return { deck: state}
}

const mapDispatchToProps={
  loadInitialData,
}

export default connect(mapStateToProps,mapDispatchToProps)(CardList)
