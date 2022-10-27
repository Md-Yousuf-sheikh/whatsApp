import { View, Text, StyleSheet } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Message({ message }) {
  const isMyMessages = () => {
    return message.user.id === "u1";
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessages() ? "#e4ffc9" : "white",
          alignSelf: isMyMessages() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{message?.text}</Text>
      <Text style={styles.time}>{dayjs(message?.createdAt).fromNow(true)}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
    maxWidth: "80%",
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});
