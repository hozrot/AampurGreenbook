import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import colors from "../config/colors";

export default function DateItem({ title, date, setDate }) {
  const [show, setShow] = useState(Platform.OS === "ios");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginLeft: 7 }}>{title}</Text>

      <TouchableOpacity onPress={() => setShow(true)}>
        {date ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.day}>{date.getDate()}</Text>

            <View>
              <Text style={{ fontSize: 16, color: "grey" }}>
                {monthNames[date.getMonth()]}
              </Text>

              <Text style={{ fontSize: 16, color: "grey" }}>
                {date.getFullYear()}
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              justifyContent: "center",
              height: 70,
            }}
          >
            <Text style={styles.empty}>--</Text>
          </View>
        )}
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
          style={{ width: 90 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  day: {
    color: colors.primary,
    fontSize: 52,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  empty: {
    fontSize: 26,
    fontWeight: "bold",
    color: "grey",
    marginLeft: 7,
  },
});

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
