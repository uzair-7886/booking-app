import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

const Header = () => {
  return (
    <View
    className='flex-row bg-[#22d3ee] justify-around items-center py-2 px-1'
    >
      {/* <Text>Header</Text> */}
      <Pressable className="flex-row items-center space-x-1 border-2 border-white rounded-full px-2 py-1">
      <Ionicons name="ios-bed-outline" size={24} color="white" />
      <Text className='text-white text-base font-semibold'>Stays</Text>
      </Pressable>
      <Pressable className="flex-row items-center space-x-1  px-2 py-1">
      <Ionicons name="ios-airplane-outline" size={24} color="white" />
      <Text className='text-white text-base font-semibold'>Flight</Text>
      </Pressable>
      <Pressable className="flex-row items-center space-x-1  px-2 py-1">
      <Ionicons name="ios-car-outline" size={28} color="white" />
      <Text className='text-white text-base font-semibold'>Car</Text>
      </Pressable>
      <Pressable className="flex-row items-center space-x-1 
       px-2 py-1">
      <MaterialCommunityIcons name="ticket-outline" size={24} color="white" />
      <Text className='text-white text-base font-semibold'>Ticket</Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})