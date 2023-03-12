import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import NoteItem from './components/NoteItem';
import {db, collection, addDoc, getDocs} from './firebase/firebase_config'
import { storage } from './firebase/firebase_config';


export default function App() {
const [title, setTitle] = useState("");
const [noteList, setNoteList] = useState([]);

// function to add note item to the database
const addNoteItem = async() => {
  try {
    const docRef = await addDoc(collection(db, "notes"), {
      title: title,
      isChecked: false
    });
    console.log("Document written with ID: ", docRef.id);
    setTitle("") // this will make the input field empty after submitting
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const getNoteList = async() => {
  const querySnapshot = await getDocs(collection(db, "notes"));
  setNoteList(querySnapshot.docs.map((doc)=>({...doc.data(),id: doc.id})));
}

useEffect(() => {
  getNoteList();
}, []);

  return (
    <View style={styles.container}>

      {/* this is the app header */}
      <View style={styles.header}>
        {/* heading */}
        <Text style={styles.heading}>My Notes</Text>
        {/* no of shopping items */}
        <Text style={styles.noOfItems}>3</Text>
        {/* delete all */}
        <Pressable style={styles.delete}>
            <MaterialIcons name="delete-outline" size={24} color="black" />
        </Pressable>
      </View>

      {/* this is the list read from database */}
      {noteList.length > 0 ? (
        <FlatList 
        data={noteList}
        renderItem={({item}) => 
          <NoteItem title={item.title} id={item.id} />
        }
        keyExtractor={item =>item.id}
        /> 
      ):(
        <ActivityIndicator />
      )}
           
      {/* this is the input note field */}
      <TextInput 
        placeholder='Enter Your Note' 
        style={styles.input}
        value={title}
        onChangeText={(text)=> setTitle(text)}
        onSubmitEditing={addNoteItem}
      >

      </TextInput>
      
      <Image 
        source={
          {uri: 'https://firebasestorage.googleapis.com/v0/b/mynotebookwithfirebase.appspot.com/o/JcYL3x6XR24qUMUh1w7d.jpg?alt=media&token=eb27fbca-e62d-4ff9-98d2-d9372e42aec9'}
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBDEFB',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#0D47A1',
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: 30,
    fontWeight: '500'
  },
  noOfItems: {
    fontSize: 30,
  },
  delete:{
    alignItems: "center",
    justifyContent: "center",
    padding: 2,    
  },
  input:{
    backgroundColor: "#F1F2F3",
    padding: 10,
    fontSize: 15,
    width: "100%",
    alignSelf: "center",
    marginTop: 20
  }
});
