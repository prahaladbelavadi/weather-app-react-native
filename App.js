import * as React from "react";
import { View, Text, TextInput, Platform } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Universal React with Expo</Text>

      <TextInput placeholder="This is an input box" />
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  red: {
    color: "red",
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
  },
  largeText: { fontSize: 44 },
  smallText: { fontSize: 18 },
};
