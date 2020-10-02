import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const GoNews = () => {
  return (
    <View style={styles.containerGoNews}>
      <View style={styles.containerGoNewsImg}>
        <Image
          source={require('../../../../assets/dummy/sepak-bola.jpg')}
          style={styles.imgGoNews}
        />
        <Image style={styles.imgBgGoNews} />
        <View style={styles.containerLogoGojek}>
          <Image
            source={require('../../../../assets/logo/white.png')}
            style={styles.imgLogoGojek}
          />
        </View>
      </View>
      <View style={styles.containerGoNewsText}>
        <Text style={styles.textGoNewsTitle}>GO-NEWS</Text>
        <Text style={styles.textGoNewsDesc}>
          Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei
        </Text>
        <TouchableOpacity style={styles.btnGoNews}>
          <Text style={styles.btnTextGoNews}>READ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerGoNews: {
    paddingTop: 16,
    paddingHorizontal: 17,
  },
  containerGoNewsImg: {
    position: 'relative',
  },
  imgGoNews: {
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
  containerLogoGojek: {
    height: 15,
    width: 60,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  imgLogoGojek: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  containerGoNewsText: {
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  textGoNewsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  textGoNewsDesc: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7A7A7A',
    marginBottom: 11,
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
});

export default GoNews;
