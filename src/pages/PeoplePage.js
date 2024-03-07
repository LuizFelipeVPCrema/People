import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
      axios
        .get('https://randomuser.me/api/?nat=BR&results=15')
        .then(response => {
          const { results } =  response.data;
          this.setState({
            people: results,
            loading: false
          });
        }).catch(error => {
          this.setState({ 
            error: true,
            loading: false 
          })
        });
  }

  navigateToPeopleDetail = (pageParams) => {
    this.props.navigation.navigate('PeopleDetail', pageParams);
  }

  render() {
    return (
      <View style={styles.container}>
        { 
        this.state.loading 
        ? <ActivityIndicator size="large" color={'#6ca2f7'} style={styles.horizontal}/> 
        :  this.state.error
          ? <Text style={[styles.error, styles.horizontal]}>Ops... Algo deu errado :( </Text>   //  <ErrorComponent />
          : <PeopleList
          people={this.state.people}
          onPressItem={this.navigateToPeopleDetail}
          /> 
        
      }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  horizontal: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18,
  }
});


