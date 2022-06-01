import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CalenderCell from "./CalenderCell";
import colors from "../config/colors";

const length = 65;

export default function CalanderColumn({ item, totalRooms, roomNames }) {
  const getCells = () => {
    const cells = [];

    for (let i = 0; i < totalRooms; i++) {
      cells.push(
        <CalenderCell roomName={roomNames[i]} item={item} key={i.toString()} />
      );
    }

    return cells;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topCell}>
        <Text>{item.day}</Text>

        <View
          style={[
            styles.dateContainer,
            {
              backgroundColor: item.isCurrent ? colors.primary : "transparent",
            },
          ]}
        >
          <Text
            style={[
              styles.date,
              {
                color: item.isCurrent ? "white" : "black",
              },
            ]}
          >
            {item.date}
          </Text>
        </View>
      </View>

      {getCells()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  topCell: {
    height: length,
    width: length,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EBEBEB",
  },
  date: {
    fontWeight: "bold",
    fontSize: 20,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    padding: 5,
    borderRadius: 10,
  },
});
