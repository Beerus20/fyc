import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import Packs from '../linkScreen/stack/InformationView/contentView.js/packs';

export default function CalendarScreen() {
 
  return (
    <View style={styles.container}>
      <Packs/>
    </View>
  );
}




const styles = StyleSheet.create({
    container:  {
        
    }
})
