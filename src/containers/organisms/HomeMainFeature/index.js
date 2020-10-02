import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

class HomeMainFeature extends Component {
  render() {
    return (
      <View style={styles.containerMainFeature}>
        <View style={styles.containerMainFeatureAtas}>
          <MainFeature
            title="GO-RIDE"
            img={require('../../../../assets/icon/go-ride.png')}
          />
          <MainFeature
            title="GO-CAR"
            img={require('../../../../assets/icon/go-car.png')}
          />
          <MainFeature
            title="GO-BLUEBIRD"
            img={require('../../../../assets/icon/go-bluebird.png')}
          />
          <MainFeature
            title="GO-SEND"
            img={require('../../../../assets/icon/go-send.png')}
          />
        </View>
        <View style={styles.containerMainFeatureBawah}>
          <MainFeature
            title="GO-DEALS"
            img={require('../../../../assets/icon/go-deals.png')}
          />
          <MainFeature
            title="GO-PULSA"
            img={require('../../../../assets/icon/go-pulsa.png')}
          />
          <MainFeature
            title="GO-FOOD"
            img={require('../../../../assets/icon/go-food.png')}
          />
          <MainFeature
            title="MORE"
            img={require('../../../../assets/icon/go-more.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMainFeature: {
    marginTop: 18,
  },
  containerMainFeatureAtas: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 18,
  },
  containerMainFeatureBawah: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
});

export default HomeMainFeature;
