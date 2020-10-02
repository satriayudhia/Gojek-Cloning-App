import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoBanner from './src/components/molecules/GoBanner';
import GoInfo from './src/components/molecules/GoInfo';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGopay from './src/containers/organisms/HomeGopay';

const App: () => React$Node = () => {
  return (
    <View style={styles.containerHome}>
      <ScrollView style={styles.containerTop}>
        {/* SearchBar & Promo */}
        <SearchFeature />
        {/* Gopay Section */}
        <HomeGopay />
        {/* Main Feature Section */}
        <HomeMainFeature />
        <View style={styles.separator} />
        {/* Go News Section */}
        <GoNews />
        {/* Internal Information Section */}
        <GoInfo />
        {/* Go Food Banner Section */}
        <GoBanner />
        {/* Nearby Go Food */}
        <ScrollableProducts />
      </ScrollView>
      {/* Bottom Menu Section */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 17,
    backgroundColor: '#F2F2F4',
    marginTop: 20,
  },
});

export default App;
