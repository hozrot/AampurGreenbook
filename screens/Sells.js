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
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";
import SelectDropdown from 'react-native-select-dropdown';

import DateItem from "../components/DateItem";
import Icon from "../components/Icon";

const Category = ["5 KG", "10 KG", "15 KG","20 KG"];
const Quality = ["Regular", "Premium","Organic"];
function Sells(props) {
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          
         
            <View style={styles.FormElement}>
            <Text style={{ fontWeight: "bold" ,alignSelf:'center',paddingTop:10}}>
              Total Sells this Season (2022)
            </Text>
            <Text style={{ fontWeight: "bold" ,alignSelf:'center',fontSize:40,paddingBottom:10}}>
              5,000
            </Text>
          <Text style={{ fontWeight: "bold" ,fontSize:20,padding:10,color:'purple'}}>
              Add new sells 

            </Text>
          <AppInputText
              icon="calendar"
              placeholder="Date"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setGuestname(text)}
            />
            <AppInputText
              icon="cash"
              placeholder="Total Sell Amount"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setGuestname(text)}
            />
            <AppInputText
              icon="tree"
              placeholder="Mango Quantity"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setGuestname(text)}
            />
            <AppInputText
              icon="gift-open"
              placeholder="10 KG Carret"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setGuestname(text)}
            />
             <AppInputText
              icon="gift-open"
              placeholder="20 KG Carret"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setGuestname(text)}
            />
             <AppInputText
              icon="gift-open"
              placeholder="5 KG Carret"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setGuestname(text)}
            />
             <AppButton
                ButtonName={"Add"}       
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
    height:120
  },
});


export default Sells;