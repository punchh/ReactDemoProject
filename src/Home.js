import React, {
  Component
}
from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  StackNavigator,
  ActivityIndicator,
  ListView,
  Image,
}
from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.response)
    };
  }
  
  renderRow(rowData) {
  return <View><View style={{flexDirection: 'row'}}>
  <Image style={{width: 100, height: 100}}
            source={{uri: rowData.image}}
          />
  <View style={{paddingTop: 3,flex: 1}}>
      <Text style={{color: '#000000', fontWeight: 'bold', marginHorizontal: 10, fontSize: 20 }}>{rowData.title}</Text>
      <Text style={{color: '#000000', marginHorizontal: 10, fontSize: 20 }}>{rowData.rating}</Text>
    </View>
    </View>
    <View style={{width:'100%',height:1,backgroundColor:'#d0d0d0'}}></View>
    </View>
     
  }
  
  render() {
    return(
    <View style={{flex: 1}}>
    <View style={{justifyContent:'center',alignItems:'center',height:50,backgroundColor:'#3AB37C'}}>
    <Text style={{width:'100%',textShadowColor:'#000000',textShadowOffset:{width:1,height:1},textShadowRadius:1,fontWeight:'bold',fontSize:20,textAlign: 'center',
    color: '#FFF'}}>HOME</Text>
    </View>
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}
    />
      </View>
    );
  }
  
}