import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.footerItem}>
        <Text style={styles.footerText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Text style={styles.footerText}>Terms of Service</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Text style={styles.footerText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#333333',
  },
});

export default Footer;
