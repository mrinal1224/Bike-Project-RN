import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:'100%'
      },
    
      titles:{
         marginTop:'20%',
         width:'100%',
         alignItems:'center'
    
      },
    
      title:{
       fontSize:40,
       fontWeight:'600',
     },
    
      subTitle:{
       fontSize:16,
       color:'black'
      },
    
      image:{
        width:"100%",
        height :"100%",
        resizeMode:'cover',
        position:'absolute'
       }
})

export default styles