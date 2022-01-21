import React, { useState } from "react"
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native"
import ModalDropdown from "react-native-modal-dropdown"
import { RFValue } from "react-native-responsive-fontsize"
import fonts from '../utils'
const option = ['+ 80', '+ 81', '+ 82', '+ 83', '+ 84', '+ 85', '+ 86', '+ 87', '+ 88']
const GetNumber = ({ navigation }) => {
    const [value, setValue] = useState('')
    const onPressButton=()=>{
        navigation.navigate('Otp')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txtVerify}>Verify your phone number</Text>
            <Text style={styles.txtTittle}>We have sent you an SMS with a code to</Text>
            <Text style={styles.txtTittle}>enter number</Text>
            <View style={styles.parentsInput}>
                <TouchableOpacity style={styles.btnMoDal}>
                    <ModalDropdown
                        renderRow={(option) => {
                            return (
                                <Text style={styles.txtDrop}>{option}</Text>
                            )
                        }}
                        style={styles.moDalDrop}
                        textStyle={styles.textMoDal}
                        options={option}
                        defaultValue="+ 80"
                    />
                    <Image source={require('../image/down.png')} />
                </TouchableOpacity>
                <TextInput
                    value={value}
                    onChangeText={() => {
                        setValue(value)
                    }}
                    style={styles.txtInput} />
            </View>
            <Text style={styles.txtOr}>Or login with Social network</Text>
            <TouchableOpacity 
            onPress={onPressButton}
            style={styles.btnNextScreen}>
                <Text style={styles.txtButtonNext}>Next</Text>
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
    txtTittle: {
        fontFamily: fonts.fontMontserrat,
        fontSize: fonts.fontSmall,
        color: fonts.white
    },
    txtVerify: {
        fontFamily: fonts.fontMontserratBold,
        fontSize: fonts.fontBig,
        color: fonts.white,
        marginVertical: RFValue(30)
    },
    moDalDrop: {
        width: RFValue(40),
    },
    txtDrop: {
        color: 'black',
        fontSize: fonts.fontBig
    },
    parentsInput: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: fonts.white,
        flexDirection: 'row',
        marginVertical: RFValue(30)

    }, btnMoDal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    txtInput: {
        fontSize: fonts.fontLarge,
        color: fonts.white,
        width: '80%'
    },
    textMoDal: {
        fontSize: fonts.fontLarge,
        color: fonts.white
    },
    txtOr: {
        color: fonts.white,
        fontFamily: fonts.fontMontserrat,
        fontSize: fonts.fontMedium
    },
    txtButtonNext: {
        color: fonts.lightGreen,
        fontFamily: fonts.fontMontserratBold,
        fontSize: fonts.fontSmall,
        padding: 10
    },
    btnNextScreen: {
        borderRadius: 20,
        backgroundColor: fonts.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop: RFValue(30)
    }




})
export default GetNumber