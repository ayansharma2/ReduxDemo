/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './Src/Home';

const initialState={
  counter: 0,
  text : ""
}

const reducer = (state = initialState,action)=>{
  switch(action.type){
    case 'INCREASE_COUNTER':
      
      return {...state, counter: ++state.counter }
    case 'DECREASE_COUNTER':
      return {...state, counter: --state.counter }
    case 'SET_TEXT':
      console.log(action.text)
      return {...state, text: action.text}    
  }
  return state;
}

const store= createStore(reducer);
function App(){
  return(
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}

export default App;
