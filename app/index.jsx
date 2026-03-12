import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.conntainer}>
      <Text style={styles.title}>Home Hello</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  conntainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize:11
  }


})  
