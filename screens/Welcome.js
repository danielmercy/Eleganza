import React from "react";
import {Container, Button, Text} from "../components";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../constants";

export default class Welcome extends React.Component {
  render() {
    return (
        <Container>
            <Image source={require('../assets/icons/splashscreen_icon.png')} style={styles.appLogo}></Image>
            <Image source={require('../assets/icons/firsthome.png')} style={styles.first}></Image>
            <Text normal description primary style={styles.text}>Make your rent work for you.</Text>
            <Button style={styles.signUp}>
                <Text>SIGN UP</Text>
            </Button>
            <TouchableOpacity style={styles.login}>
                <Text primary>Already have an account? Login</Text>
            </TouchableOpacity>
        </Container>
    );
  }
}


const styles = StyleSheet.create({ 
    appLogo: {
        width: 130,
        height: 130,
        marginBottom: 12
    },
    first: {
        width: 110,
        height: 20,
        marginBottom: 35
    },
    text: {
        marginBottom: 45,
    },
    signUp: {
        marginBottom: 40
    },
    login: {}
})
