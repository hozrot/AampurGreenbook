import React from "react";
import { StyleSheet, TouchableOpacity, Alert, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

import { useStates } from "../hooks/useStates";
import colors from "../config/colors";

const length = 65;

export default function CalanderCell({ item, roomName }) {
  const navigation = useNavigation();
  const { data, setData } = useStates();

  const { isAdmin } = useStates();
  const { date, monthNum, isWeekend, rooms } = item;
  const roomData = rooms[roomName];
  const { isBooked, bookingID, start, end, bookingItem, text, isVehicle,isMeal } =
    roomData;
  let fromDate, fromMonth, fromYear, totalBookingDays, numberofvehical, numberofmeal,mealType;

  if (bookingItem) {
    fromDate = bookingItem.fromDate;
    fromMonth = bookingItem.fromMonth;
    fromYear = bookingItem.fromYear;
    totalBookingDays = bookingItem.totalBookingDays;
    numberofmeal = bookingItem.numberofmeal;
    mealType = bookingItem.mealType;
    numberofvehical = bookingItem.numberofvehical;
   
  }

  const db = getFirestore();

  const handleRemove = () => {
    let temp = data;

    deleteDoc(doc(db, "bookings", bookingID)).then(() => {
      const index = temp.findIndex(
        (obj) =>
          obj.date == fromDate &&
          obj.monthNum == fromMonth &&
          obj.year == fromYear
      );

      for (let i = index; i < index + totalBookingDays; i++) {
        temp[i].rooms[roomName] = {
          isBooked: false,
          start: false,
          end: false,
        };
      }

      setData(temp);
      Alert.alert("Booking Removed", roomName + " is no longer booked");
    });
  };

  const handleOnPress = () => {
    if (isAdmin) {
      if (isBooked) {
        Alert.alert(roomName, "This room is already booked", [
          {
            text: "Update",
            onPress: () =>
              navigation.navigate("Booking", {
                header: roomName,
                date: date,
                monthNum: monthNum,
                roomName: roomName,
                toUpdate: true,
                roomData: roomData,
                bookingID: bookingID,
              }),
          },
          {
            text: "Remove",
            onPress: handleRemove,
            style: "destructive",
          },
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
        ]);
      } else {
        navigation.navigate("Booking", {
          header: roomName,
          date: date,
          monthNum: monthNum,
          roomName: roomName,
          toUpdate: false,
        });
      }
    } else {
      Alert.alert("Restrict!!", "For admins use ONLY");
    }
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={[
        styles.container,
        {
          backgroundColor: isWeekend ? "#E3E3E3" : "transparent",
        },
      ]}
    >
      {roomData.isBooked && (
        <View
          style={[
            styles.colorStrip,
            {
              borderTopRightRadius: end ? 15 : 0,
              borderBottomRightRadius: end ? 15 : 0,
              borderTopLeftRadius: start ? 15 : 0,
              borderBottomLeftRadius: start ? 15 : 0,
            },
          ]}
        >
          {text.length != 0 && (
            //<Text style={{ color: colors.white }}>{ mealType + "*" +numberofmeal  +" \n" +text}</Text>
            <Text style={{ color: colors.white }}>{ text}</Text>
          )}
        

          {isVehicle && (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="car-sport" size={16} color={colors.white} />
              <Text style={{ color: colors.white, marginLeft: 3 }}>
                {"x " + numberofvehical}
              </Text>
            </View>
          )}

        
          {isMeal && (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="restaurant" size={16} color={colors.white} />  
              <Text style={{ color: colors.white, marginLeft: 3 }}>
                {"x " + mealType + " "+numberofmeal}
              </Text>
            </View>
          )}

        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: length,
    width: length,
    borderWidth: 1,
    borderColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  colorStrip: {
    backgroundColor: colors.primary,
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    padding:5
  },
});