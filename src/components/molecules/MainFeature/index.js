import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const MainFeature = (props) => {
  return (
    <View style={styles.containerMainFeatureMenu}>
      <View style={styles.imgMainFeature}>
        <Image source={props.img} />
      </View>
      <Text style={styles.textMainFeature}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMainFeatureMenu: {
    width: '25%',
    alignItems: 'center',
  },
  imgMainFeature: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMainFeature: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
});

export default MainFeature;
