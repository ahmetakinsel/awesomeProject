import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ahmet Akinsel</Text>
      <StatusBar style="auto" />
      <View>
        <TextInput> type something here</TextInput>
      </View>
      <View>
        <Text
          style={styles.text2}
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        >
          heyhey
        </Text>
      </View>
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

  text: {
    color: "red",
    alignItems: "center",
  },

  text2: {
    color: "blue",
  },
});
