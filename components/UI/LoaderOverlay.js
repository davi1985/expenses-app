import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export const LoadingOverlay = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="white" />
  </View>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
