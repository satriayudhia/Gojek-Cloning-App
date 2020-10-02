import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';

const SearchFeature = () => {
  return (
    <View style={styles.containerTopSecond}>
      <View style={styles.containerSearchBar}>
        <TextInput
          placeholder="What do you want to eat?"
          style={styles.searchBar}
        />
        <Image
          source={require('../../../../assets/icon/search.png')}
          style={styles.imgSearch}
        />
      </View>
      <View style={styles.containerPromo}>
        <Image source={require('../../../../assets/icon/promo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTopSecond: {
    marginHorizontal: 17,
    flexDirection: 'row',
    paddingTop: 15,
  },
  containerSearchBar: {
    position: 'relative',
    flex: 1,
  },
  searchBar: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#E8E8E8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    marginRight: 18,
  },
  imgSearch: {
    position: 'absolute',
    top: 7,
    left: 12,
  },
  containerPromo: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchFeature;
