import React, { useState } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { selecttodos } from "../Redux/todoSlice";

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Card from "../Components/card";

const Index = ({ navigation }) => {
  const list = useSelector(selecttodos);

  return (
    <View style={styles.View}>
      <View style={styles.HView}>
        <Text style={styles.Heading}>Tasks to be done</Text>
      </View>
      <View style={styles.CView}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
      <View style={styles.add}>
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Text style={styles.button}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flex: 1,
  },
  HView: {
    flex: 1,
    justifyContent: "center",
  },
  CView: {
    flex: 11,
  },
  Heading: {
    fontSize: 30,
    marginLeft: 10,
  },
  Card: {
    backgroundColor: "#23C4ED",
  },
  add: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flex: 2,
  },
  button: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#5DA3FA",
    fontSize: 30,
    paddingHorizontal: 30,
    marginVertical: 30,
    marginHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#F0F8FF",
  },
});

export default Index;
