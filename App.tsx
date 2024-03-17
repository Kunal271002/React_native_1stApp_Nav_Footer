import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Navbar from './Components/Navbar.tsx';
import Footer from './Components/Footer.tsx';
const App = () => {
  return (
    <>
    <Navbar/>
    <View>
    <Text>H1</Text> 
    <Footer/>
    </View>
    </>
  );
};

export default App;
