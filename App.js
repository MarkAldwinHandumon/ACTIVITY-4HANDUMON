import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import pullRefresh from './source/RefreshCont';
import clickTOUCHABLILITY from './source/touchables';
import expandCOLLAPSE from './source/collapse';
import useDRAWER from './source/drawer';
import Flatlist from './source/Flatlist'
import avoidKEYING from './source/KeyAvoidView'
import listingSECTION from './source/SectionList';
import listVIRTUAL from './source/VirtualList';
import accessoryINPUT from './source/InputAccView';
import FormComponent from './source/forms';
import AlertComponent from './source/Alert';
import SpinnerComponent from './source/spinner';

function App() {
  return (
    <ScrollView>
    <div className="App">
      <View style={styles.container}>
      <pullRefresh />
      </View>
      <br></br>
      <View style={styles.button}>
        <clickTOUCHABLILITY/>
     </View>
     <SpinnerComponent/>
      <expandCOLLAPSE/>
      <useDRAWER/>
      <View style={styles.container}>
      <Flatlist/>
      </View>
      <br></br>
      <avoidKEYING/>
      <View style={styles.container}>
    <listingSECTION/>
      </View>
      <AlertComponent/>  
    <listVIRTUAL/>
      <accessoryINPUT/>
    <FormComponent/> 

    </div>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  });
  

export default App;