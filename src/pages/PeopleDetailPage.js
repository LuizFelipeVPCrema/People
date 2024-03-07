import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native"

import Line from '../components/Line';


function PeopleDetailPage() {

        const route = useRoute();
        const { people } = route.params;

        const { title, first, last } = people.name
        return (
            <View style={styles.container}>
                <Image 
                    source={{ uri: people.picture.large}}
                    style={styles.avatar}    
                />
                <View style={styles.detailsContainer}>
                    <Line label="E-mail:" content={people.email} />
                    <Line label="Cidade:" content={people.location.city} />
                    <Line label="Estado:" content={people.location.state} />
                    <Line label="Telefone:" content={people.phone} />
                    <Line label="Celular:" content={people.cell} />
                    <Line label="Nacionalidade:" content={people.nat} />                    
                </View>
            </View>
        );

 }

const styles = StyleSheet.create({
    container:{
        padding: 15,
    },
    avatar:{
        aspectRatio: 1
    },
    detailsContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1,
    },

})

export default PeopleDetailPage;