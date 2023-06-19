import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Header from "../../Shared/Header";

export default function Welcome() {
    return (


        <View style={styles.containerLogo}>
            <Image
                source={require('../../assets/logo.png')}
                style={{ width: '30%' }}
                resizeMode='contain'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLogo: {
        width: "100%",
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
})