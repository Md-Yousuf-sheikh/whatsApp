import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ChatScreen from "./src/screens/ChatScreen";
import ChatsScreens from "./src/screens/ChatsScreens";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ChatsScreens /> */}
      <ChatScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
