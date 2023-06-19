import { Avatar, StatusBar,Box } from "native-base"
import React from "react"
import { StyleSheet, Image, SafeAreaView } from "react-native"

const Header = () => {
    return (
        <>
            <StatusBar backgroundColor="black" barStyle={'light-content'}/>
            <SafeAreaView style={styles.header}>
                <Avatar
                    source={require("../../src/assets/logo.png")}
                    resizeMode="contain"
                    size={60}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 5,
        backgroundColor:'gainsboro'

    }
})

export default Header;