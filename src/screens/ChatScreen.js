import {
  View,
  Text,
  ImageBackground,
  FlatList,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import bg from "../../assets/Images/bg.jpg";
import data from "../../assets/data/messages.json";
import Message from "../components/Message";
import InputBox from "../components/InputBox";

export default function ChatScreen() {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={data}
        renderItem={(item) => {
          return <Message message={item?.item} />;
        }}
        style={styles.list}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  list: {},
  bg: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
