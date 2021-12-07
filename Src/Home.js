import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {connect} from 'react-redux'
import DrawerContent from './DrawerContent'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
 import Screen1 from './Screen.js'
 import Screen2 from './Screen2.js'
function Home(props){
    const Drawer  = createDrawerNavigator()
    return(
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Screen1" component={Screen1} />
                <Drawer.Screen name="Screen2" component={Screen2} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}




function mapStateToProps(state){
    return{
        counter: state.counter,
        text: state.text,
    }
}

function mapDispatchToProps(dispatch){
    return{
        increaseCounter:()=> dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter:()=> dispatch({type: 'DECREASE_COUNTER'}),
        setText:(text)=>dispatch({type: 'SET_TEXT',text:text})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)



