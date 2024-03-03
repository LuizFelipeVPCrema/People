import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Header = (props) => (
    <View style={style.container}>
        <Text style={style.tittle}>{ props.title }</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        marginTop: 32,
        backgroundColor: '#6ca2f7',
        
        alignItens: 'center',
        justifyContent: 'center'
    },
    tittle: {
        fontSize: 40,
        color: '#fff',
    }
});


export default Header;