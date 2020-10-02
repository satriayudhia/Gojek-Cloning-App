import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const GoInfo = () => {
  return (
    <View style={styles.containerInternal}>
      <View style={styles.containerLogoGojekInternal}>
        <Image
          source={require('../../../../assets/logo/gojek.png')}
          style={styles.imgLogoGojek}
        />
      </View>
      <Text style={styles.textInternal1}>Complete your profile</Text>
      <View style={styles.containerImgInternal}>
        <View>
          <Image
            source={require('../../../../assets/dummy/facebook-connect.png')}
          />
        </View>
        <View style={styles.containerTextInternal}>
          <Text style={styles.textInternal2}>Connect with Facebook</Text>
          <Text style={styles.textInternal3}>
            Login faster without verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnGoNews}>
        <Text style={styles.btnTextGoNews}>CONNECT</Text>
      </TouchableOpacity>
      <View style={styles.separatorSecond} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInternal: {
    padding: 16,
    paddingBottom: 0,
  },
  containerLogoGojekInternal: {
    height: 15,
    width: 60,
    marginLeft: -4,
  },
  imgLogoGojek: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  textInternal1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 15,
    marginBottom: 20,
  },
  containerImgInternal: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  containerTextInternal: {
    marginLeft: 16,
    flex: 1,
  },
  textInternal2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  textInternal3: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#4A4A4A',
    width: '60%',
  },
  btnGoNews: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
  btnTextGoNews: {
    fontSize: 13,
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

export default GoInfo;
