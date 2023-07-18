import { View, Text,Pressable,Image,TextInput } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';
import DatePicker from 'react-native-date-ranges';

const HomeScreen = () => {
  const navigation=useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      title:"Bookcro",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#22d3ee",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <FontAwesome name="paper-plane" size={24} color="white" style={{
          marginRight:12
        }} />
      ),
    })
  },[])
  return (
    <View>
      {/* <Text >HomeScreen</Text> */}
      <Header/>
    </View>
  )
}

export default HomeScreen