import { StyleSheet } from "react-native";
import { Colors } from "../../../theme";


export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '800',
  }
});
