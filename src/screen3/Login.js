import React from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import fonts from '../utils'

const Login = ({navigation}) => {
    const onPress=()=>{
        navigation.navigate('Create')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txtWellCome}>Welcome to tradly</Text>
            <Text style={styles.txtTitle}>Login to your account</Text>
            <TextInput style={styles.inputUser}
                placeholder=" Email/Mobile Number"
                placeholderTextColor={'white'} />
            <TextInput style={styles.inputUser}
                placeholder=" Password"
                placeholderTextColor={'white'} />
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogin}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.txtForgot}>Forgot your password ?</Text>
            <View style={styles.txtParentView}>
                <Text style={styles.txtDontHave}>Don’t have an account ? </Text>
                <Text 
                onPress={()=>onPress()}
                style={styles.txtSignIn}>Sign up</Text>
            </View>
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
    txtWellCome: {
        fontFamily: fonts.fontMontserratBold,
        fontSize: fonts.fontLarge,
        color: fonts.white,
        marginVertical: RFValue(30)
    },
    txtTitle: {
        fontFamily: fonts.fontMontserrat,
        fontSize: fonts.fontSmall,
        color: fonts.white
    },
    inputUser: {
        borderRadius: 20,
        borderColor: fonts.white,
        borderWidth: 1,
        width: '90%',
        fontSize: fonts.fontMedium,
        fontFamily: fonts.fontMontserrat,
        marginTop: RFValue(20)
    },
    btnLogin: {
        borderRadius: 20,
        paddingVertical: RFValue(15),
        backgroundColor: fonts.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop: RFValue(30)
    },
    txtLogin: {
        color: fonts.lightGreen,
        fontFamily: fonts.fontMontserrat,
        fontSize: fonts.fontSmall
    },
    txtForgot: {
        fontFamily: fonts.fontMontserrat,
        color: fonts.white,
        fontSize: fonts.fontMedium,
        marginVertical: RFValue(30)
    },
    txtParentView: {
        flexDirection: 'row',
         alignItems: 'center'
    },
    txtDontHave: {
        fontFamily: fonts.fontMontserrat,
        fontSize: fonts.fontMedium,
        color: fonts.white
    },
    txtSignIn: {
        fontFamily: fonts.fontMontserratBig,
        fontSize: fonts.fontMedium,
        color: fonts.white
    }

})
export default Login