import React, { useRef } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import PagerView from 'react-native-pager-view'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'



const ScreenView = ({ navigation }) => {
    const ref = useRef(null)
    const onPressScreen1 = () => {
        ref.current ?. setPage(1)
    }
    const onPressScreen2=()=>{
        ref.current?.setPage(2)
    }
    const onPressScreen3=()=>{
        navigation.navigate('Login')
    }
    return (
        <PagerView style={styles.container} ref={ref} initialPage={0} showPageIndicator={true}>
            <View key="1">
                <Screen1 onPress={onPressScreen1} />
            </View>
            <View key="2">
                <Screen2 onPress={onPressScreen2} />
            </View>
            <View key="3">
                <Screen3 onPress={onPressScreen3} />
            </View>
        </PagerView>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1 }
})
export default ScreenView