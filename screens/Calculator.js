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
  const Profit = [10,20,30,40,50,60,70];
function Calculator(props) {
    return (
        <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
            
        <View style={styles.FormElement}>
         

            <Text style={{ fontWeight: "bold" ,fontSize:20,alignSelf:'center',padding:10,color:'purple'}}>
              Price Calculator

            </Text>

          {/* <DateItem title="From" date={dateFrom} setDate={setDateFrom} /> */}
            
            <AppInputText
              icon="cash"
              placeholder="Mango Price"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setDesignation(text)}
            />

          

            <AppInputText
              icon="truck"
              placeholder="Transport Cost"
              returnKeyType={Platform.OS === "ios" ? "done" : "next"}
              keyboardType={"phone-pad"}
             // onChangeText={(text) => setPhone(text)}
              
            />
            <AppInputText
              icon="gift"
              placeholder="Packaging Cost"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setGuestname(text)}
            />
            
              
            <AppInputText
              icon="cart-arrow-right"
              placeholder="Courier Cost"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setGuestname(text)}
            />
            <View style={styles.dropdown}> 
              <Icon name={"sack"} color={"purple"}> </Icon> 
              <Text style={{ fontWeight: "bold" ,fontSize:15,padding:15, color:'purple'}}>
              Quantity
              </Text>
            <SelectDropdown
                      data={Category}
                      defaultValue={""}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
                      defaultButtonText="Select Quantity.."
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
              <View style={styles.dropdown}> 
              <Icon name={"chart-line"} color={"purple"}> </Icon> 
              <Text style={{ fontWeight: "bold" ,fontSize:15,padding:15, color:'purple'}}>
              Quality
              </Text>
            <SelectDropdown
                      data={Quality}
                      defaultValue={""}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
                      defaultButtonText="Select Quality.."
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
              <View style={styles.dropdown}> 
              <Icon name={"sack-percent"} color={"purple"}> </Icon> 
              <Text style={{ fontWeight: "bold" ,fontSize:15,padding:15, color:'purple'}}>
              Profit %
              </Text>
            <SelectDropdown
                      data={Profit}
                      defaultValue={""}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
                      defaultButtonText="Select .."
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
              <View style={styles.dropdown}> 
              <Icon name={"offer"} color={"purple"}> </Icon> 
              <Text style={{ fontWeight: "bold" ,fontSize:15,padding:15, color:'purple'}}>
              Discount %
              </Text>
            <SelectDropdown
                      data={Profit}
                      defaultValue={""}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
                      defaultButtonText="Select .."
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
               
          
            <AppButton
                ButtonName={"Calculate"}
               
            />
              <AppInputText
              placeholder="Total Expense "
              //onChangeText={(text) => setGuestname(text)}
            />
            <AppInputText
              placeholder="Price After Profit"
              //onChangeText={(text) => setGuestname(text)}
            />
             <AppInputText
              placeholder="Price After Discount"
              //onChangeText={(text) => setGuestname(text)}
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
export default Calculator;