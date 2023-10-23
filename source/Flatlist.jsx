import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 'AVATAR' },
        { key: 'REBORN RICH' },
        { key: 'I AM GEEK' },
        
      ],
    };
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>FLATLIST SECTION FOR MOVIES</Text>
          </View>

          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
