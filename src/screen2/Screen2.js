
import React from "react"
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from "react-native"
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import fonts from '../utils'

const Screen2 = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}></View>
            <View style={styles.bodyView}>
                <View style={styles.viewAdd}></View>
                <Text style={styles.text}>Connecting NGOs, Social</Text>
                <Text style={styles.text}> Enterprises with Communities</Text>
                <Image source={require('../image/mid.png')}
                    style={styles.iconStyle}
                    resizeMode="contain" />

            </View>
            <View style={styles.imgParent}>
                <View style={styles.imgBackGround}>
                    <Image source={require('../image/nen1.png')}
                        resizeMode="contain" />
                </View>
            </View>
            <View style={styles.btnParents}>
                <TouchableOpacity
                    onPress={() => props.onPress()}
                    style={styles.touchStyle}>
                    <Text style={styles.textTouchStyle}>Next</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topView: {
        height: '40%',
        backgroundColor: fonts.green
    },
    bodyView: {
        height: '60%',
        backgroundColor: fonts.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgParent: {
        right: 0, left: 0, top: 0, bottom: 0,
        backgroundColor: 'transparent',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFValue(-160),
        zIndex: 998,
        alignSelf: 'center'

    },
    viewAdd: { height: '30%' },
    text: {
        color: fonts.green,
        fontFamily: fonts.fontMontserratBold,
        fontSize: fonts.fontLarge
    },
    textTouchStyle: {
        fontFamily: fonts.fontMontserratBold,
        fontSize: fonts.fontLarge,
        color: fonts.white,
        padding: 9
    },
    touchStyle: {
        backgroundColor: fonts.green,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',

    },
    iconStyle: {
        marginVertical: RFValue(30)
    },
    btnParents: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: RFPercentage(2),
        zIndex: 999
    },
    imgBackGround: {
        backgroundColor: fonts.white,
        paddingHorizontal: RFValue(20),
        borderRadius: 10
    }

})
export default Screen2