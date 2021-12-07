import React,{useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/Entypo'
function Screen2(props,{navigation}){
    const [number, onChangeNumber] = React.useState(null);
    return(
        <View style={{flexDirection:'column',justifyContent: 'center',alignItems: 'center',flex:1}}>
            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>props.increaseCounter()}>
                    <Icon name="add-circle" color='black' size={30}/>
                </TouchableOpacity>
                <Text style={{fontSize:20,color:'black',margin:50}}>{props.counter}</Text>
                <TouchableOpacity onPress={()=>props.decreaseCounter()}>
                    <AntIcon name="circle-with-minus" color='black' size={30}/>
                </TouchableOpacity>
            </View>
            <TextInput
                style={{alignSelf:'stretch',borderRadius:12,color:'black',paddingLeft:15,borderColor:'black',borderWidth:1,marginHorizontal:20}}
                onChangeText={(text)=>{props.setText(text)}}
                value={props.text}
                placeholder="useless placeholder"
                placeholderTextColor='#909090'/>
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

export default connect(mapStateToProps,mapDispatchToProps)(Screen2)