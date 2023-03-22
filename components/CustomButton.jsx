import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, color}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding: 5,
      marginVertical: "5%",
      alignItems:"center",
      borderRadius:5,

    },
    text:{
        color:"white",
        fontSize: 15    }
  
    
  });

  
export default CustomButton