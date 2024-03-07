import React from "react";
import { ScrollView,  StyleSheet} from "react-native";
import PeopleListItem from "./PeopleListItem";



const PeopleList = (props) => {

    const { people, onPressItem } = props;

    const items = people.map(people =>  
        <PeopleListItem 
            key={people.name.first} 
            people={people}
            onPressItem={onPressItem} 
        /> 
    )

    return(
        <ScrollView style={styles.container}>
            { items }
        </ScrollView>
    );
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: "#e2f2f5"
    },
})

export default PeopleList
