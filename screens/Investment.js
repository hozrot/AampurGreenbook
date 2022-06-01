import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Text,Button
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
// import {
//   getFirestore,
//   addDoc,
//   collection,
//   updateDoc,
//   doc,
// } from "firebase/firestore";
//import { Button } from "react-native-paper";
//import NumericInput from "react-native-numeric-input";

import DateItem from "../components/DateItem";
import Icon from "../components/Icon";
import AppInputText from "../components/AppInputText";
import colors from "../config/colors";
import { useStates } from "../hooks/useStates";
import AppButton from "../components/AppButton";
//import SelectDropdown from 'react-native-select-dropdown'

//const [dateFrom, setDateFrom] = useState();
function Investment(props) {
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "height" : null}
      >
        <ScrollView>
          
          <View style={styles.FormElement}>
            <Text style={{ fontWeight: "bold" ,alignSelf:'center',paddingTop:10}}>
              Total Investment
            </Text>
            <Text style={{ fontWeight: "bold" ,alignSelf:'center',fontSize:40,paddingBottom:10}}>
              20,000
            </Text>

            <Text style={{ fontWeight: "bold" ,fontSize:20,paddingBottom:10,color:'purple'}}>
              Add new +
            </Text>

          {/* <DateItem title="From" date={dateFrom} setDate={setDateFrom} /> */}
            <AppInputText
              icon="account-star-outline"
              placeholder="Investor Name"
           
              //onChangeText={(text) => setGuestname(text)}
            />
            <AppInputText
              icon="bullseye-arrow"
              placeholder="Amount"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setDesignation(text)}
            />

            <AppInputText
              icon="bow-arrow"
              placeholder=" Purpose"
              //onChangeText={(text) => setAddress(text)}
              
            />

            <AppInputText
              icon="calendar"
              placeholder="Date"
              returnKeyType={Platform.OS === "ios" ? "done" : "next"}
              keyboardType={"phone-pad"}
             // onChangeText={(text) => setPhone(text)}
              
            />
            </View>   
          <View style={styles.Footer}>
            {/* <Button
              mode="contained"
              loading={loading}
              onPress={addGuest}
              style={[styles.button, { backgroundColor: colors.primary }]}
            >
              save
            </Button> */}
            <AppButton
                ButtonName={"Save"}
               
            />
              
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  Body: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: 10,
  },
  
  FormElement: {
    flex: 1,
    marginHorizontal: 5,
  },
  
  Footer: {
    margin: 10,
    height:120
  },
});



export default Investment;