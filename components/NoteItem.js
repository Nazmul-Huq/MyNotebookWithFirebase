import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

// note item object
const NoteItem = (props) => {
  return (
    <View style={styles.individualNoteItem}>
        {/* checked icon */}
        <Pressable style={styles.checkButton}>
            <AntDesign name="checkcircleo" size={24} color="black" />
        </Pressable>      
      
        {/* note text */}
        <Text style={styles.title}>{props.title}</Text>

        {/* delete button */}
        <Pressable style={styles.delete}>
            <MaterialIcons name="delete-outline" size={24} color="black" />
        </Pressable>
    </View>
  );
}

export default NoteItem;

const styles = StyleSheet.create({
  individualNoteItem:{
      flexDirection: 'row',
      backgroundColor: '#2196F3',
      width: '90%',
      alignSelf: 'center',
      padding: 10,
      justifyContent: 'space-between',
      marginVertical: 5,
      borderRadius: 10
    },
    title:{
        color: "#fff",
        fontSize: 20,
        flex: 1,
        fontWeight: "500",
        paddingLeft: 10
    },
    delete:{
      padding: 2,      
    }
});