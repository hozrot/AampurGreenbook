import React from 'react';
import {
  View,
  StyleSheet,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  FlatList,
  Text,Button
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import SelectDropdown from 'react-native-select-dropdown';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import ItemList from '../components/ItemList';
import DateItem from "../components/DateItem";
import Icon from "../components/Icon";
import AppInputText from "../components/AppInputText";
import colors from "../config/colors";
import { useStates } from "../hooks/useStates";
import AppButton from "../components/AppButton";
import { TouchableOpacity } from 'react-native';

const expenselist =[
  {
      id: 1,
      name: 'Ali',
      category: 'Courier',
      amount:'2100',
      date:'22-aug-2022'
      //image:require('../assets/belt/white.jpg'),
  },
  {
      id: 2,
      name: 'Fahim',
      amount:'2500',
      date:'22-aug-2022',
      category: 'Transport',
    
  },
  {
    id: 3,
    name: 'Fahim',
    description:'lunch bill',
    amount:'200',
    date:'22-aug-2022',
    category: 'Others',
  
},
]
const Category = ["Marketing", "Sells", "Transport","Courier","Mango","Others"];
const member = ["Ali", "Badhon", "Fahim","Khokon","Sarvi","Others"]

function Expense(props) {
    return (
      <View style={styles.container}>
     <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView alwaysBounceVertical={false}>
        <Text style={{ fontWeight: "bold" ,alignSelf:'center',paddingTop:10}}>
              Total Expense this Season 2022
            </Text>
            <Text style={{ fontWeight: "bold" ,alignSelf:'center',fontSize:40,paddingBottom:10}}>
              43,000
            </Text>

            <Collapse>
              <CollapseHeader>
                <View>
                <Text style={{ fontWeight: "bold" ,fontSize:20,padding:10,color:'purple'}}>
              Add new Expense ++
            </Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
              <View style={styles.FormElement}>
            
            <AppInputText
              icon="bullseye-arrow"
              placeholder="Amount"
              keyboardType={"phone-pad"}
              //onChangeText={(text) => setDesignation(text)}
            />


            <AppInputText
              icon="calendar"
              placeholder="Date"
              returnKeyType={Platform.OS === "ios" ? "done" : "next"}
              keyboardType={"phone-pad"}
             // onChangeText={(text) => setPhone(text)}
              
            />
            {/* <AppInputText
              icon="account-star-outline"
              placeholder="Name"
           
              //onChangeText={(text) => setGuestname(text)}
            />
            */}
            <View style={styles.dropdown}> 
              <Icon name={"account-star-outline"} color={"purple"}> </Icon> 
              <Text style={{ fontWeight: "bold" ,fontSize:15,padding:15, color:'purple'}}>
              Name
              </Text>
            <SelectDropdown
                      data={member}
                      defaultValue={""}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
                      defaultButtonText="Select a Person.."
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

            <AppButton
                ButtonName={"Save"}
               
            />
              
          </View>
              </CollapseBody>
          </Collapse>

          <FlatList 
          alwaysBounceVertical={false}
         
            data={expenselist}
            keyExtractor={expenselist=>expenselist.id.toString()}
            renderItem={({item})=>
            <ItemList
                  name={item.name}
                  description={item.description}
                  amount={item.amount}
                  category={item.category}
                  date={item.date}
                  // onPress={()=> navigation.navigate("VipDetails",item)}
                  />
              }/>

         <View>

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
    
  },
});

export default Expense;