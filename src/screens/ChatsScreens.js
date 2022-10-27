import { View, Text, FlatList, StatusBar } from "react-native";
import React from "react";
import chats from "../../assets/data/chats.json";
import ChatListItem from "../components/ChatListItem";

export default function ChatsScreens() {
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    >
      <FlatList
        data={chats}
        renderItem={(item) => {
          return <ChatListItem chat={item?.item} />;
        }}
      />
    </View>
  );
}
