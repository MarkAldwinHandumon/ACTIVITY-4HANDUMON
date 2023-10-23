import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';


const App = () => {
  return (
    <View>
      
      <TouchableHighlight
        onPress={() => console.log('TouchableHighlight Pressed')}
        underlayColor="lightgray">

          <Text>TOUCH TO SEE HIGHLIGHTS</Text>
          
      </TouchableHighlight>

      <TouchableOpacity onPress={() => console.log('TouchableOpacity Pressed')}>
        <View>
          <Text>CLICK TO SEE OPACITY</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={() => console.log('TouchableWithoutFeedback Pressed')}>
        <View>
          <Text>TOUCHABILITY WITHOUT FEEDBACKING</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    
  );
};


export default App;
