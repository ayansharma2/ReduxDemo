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
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/Entypo';

function Home(props){
    const [isSet, setValue ] = useState(false);
    return(
        <View style={{justifyContent:'center',alignItems: 'center',flexDirection:'row',flex:1}}>
            <TouchableOpacity onPress={()=>props.increaseCounter()}>
                <Icon name="add-circle" size={30} color="white" />
            </TouchableOpacity>
            <Text style={{marginLeft:50,marginRight:50,fontSize:20}}>{props.counter}</Text>
            <TouchableOpacity onPress={()=>props.decreaseCounter()}>
                <AntIcon name="circle-with-minus" size={30} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                    isSet ? props.setText("Hello") : props.setText("Bye")
                    setValue((value)=>{
                        value = !value
                        return value;
                    })
                }}>
                <Text>{props.text}asdasdasd</Text>
            </TouchableOpacity>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)

