import {
  View,
  Text,
  ImageBackground,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import bg from "../../assets/Images/bg.jpg";
import data from "../../assets/data/messages.json";
import Message from "../components/Message";

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
