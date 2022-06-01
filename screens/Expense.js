import React from 'react';
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
import SelectDropdown from 'react-native-select-dropdown';

import DateItem from "../components/DateItem";
import Icon from "../components/Icon";
import AppInputText from "../components/AppInputText";
import colors from "../config/colors";
import { useStates } from "../hooks/useStates";
import AppButton from "../components/AppButton";


const Category = ["Marketing", "Sells", "Transport","Courier","Mango","Others"]

function Expense(props) {
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "height" : null}
      >
        <ScrollView>
          
          <View style={styles.FormElement}>
            {/* <Text style={{ fontWeight: "bold" ,alignSelf:'center',paddingTop:10}}>
              Total Investment
            </Text>
            <Text style={{ fontWeight: "bold" ,alignSelf:'center',fontSize:40,paddingBottom:10}}>
              20,000
            </Text> */}

            <Text style={{ fontWeight: "bold" ,fontSize:20,padding:10,color:'purple'}}>
              Season 2022
            </Text>

          {/* <DateItem title="From" date={dateFrom} setDate={setDateFrom} /> */}
            
            <AppInputText
              icon="bullseye-arrow"
              placeholder="Amount"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setDesignation(text)}
            />

            {/* <AppInputText
              icon="bow-arrow"
              placeholder=" Purpose"
              //onChangeText={(text) => setAddress(text)}
              
            /> */}

            <AppInputText
              icon="calendar"
              placeholder="Date"
              returnKeyType={Platform.OS === "ios" ? "done" : "next"}
              keyboardType={"phone-pad"}
             // onChangeText={(text) => setPhone(text)}
              
            />
            <AppInputText
              icon="account-star-outline"
              placeholder="Name"
           
              //onChangeText={(text) => setGuestname(text)}
            />
            {/* <AppInputText
              icon="cart-check"
              placeholder="Category"
           
              //onChangeText={(text) => setGuestname(text)}
            /> */}
              <View style={styles.dropdown}> 
              <Icon name={"bow-arrow"} color={"purple"}> </Icon> 
              <Text style={{ fontWeight: "bold" ,fontSize:15,padding:15, color:'purple'}}>
              Category
              </Text>
            <SelectDropdown
                      data={Category}
                      defaultValue={""}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
                      defaultButtonText="Select a Category.."
                      buttonTextAfterSelection={(selectedItem, index) => {
                        //setMealType(selectedItem)
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                      }}
                      rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                      }}
                    />

              </View>
              
            <AppInputText
              icon="note"
              placeholder="Note"
           
              //onChangeText={(text) => setGuestname(text)}
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
  dropdown:{
    flex: 1,
    flexDirection:'row',
    paddingHorizontal: 8,
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

export default Expense;