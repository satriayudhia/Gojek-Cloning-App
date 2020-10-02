import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';

class HomeGopay extends Component {
  render() {
    return (
      <View style={styles.containerGoPay}>
        <View style={styles.containerGoPaySaldo}>
          <Image source={require('../../../../assets/icon/gopay.png')} />
          <Text style={styles.textSaldo}>Rp50.000</Text>
        </View>
        <View style={styles.containerTopMenu}>
          <GopayFeature
            title="Pay"
            img={require('../../../../assets/icon/pay.png')}
          />
          <GopayFeature
            title="Nearby"
            img={require('../../../../assets/icon/nearby.png')}
          />
          <GopayFeature
            title="Top Up"
            img={require('../../../../assets/icon/topup.png')}
          />
          <GopayFeature
            title="More"
            img={require('../../../../assets/icon/more.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerGoPay: {
    marginHorizontal: 17,
    marginTop: 8,
  },
  containerGoPaySaldo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2C5FB8',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 14,
  },
  textSaldo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeGopay;
