import React from "react";
import styled from 'styled-components/native';
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, View, Text, Picker } from "react-native";
// import { Text } from "../components";
import { theme } from "../constants";

export default class TextField extends React.Component {

    constructor(props) {
        super(this.props);
        this.state = {
            countryPhoneCode: '+234'
        };
    }

    render() {
        return (
            <View style={[{...styles.container, marginBottom: this.props.bottom ? this.props.bottom : 12}]}>
                {this.props.dropdown ?
                    <View style={styles.dropdown}>
                        <Picker
                            selectedValue={this.state.countryPhoneCode}
                            style={styles.dropdown}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({countryPhoneCode: itemValue})
                        }>
                            <Picker.Item label="+234" value="NG" />
                            <Picker.Item label="+1" value="US" />
                        </Picker>
                    </View> 
                : null}
                <TextInput
                    style={styles.inputStyle}
                    placeholder={this.props.placeholder}
                ></TextInput>
            </View>
        );
    }
}


// const Field = styled.TextInput`
//     width: ${props => props.width ? props.width : '100%'};
//     height: 50;

// `;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: theme.colors.gray,
        borderWidth: 1,
        borderRadius: 3,
        width: '100%',
        height: 50,
        alignItems: "center",
        overflow: 'hidden'
    },
    inputStyle: {
        color: 'rgba(0,0,0,.8)',
        backgroundColor: 'white',
        width: '100%',
        fontSize: 16,
        lineHeight: 23,  
        fontFamily: 'System',
        fontWeight: '400',
        paddingHorizontal: 18,
    },
    dropdown: {
        width: '15%',
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.gray,
        // backgroundColor: 'red'
    },
    dropdownText: {
        color: theme.colors.gray,
    }
})