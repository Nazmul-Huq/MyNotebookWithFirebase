import {render, Pressable, StyleSheet, Text, View, Button, navigate } from 'react-native';
import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import {useState} from 'react';

import {ref, uploadBytes} from 'firebase/storage'
import {storage} from '../firebase/firebase_config'


// note item object


const NoteItem = (props) => {

  const noteIdFirestore = props.id;

  const [image, setImage] = useState([]);
  const [imagePath, setImagePath] = useState();
  const [noteId, setNoteId] = useState();
  let imageId = null;

  
  const getImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true
    });
    setImagePath(result.assets[0].uri)
    setImage(result);
    uploadImage();
   }

   const uploadImage = async () => {

    const res = await fetch(imagePath);
    const blob = await res.blob();
    console.log(imageId)
    const storageRef = ref(storage, imageId);
    
    uploadBytes(storageRef, blob).then((snapshot) => {
      imageId = null;
      useState(null)
      console.log("uploaded image...");
    });   
  }


  const handleImageUpload = (id) => {
    let documentIdAtFirebase = JSON.stringify(id);
    documentIdAtFirebase = documentIdAtFirebase.substring(1)
    documentIdAtFirebase = documentIdAtFirebase.substring(0, (documentIdAtFirebase.length) -1)
    //console.log(documentIdAtFirebase)
    imageId = documentIdAtFirebase +'.jpg';
    //console.log(imageId)
    getImage();
   }
  
  return (
    <View style={styles.individualNoteItem}>
        {/* checked icon */}
        <Pressable style={styles.checkButton}>
            <AntDesign name="checkcircleo" size={24} color="black" />
        </Pressable>      
      
        {/* note text */}
        <Text style={styles.title}>{props.title}</Text>

        {/* <Button title='Get Image' onPress = {() => handleClick(noteIdFirestore)}></Button> */}

        <Pressable style={styles.delete} onPress = {() => handleImageUpload(noteIdFirestore)} >
        <AntDesign name="upload" size={24} color="black" />
        </Pressable>

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