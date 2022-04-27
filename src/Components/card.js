import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { remove } from "../Redux/todoSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Edit", { itemId: item.key, Todo: item.Text })
      }
    >
      <View style={styles.View}>
        <Text style={{ fontSize: 25 }}>{item.Text}</Text>

        <Icon
          onPress={() => {
            // alert(item.key);
            dispatch(remove({ key: item.key }));
          }}
          name="trash-can"
          style={{ fontSize: 40 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  View: {
    borderRadius: 10,
    margin: 10,
    padding: 15,
    backgroundColor: "#D3D3D3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
