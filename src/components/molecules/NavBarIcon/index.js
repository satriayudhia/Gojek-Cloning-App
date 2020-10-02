import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const NavBarIcon = (props) => {
  return (
    <View style={styles.viewMenu}>
      <Image style={styles.iconMenu} source={props.img} />
      <Text
        style={{
          fontSize: 10,
          color: props.active ? '#43AB4A' : '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconMenu: {
    width: 26,
    height: 26,
  },
});

export default NavBarIcon;
