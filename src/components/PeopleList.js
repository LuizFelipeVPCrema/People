import React from "react";
import { View,  StyleSheet} from "react-native";
import PeopleListItem from "./PeopleListItem";



const PeopleList = props => {

    const { people } = props;
    
    const items = people.map(people =>  
        <PeopleListItem 
            key={people.name.first} 
            people={people} 
        /> 
    )

    return(
        <View style={styles.container}>
            { items }
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: "#e2f2f5"
    },
})

export default PeopleList