import React from "react"
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from "react-native"
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import fonts from '../utils'
const Screen1 = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}></View>
            <View style={styles.bodyView}>
                <View style={styles.viewAdd}></View>
                <Text style={styles.txtTittle}>Empowering Artisans,</Text>
                <Text style={styles.txtTittle}> Farmers & Micro Business</Text>
                <Image
                    source={require('../image/cham.png')}
                    resizeMode="contain"
                    style={styles.icon} />
            </View>
            <View style={styles.imgParentView}>
                <View style={styles.imgBackGround}>
                    <Image
                        source={require('../image/nen.png')}
                        resizeMode="contain" />
                </View>
            </View>
            <View
                style={styles.btnParentView}>
                <TouchableOpacity
                    onPress={() => props.onPress()}
                    style={styles.touchableOpacityStyle}>
                    <Text style={styles.textTouchStyle}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1 },
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
    txtTittle: {
        fontFamily: fonts.fontMontserratBold,
        fontSize:fonts.fontLarge,
        color: fonts.green,

    },
    touchableOpacityStyle: {
        backgroundColor: fonts.green,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTouchStyle: {
        color: fonts.white,
        fontFamily: fonts.fontMontserratBig,
        fontSize:fonts.fontLarge,
        padding: 9,
        marginBottom: RFValue(5),

    },
    icon: { marginVertical: RFValue(30) },
    viewAdd: { height: '30%' },
    imgParentView: {
        position: 'absolute',
        backgroundColor: 'transparent',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFValue(-150),
        zIndex: 998
    },
    imgBackGround: {
        paddingVertical: RFValue(20),
        backgroundColor: fonts.white,
        borderRadius: 20
    },
    btnParentView:
    {
        width: '100%',
        position: 'absolute',
        bottom: RFPercentage(2),
        zIndex: 999
    }

})
export default Screen1