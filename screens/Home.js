import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
function Home(props) {
    return (
        <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default Home;