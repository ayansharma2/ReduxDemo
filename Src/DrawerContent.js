import React from 'react';
import {View} from 'react-native'
import{useTheme,Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch}from 'react-native-paper'

import {
    DrawerContentScrollView,
    DrawerItem
}from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function DrawerContent(props){
    const [theme,setTheme ] = React.useState(false)
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View>
                    <View style={{paddingLeft:10, flexDirection:'row',marginTop:10,alignItems: 'center'}}>
                        <Avatar.Image
                        source={{uri:'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png'}}
                        size={50}
                        backgroundColor='grey'/>
                        <View style={{flexDirection:'column',marginLeft:10}}>
                            <Title>Ayan Sharma</Title>
                            <Caption>@ayan03</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Screen1"
                            onPress={() => {props.navigation.navigate('Screen1')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Screen2"
                            onPress={() => {props.navigation.navigate('Screen2')}}
                        />

                </Drawer.Section>
                <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {setTheme((theme)=>{
                            theme = !theme;
                            return theme;
                        })}}>
                            <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'space-between',paddingHorizontal:15}}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={theme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={{borderTopColor:'light-blue',borderTopWidth:1}}>
                <DrawerItem 
                    icon={({color,size})=>{
                    return(
                        <Icon name="exit-to-app"
                    color={color}
                    size={size}/>
                    )}}
                label={"Sign Out"}
                onPress={()=>{}}/>
            </Drawer.Section>
        </View>        

    )
}