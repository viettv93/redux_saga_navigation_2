import React from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import fonts from '../utils'
const CreateScreen = ({navigation}) => {
    const onPressText = () => {
            navigation.navigate('Login')
    };
const onPressButton=()=>{
    navigation.navigate('GetNumber')
}
    return (
        <View style={styles.container}>
            <Text style={styles.txtWellCome}>Welcome to tradly</Text>
            <Text style={styles.txtSignUp}>Signup to your account</Text>
            <TextInput
                placeholder=" First Name"
                placeholderTextColor={fonts.white}
                style={styles.input} />
            <TextInput
                placeholder=" Last Name"
                placeholderTextColor={fonts.white}
                style={styles.input} />
            <TextInput
                placeholder=" Email ID/Phone Number"
                placeholderTextColor={fonts.white}
                style={styles.input} />
            <TextInput
                placeholder=" Password"
                placeholderTextColor={fonts.white}
                style={styles.input}
                secureTextEntry={true} />
            <TextInput
                placeholder=" Re-enter Password"
                placeholderTextColor={fonts.white}
                style={styles.input}
                secureTextEntry={true} />
            <TouchableOpacity 
                onPress={onPressButton}
                style={styles.btnCreate}>
                <Text style={styles.txtButton}>Create</Text>
            </TouchableOpacity>
            <View style={styles.parentViewText}>
                <Text style={styles.txtHave}>Have an account ?</Text>
                <Text
                    onPress={onPressText}
                    style={styles.txtSignIn}> Sign in</Text>
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
        color: fonts.white,
        fontFamily: fonts.fontMontserratBold,
        fontSize: fonts.fontBig,
        marginBottom: 50
    },
    txtSignUp: {
        fontFamily: fonts.fontMontserrat,
        fontSize: fonts.fontSmall,
        color: fonts.white,
        marginBottom: 30
    },
    input: {
        color: fonts.white,
        fontFamily: fonts.fontMontserrat,
        fontSize: fonts.fontMedium,
        borderColor: fonts.white,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 20,
        width: '90%'
    },
    btnCreate: {
        backgroundColor: fonts.white,
        borderRadius: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtButton: {
        color: fonts.lightGreen,
        fontFamily: fonts.fontMontserratBig,
        fontSize: fonts.fontSmall,
        padding: 15
    },
    txtHave: {
        fontFamily: fonts.fontMontserrat,
        fontSize: fonts.fontMedium,
        color: fonts.white
    },
    parentViewText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30
    },
    txtHave: {
        fontFamily: fonts.fontMontserrat,
        color: fonts.white,
        fontSize: fonts.fontMedium
    },
    txtSignIn: {
        color: fonts.white,
        fontFamily: fonts.fontMontserratBig,
        fontSize: fonts.fontMedium
    }
})
export default CreateScreen