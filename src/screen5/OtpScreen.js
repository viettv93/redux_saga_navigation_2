import React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import fonts from '../utils'
import OTPInputView from "@twotalltotems/react-native-otp-input"
const OtpScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtPhone}>Phone Verification</Text>
            <Text style={styles.txtTitle}>Enter your OTP code here</Text>
            <View>
                <OTPInputView style={styles.otpView}
                    pinCount={6}
                    autoFocusOnLoad
                    keyboardAppearance="light"
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}
                />
            </View>

            <Text style={styles.txtQuestion}>Didn’t you received any code? </Text>
            <Text style={styles.txtQuestion}>Resent new code</Text>
            <TouchableOpacity style={styles.btnNextScreen}>
                <Text style={styles.txtButton}>Verify</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: fonts.green,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtPhone: {
        fontFamily: fonts.fontMontserratBold,
        fontSize: fonts.fontBig,
        color: fonts.white
    },
    txtTitle: {
        fontFamily: fonts.fontMontserrat,
        fontSize: fonts.fontSmall,
        color: fonts.white,
        marginVertical: RFValue(30)
    },
    otpView: {
        width: '80%',
        height: '10%',
         marginVertical: RFValue(45)
    },
    borderStyleBase: {
        width: RFValue(45),
        height: RFValue(45),
        fontSize: fonts.fontBig,
        fontFamily: fonts.fontMontserratBig
    },

    borderStyleHighLighted: {
        borderColor: fonts.lightGreen,
    },

    underlineStyleBase: {
        width: RFValue(45),
        height: RFValue(45),
        borderWidth: 0,
        borderBottomWidth: 1,
        fontSize: fonts.fontBig,
        fontFamily: fonts.fontMontserratBig
    },

    underlineStyleHighLighted: {
        borderColor: fonts.lightGreen,
    },
    txtQuestion: {
        color: fonts.white,
        fontFamily: fonts.fontMontserrat,
        fontSize: fonts.fontMedium
    },
    btnNextScreen: {
        borderRadius: 20,
        backgroundColor: fonts.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFValue(30),
        width: '90%'
    },
    txtButton: {
        color: fonts.lightGreen,
        fontSize: fonts.fontSmall,
        fontFamily: fonts.fontMontserratBold,
        padding: 10
    }
})
export default OtpScreen