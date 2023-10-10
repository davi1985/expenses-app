import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Button } from "./Button";

export const ErrorOverlay = ({ message }) => (
  <View style={styles.container}>
    <Text style={[styles.text, styles.title]}>An error occured!</Text>
    <Text style={styles.text}>{message}</Text>
  </View>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: "white",
    textAlign: "center",
    margin: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
