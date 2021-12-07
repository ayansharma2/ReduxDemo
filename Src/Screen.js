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
import Icon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/Entypo'
function Screen1(props,{navigation,route}){
    return(
        <View style={{justifyContent: 'center',alignItems: 'center',flex:1,flexDirection:'column'}}>
            <View style={{justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.increaseCounter()}>
                    <Icon name="add-circle" color='black' size={30}/>
                </TouchableOpacity>
                <Text style={{marginLeft:50,marginRight:50,color:'black'}}>{props.counter}</Text>
                <TouchableOpacity onPress={()=>props.decreaseCounter()}>
                    <AntIcon name="circle-with-minus" color='black' size={30}/>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize:16,color:'black',margin:35,textAlign:'center'}}>Text from Redux Store {"\n"} {props.text}</Text>
        </View>
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
export default connect(mapStateToProps,mapDispatchToProps)(Screen1)