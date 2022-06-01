import React from "react";
import { View, Text, StyleSheet,TouchableOpacity,Alert } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import AppInputText from "../components/AppInputText";

const length = 65;

export default function CalanderFirstColumn({
  totalRooms,
  roomNames,
  focussedMonth,
  currentYear,
}) {
  const getCells = () => {
    const cells = [];

    for (let i = 0; i < totalRooms; i++) {
      cells.push(
        <TouchableOpacity
          style={[styles.cell, { borderWidth: 1, borderColor: "lightgrey" }]}
          key={i.toString()}
          onPress={() => Alert.alert(
            
            roomNames[i],
            'Only admin can Edit',
            [
              // {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () =>  console.log('OK Pressed!')},
        
            ],
            { cancelable: false }
          )}
        >
          <Text style={{ fontWeight: "bold" }}>{roomNames[i]}</Text>

          <View style={styles.row}>
            <FontAwesome name="bed" size={16} color="grey" />

            <AntDesign
              name="user"
              size={16}
              color="grey"
              style={{ marginLeft: 7, marginRight: -3 }}
            />

            
          </View>
        </TouchableOpacity>
      );
    }

    return cells;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.cell, { backgroundColor: "#EBEBEB" }]}>
        <Text>{currentYear}</Text>
        <Text style={styles.date}>{focussedMonth}</Text>
      </View>

      {getCells()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cell: {
    height: length,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
});
