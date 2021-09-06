import React from 'react'
import { View, Text , Pressable } from 'react-native'
import styles from "./styles"

const StyledButton = ({type , content ,onPress}) => {

    const category = type

    const textColor= category === "primary"? "#FFFFFF" : "#171A20"
    const backgroundColor = category === "primary"? "#171A20CC" : "#FFFFFFA6"
    return (
        <View style={styles.container}>
         <Pressable style={[styles.button , {backgroundColor:backgroundColor}]} onPress={()=>onPress()}>
         <Text style={[styles.text , {color:textColor}]}>{content}</Text>
         </Pressable>
        </View>
    )
}

export default StyledButton
