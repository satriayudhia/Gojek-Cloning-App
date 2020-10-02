import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

class NavBar extends Component {
  render() {
    return (
      <View style={styles.containerMenu}>
        <NavBarIcon
          title="Home"
          img={require('../../../../assets/icon/home-active.png')}
          active={true}
        />
        <NavBarIcon
          title="Orders"
          img={require('../../../../assets/icon/order.png')}
        />
        <NavBarIcon
          title="Help"
          img={require('../../../../assets/icon/help.png')}
        />
        <NavBarIcon
          title="Inbox"
          img={require('../../../../assets/icon/inbox.png')}
        />
        <NavBarIcon
          title="Account"
          img={require('../../../../assets/icon/account.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMenu: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});

export default NavBar;
