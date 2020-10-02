import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component {
  render() {
    return (
      <View>
        <View style={styles.containerLogoGoFood2}>
          <Image
            source={require('../../../../assets/logo/go-food.png')}
            style={styles.imgLogoGojek}
          />
        </View>
        <View style={styles.containerTextGoFood2}>
          <Text style={styles.textGoFood1}>See nearby restaurants</Text>
          <Text style={styles.textGoFood2}>See all</Text>
        </View>
        <ScrollView horizontal={true} style={styles.containerGoFood}>
          <ScrollableItem
            name="Martabak Bangka"
            img={require('../../../../assets/dummy/go-food-banka.jpg')}
          />
          <ScrollableItem
            name="Bakmi GM Cimahi"
            img={require('../../../../assets/dummy/go-food-gm.jpg')}
          />
          <ScrollableItem
            name="KFC Cimahi Mall"
            img={require('../../../../assets/dummy/go-food-kfc.jpg')}
          />
          <ScrollableItem
            name="Martabak Orins"
            img={require('../../../../assets/dummy/go-food-orins.jpg')}
          />
          <ScrollableItem
            name="Ayam Pak Boss"
            img={require('../../../../assets/dummy/go-food-pak-boss.jpg')}
          />
        </ScrollView>
        <View style={styles.separatorThird} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLogoGoFood2: {
    height: 15,
    width: 60,
    marginLeft: 16,
  },
  imgLogoGojek: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  containerTextGoFood2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  textGoFood1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  textGoFood2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#61A756',
  },
  containerGoFood: {
    flexDirection: 'row',
    paddingLeft: 16,
  },
  separatorThird: {
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
    marginTop: 16,
    marginHorizontal: 16,
  },
});

export default ScrollableProducts;
