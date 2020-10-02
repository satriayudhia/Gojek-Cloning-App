import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ScrollableItem = (props) => {
  return (
    <View style={styles.containerItemGoFood}>
      <View style={styles.containerImgGoFood}>
        <Image source={props.img} style={styles.imgGoFood} />
      </View>
      <Text style={styles.textGoFood3}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItemGoFood: {
    marginRight: 16,
  },
  containerImgGoFood: {
    width: 150,
    height: 150,
  },
  imgGoFood: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 10,
  },
  textGoFood3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 12,
  },
});

export default ScrollableItem;
