import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import capitalizeFirstLetter from '../util/CapitalizeFirstLeatter'

const PeopleListItem = (props) => {
    const { people, onPressItem } = props;
    const {title, first, last } = people.name

    return(
        <TouchableOpacity onPress={() => onPressItem({ people })}>
            <View style={styles.line}>
                    <Image style={styles.avatar} source={{ uri: people.picture.thumbnail}} />
                    <Text style={styles.lineText}>
                        {`${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
                    </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles =  StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        marginLeft: 15,
        flex: 1,
        borderRadius: 50,
    },
    button: {
        aspectRatio: 1,
        borderRadius: 50,
        marginRight:14,
    }
})

export default PeopleListItem