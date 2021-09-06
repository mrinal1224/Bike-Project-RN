import React from 'react'
import { View, Text , ImageBackground } from 'react-native'
import styles from "./styles"
const BikeItem = () => {
    return (
        <View style={styles.carContainer}>

       <ImageBackground source={require('../../assets/images/bike.jpg')} style={styles.image}/>
       <View style={styles.titles}>
        <Text style={styles.title}>Yamaha</Text>
        <Text style={styles.subTitle}>Starting at Rs 400000</Text>
       </View>
     </View>
    )
}

export default BikeItem
