import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./component/navigation";
import AppState from "./AppState";


export default function App() {
  return (
    <AppState>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </AppState>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
