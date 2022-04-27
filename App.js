import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Index from "./src/Screens/Index";
import CreateScreen from "./src/Screens/CreateScreen";
import EditScreen from "./src/Screens/EditScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Store from "./src/Redux/Store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const render = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default render;
