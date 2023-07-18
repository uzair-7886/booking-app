import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen'
import BookingScreen from './screens/BookingScreen'
import ProfileScreen from './screens/ProfileScreen'




const StackNavigator = () => {
    const Stack=createNativeStackNavigator()
    const Tab=createBottomTabNavigator()

const BottomTabs=()=>{
    return(
        <Tab.Navigator
        screenOptions={
            {
                tabBarStyle:{
                    backgroundColor:"#ecfeff",
                    paddingVertical:3,
                    
                },
                tabBarLabelStyle:{
                    color:'#22d3ee',
                    fontSize:12
                }
            }
        }
        className='bg-red-100'
        >
            <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel:'Home',
                topBaColor:'#003580',
                headerShown:false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <Entypo name="home" size={24} color="#22d3ee" />
                  ) : (
                    <AntDesign name="home" size={24} color="#22d3ee" />
                  ),
            }}
            />
            <Tab.Screen
            name="Saved"
            component={SavedScreen}
            options={{
                tabBarLabel:'Saved',
                headerShown:false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <FontAwesome name="bookmark" size={24} color="#22d3ee" />
                  ) : (
                    <FontAwesome name="bookmark-o" size={24} color="#22d3ee" />
                  ),
            }}
            />
            <Tab.Screen
            name="Booking"
            component={BookingScreen}
            options={{
                tabBarLabel:'Bookings',
                headerShown:false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <AntDesign name="checkcircle" size={24} color="#22d3ee" />
                  ) : (
                    <AntDesign name="checkcircleo" size={24} color="#22d3ee" />
                  ),
            }}
            />
            <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel:'Profile',
                headerShown:false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <FontAwesome name="user" size={24} color="#22d3ee" />
                  ) : (
                    <FontAwesome name="user-o" size={24} color="#22d3ee" />
                  ),
            }}
            />
        </Tab.Navigator>
    )
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={
           {headerShown:false} 
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})