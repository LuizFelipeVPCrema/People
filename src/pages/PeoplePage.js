import React from 'react';
import { View } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=BR&results=25')
      .then(response => {
        const { results } =  response.data;
        this.setState({
          people: results
        });
      })
  }

  navigateToPeopleDetail = (pageParams) => {
    this.props.navigation.navigate('PeopleDetail', pageParams);
  }

  render() {
    return (
      <View>
        <PeopleList 
          people={this.state.people}
          onPressItem={this.navigateToPeopleDetail}
        />
      </View>
    );
  }
}
