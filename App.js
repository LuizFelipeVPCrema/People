import React from 'react';
import Header from './src/components/Header';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  renderList() {
    const names = [
      'luiz',
      'felipe',
      'vargas' 
      ];

      const textElements = names.map(name => {
        return <Text key={name}>{name}</Text>
      })

      return textElements;
  }
  
  render() {
    return (
      <View>
        <Header title="Pessoas!" />
        { this.renderList() }
      </View>
    );
  }
}
