import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const GoBanner = () => {
  return (
    <View style={styles.containerGoFoodBanner}>
      <View style={styles.containerGoFoodBannerSecond}>
        <Image
          source={require('../../../../assets/dummy/food.jpg')}
          style={styles.imgFoodBanner}
        />
        <Image style={styles.imgBgGoNews} />
        <View style={styles.containerLogoGoFood}>
          <Image
            source={require('../../../../assets/logo/go-food-white.png')}
            style={styles.imgLogoGoFood}
          />
        </View>
        <View style={styles.containerTextGoFood}>
          <View>
            <Text style={styles.textGoFoodBannerTitle}>
              Free GO-FOOD voucher
            </Text>
            <Text style={styles.textGoFoodBannerDesc}>
              Quick, before they run out!
            </Text>
          </View>
          <View style={styles.btnGoFoodBanner}>
            <TouchableOpacity style={styles.btnGoFoodBannerSecond}>
              <Text style={styles.btnTextGoFoodBanner}>GET VOUCHER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.separatorSecond} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerGoFoodBanner: {
    padding: 17,
  },
  containerGoFoodBannerSecond: {
    position: 'relative',
  },
  imgFoodBanner: {
    height: 170,
    width: '100%',
    borderRadius: 6,
  },
  imgBgGoNews: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 6,
    opacity: 0.15,
  },
  containerLogoGoFood: {
    height: 20,
    width: 60,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  imgLogoGoFood: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  containerTextGoFood: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  textGoFoodBannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  textGoFoodBannerDesc: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
  },
  btnGoFoodBanner: {
    paddingLeft: 12,
    paddingTop: 12,
    flex: 1,
  },
  btnGoFoodBannerSecond: {
    backgroundColor: '#61A756',
    paddingHorizontal: 7,
    paddingVertical: 11,
    alignSelf: 'stretch',
    borderRadius: 4,
  },
  btnTextGoFoodBanner: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  separatorSecond: {
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
    marginTop: 16,
  },
});

export default GoBanner;
