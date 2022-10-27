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
      <View style={[styles.trView]} />
      <Text style={styles.text}>{message?.text}</Text>
      <Text style={styles.time}>{dayjs(message?.createdAt).fromNow(true)}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    margin: 5,
    borderRadius: 10,
    padding: 10,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  trView: {
    //   width: 10,
    //   height: 10,
    //   backgroundColor: "red",
    //   position: "absolute",
    //   bottom: 0,
    //   // borderTopRightRadius: 10,
    //   borderBottomStartRadius: 10,
    //   marginBottom: -5,
  },
  text: {
    color: "black",
    fontWeight: "400",
    letterSpacing: 0.2,
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});
