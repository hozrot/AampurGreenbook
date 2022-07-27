import React from 'react';
import { View ,StyleSheet,Image,Text, TouchableOpacity} from 'react-native';

function ItemListRow({name, description, image,otherinfo,onPress}) {
    return (
        <TouchableOpacity style={styles.ListRow} onPress={onPress}>  
              {image &&  <Image  style={styles.imageBox} source={image}/>}
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:30,fontStyle:'italic',fontWeight:'bold'}} >{name}</Text>
                <Text style={{fontSize:20,alignContent:'center'}}>{description}</Text>
                <Text>{otherinfo}</Text>
                </View>


        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    List:{
        flexDirection:'row',
        margin:15        
    },
    ListRow:{
        flexDirection:'column',
       
        alignItems:'center'     
    },
    imageBox:{
        height: 200,
        width: 350,
        borderRadius: 10 ,
        marginRight:10, 
        
    },
    
})

export default ItemListRow;
