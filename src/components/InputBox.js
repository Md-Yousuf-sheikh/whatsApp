import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function InputBox() {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.warn("Sending a ne message", newMessage);

    setNewMessage("");
  };
  return (
    <View style={styles.container}>
      {/* Icon */}
      <AntDesign name="plus" size={20} color="royalblue" />
      {/* Text Input */}
      <TextInput
        value={newMessage}
        style={styles.input}
        placeholder={"type your message ..."}
        onChangeText={setNewMessage}
      />
      {/* Icon */}
      <TouchableOpacity onPress={onSend} pressRetentionOffset={0.1}>
        <MaterialIcons
          name="send"
          size={16}
          color="white"
          style={styles.send}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
