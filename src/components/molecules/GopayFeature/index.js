import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const GopayFeature = (props) => {
  return (
    <View style={styles.topMenu}>
      <Image source={props.img} />
      <Text style={styles.textTopMenu}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTopMenu: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
});

export default GopayFeature;
