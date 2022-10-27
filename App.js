import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./src/components/ChatListItem";

export default function App() {
  const chat = {
    id: "1",
    user: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUmE6FMTWUnXwdX_vkq9XMe_6AIFuuBY_lQ&usqp=CAU",
      name: "Yousuf",
    },
    lastMessage: {
      text: "ok no problem",
      createAt: "07:30",
    },
  };
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat} />
      <ChatListItem chat={chat} />
      <ChatListItem chat={chat} />
      <ChatListItem chat={chat} />
      <ChatListItem chat={chat} />
      <ChatListItem chat={chat} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
