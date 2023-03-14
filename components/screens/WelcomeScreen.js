import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useState} from 'react';
import {collection, addDoc, query, onSnapshot,} from 'firebase/firestore'
import { database } from '../../config/config';


const WelcomeScreen = ({navigation}) => {
    const shopping2 = 'notes2';
    const [notes, setNotes] = useState([]);
    const readDB = async () => {
        const collectionRef = collection(database, shopping2);
        const q = query(collectionRef, ref => ref.orderBy('createdAt', 'desc'));
        onSnapshot(q, snapshot =>{
            const _notes = [];
            snapshot.forEach(doc => {
                _notes.push({
                ...doc.data(),
                key: doc.id
                });
            });
        setNotes(_notes);
        });
    }

    const addNote = () => {
        addDoc(collection(database, shopping2), {
            text: "Tuesday note",
            hasImage: false
        });
    }
    const noteDetail = "NoteDetail"
    const clickRow = (item) => {
        navigation.navigate(noteDetail, {note: item})
    }

    const mapView = "ViewTheMap"
    const clickMap = () => {
      navigation.navigate(mapView, {notes:notes})
  }

    
    return (
        <View style={styles.container}>
            <View style={styles.appheader}>
                <Text>This is My Notebook</Text>
            </View>
            <View>
                <Button title='Load Notes' onPress={readDB}/>
            </View>
            {/* <Button title='Map' onPress={clickMap}/> */}            
            {/* <StatusBar style="auto" /> */}
            <View>
                <FlatList
                    data={notes}
                    renderItem={({item}) => 
                    <Button style={styles.item} 
                        title={item.text.substring(0,30)} 
                        onPress={() => clickRow(item)}/>  
                    }
                />
            </View>
            <View>
                <Button style={styles.addnotebutton} title='New Note' onPress={addNote}/>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      marginTop:20,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      padding: 10,
      fontSize: 11,
      height: 44,
      backgroundColor: "#68c",
      borderColor: "#944",
      width:'100%',      
    },
    imagePreview:{
      width:'100%',
      height:150,
      alignItems:'center',
      backgroundColor: "#933"
    }, 
    image:{
      width:'100%',
      height:'100%'
    },
    appheader:{
        width:'100%',
        height:50,
        textAlign: 'center',
        fontSize: 150,
        fontWeight: 200
    },
    addnotebutton:{
        backgroundColor: 'red'
    }
  });


  export default WelcomeScreen;