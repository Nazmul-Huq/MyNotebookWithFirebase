import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image} from 'react-native'
import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker'
//import {firebase} from '../firebase/firebase_config'

//https://www.youtube.com/watch?v=S8AGpWn9qrM 4.53

const UploadScreen = () => {
    // const [image, setImage] = useState(null);
    // const [uploading, setUploading] = useState(false);

    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing:true,
    //         aspect: [4,3],
    //         quality:1,
    //     });

    //     const source = {uri: result.uri};
    //     console.log(source);
    //     setImage(source);

    // }

    // const uploadImage = async() => {
    //     setUploading(true);
    //     const responsse = await fetch(image.uri)
    //     const blob = await responsse.blob();
    //     const fileName = image.uri.substring(image.uri.lastIndexOf('/')+1);
    //     var ref = firebase.storage().ref().child(filename).put(blob);

    //     try{
    //       await ref;  
    //     } catch(e){
    //         console.log(e)
    //     }

    //     setUploading(false);
    //     Alert.alert(
    //         'Photo Uploaded..!!'
    //     )

    //     setImage(null);

    // }

    return(
        <View>
            <TouchableOpacity style={style.selectButton} onPress={pickImage}>
                <Text style={style.buttonText}>Pick an Image</Text>
            </TouchableOpacity> 
        </View>
        // {/* <SafeAreaView style={style.container}>
          
        //      <TouchableOpacity style={style.selectButton} onPress={pickImage}>
        //         <Text style={style.buttonText}>Pick an Image</Text>
        //     </TouchableOpacity> 
        //     <View style={style.imageContainer}>
        //         {image && <Image source={{uri:image.uri}} style={{width:300, height:300}} />}
        //     </View>
        //     <TouchableOpacity style={style.uploadButton} onPress={uploadImage}>
        //         <Text onPress={style.buttonText}>
        //             Upload Image
        //         </Text>
        //     </TouchableOpacity> 
        //  </SafeAreaView>*/}
    )
}

export default UploadScreen

const styles = StyleSheet.create({
    container:{

    },
    selectButton:{
        width: 200,
        height: 200,
        backgroundColor: 'red',
    }

})

