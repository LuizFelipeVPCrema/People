import React from "react";
import { FlatList,  StyleSheet} from "react-native";
import PeopleListItem from "./PeopleListItem";



const PeopleList = (props) => {

    const { people, onPressItem } = props;

    return(
        <FlatList 
            style={styles.container}
            data={people}
            renderItem={({ item }) => ( 
                <PeopleListItem 
                    people={item}
                    onPressItem={onPressItem} 
                /> 
            )}    
            keyExtractor={item => item.id.value}
        />
        
    );
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: "#e2f2f5"
    },
})

export default PeopleList
