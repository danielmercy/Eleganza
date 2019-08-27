import React from "react";
import { View } from "react-native";
import {Container, Button, Text, TextField} from "../components";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../constants";
import styled from 'styled-components/native';

export default class Authentication extends React.Component {
  render() {
    return (
        <Margin>
            <View style={styles.appLogoWrapper}>
                <Image source={require('../assets/icons/splashscreen_icon.png')} style={styles.appLogo}></Image>
            </View>
            <View>
                <Text bold headline primary style={styles.headline}>Authentication Account</Text>
                <Text normal caption primary style={styles.caption}>Enter the activation code sent to your email address or Phone Number to authentication your account</Text>
            </View>
            <View>
                <TextField placeholder="Enter Code" style={styles.input}></TextField>
            </View>
            <View>
                <Button style={styles.nextBtn}>
                    <Text>NEXT</Text>
                </Button>
            </View>
        </Margin>
    );
  }
}

const Margin = styled.View`
    margin-horizontal: ${theme.sizes.padding};
`;

const Divider = styled.View`
    width: 100%;
    height: 1;
    background-color: 'rgba(0,0,0,.2)';
    margin-top: 8;
    margin-bottom: 20
`;


const styles = StyleSheet.create({ 
    appLogoWrapper: {
        alignSelf: "flex-end",
        flexDirection: 'row',

        // marginHorizontal: -theme.sizes.padding/6
    },
    appLogo: {
        width: 50,
        height: 50,
        marginBottom: 12
    },
    first: {
        width: 110,
        height: 20,
        marginBottom: 35
    },
    headline: {
        marginBottom: 1,
    },
    caption: {
        fontSize: theme.fonts.caption.fontSize,
        marginBottom: 50
    },
    nextBtn: {
        position: 'relative',
        top: '40%',
    },
})
