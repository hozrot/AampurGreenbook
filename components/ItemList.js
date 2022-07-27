import React from 'react';
import { View ,StyleSheet,Image,Text, TouchableOpacity} from 'react-native';
function ItemList({name, description, date,amount,category,onPress}) {
    return (
        <TouchableOpacity  onPress={onPress}>  
             <View style={styles.List}>
                <View style={styles.left}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>{name}</Text>
                    <Text>{date}</Text>
                    { description && <Text>{description}</Text>}
                
                </View>
                <View style={styles.right}>
                  <Text style={{fontWeight:'bold',fontSize:25}}>{amount}/-</Text>
                 
                  <Text style={{fontWeight:'bold'}}>{category}   </Text>
                </View>
               
            </View>
           
              
        </TouchableOpacity>
    );
}
// {image &&  <Image  style={styles.imageBox} source={image}/>}
const styles = StyleSheet.create({
    List:{
        flexDirection:'row',
        margin:10,
        flex:1     
    },
    left:{
        flex:.5,
        flexDirection:'column',
        alignItems:'flex-start'        
    },
    right:{
        flex:.5,
        flexDirection:'column',
        alignItems:'flex-end' ,         
    },
    bottom:{
        flexDirection:'column',
        alignItems:'center'         
    },
   
    imageBox:{
        height: 200,
        width: 150,
        borderRadius: 10 ,
        marginRight:10, 
        
    },
    
})

export default ItemList;
