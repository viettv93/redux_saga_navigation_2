import React from "react"
import { View, StyleSheet, Image, Text } from "react-native"


const ScreenWait = ({ navigation }) => {
    const nextPage = () => {
        navigation.navigate('PagerView') 
    }
    setTimeout(nextPage, 3000)
    
    return (
        <View style={styles.view}>
            <Image source={require('../image/commit.png')}
                resizeMode="contain" />
            <Text style={styles.text}>Tradly</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    view: { flex: 1, backgroundColor: '#33907C', alignItems: 'center', justifyContent: 'center' },
    text: { fontFamily: 'Montserrat-Bold', fontSize: 30, color: 'white', fontWeight: '500' }
})
export default ScreenWait
