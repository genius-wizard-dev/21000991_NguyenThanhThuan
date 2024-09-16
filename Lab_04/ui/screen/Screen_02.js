import { View, Text, StyleSheet, Pressable, Image, TextInput} from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'    

export default function Screen_02() {


    const starArray = Array(5).fill(0)
    const [selectedImageName, setSelectedImageName] = useState(null)


    const pickImageFromGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled) {


            const imageName = result.assets[0].uri.split('/').pop().split('.')[0]
            setSelectedImageName(imageName)
        }
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/usb.png')} style={styles.imageStyle} />
            <Text style={styles.headerText}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
        </View>
        <View style={styles.feedbackContainer}>
            <Text style={styles.feedbackTitle}>Cực kỳ hài lòng</Text>

            <View style={styles.starRating}>{starArray.map((item, index) => (
                <Image key={index} source={require('../assets/start.png')}/>
            ))}</View>


            <Pressable style={styles.uploadButton} onPress={pickImageFromGallery}>
                <Image source={require('../assets/camera.png')} style={styles.cameraIcon} />
                <Text style={styles.uploadText}>Thêm hình ảnh</Text>
            </Pressable>


            {selectedImageName && <Text>Image name: {selectedImageName}</Text>}
            <View style={styles.feedbackInputContainer}>
                <TextInput

                    style={styles.feedbackInput}
                    multiline={true}
                    placeholder="Enter your feedback here"
                />
            </View>

            <Pressable style={styles.submitButton}><Text style={styles.submitButtonText}>Gửi</Text></Pressable>
        </View>
    </View>
  )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 30,
        paddingVertical: 30,
        width: '100%',
        gap: 50,
        color: 'white',
    },
    header: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        color: 'white',
        paddingHorizontal: 30,
        gap: 20
    },
    headerText: {
        fontSize: 16,
        fontWeight:"bold"
    },
    feedbackTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    feedbackContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        marginTop: 30,
        gap: 20,
    },

    starRating: {
        flexDirection: 'row',
        gap: 5,
    }, 
    uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        borderWidth: 1,
        borderColor: "blue",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        width: '100%',
        marginTop: 10,
    },
    uploadText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    feedbackInputContainer: {
        flex:1,
        width: '100%',
        borderWidth: 1,
        borderColor: "blue",
        justifyContent: 'center',
        alignItems: 'center',
    },

    feedbackInput: {
        textAlignVertical: 'top',
        width: '100%',
        height: "100%",
        padding: 10,
    },

    submitButton: {
        width: '100%',
        height:50,
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    submitButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
})