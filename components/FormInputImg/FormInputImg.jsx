import { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet, ImageBackground } from "react-native";
import { Camera } from 'expo-camera';

export const FormInputImg = ({value, setValue}) => {
    const [ hasCameraPermission, setHasCameraPermission ] = useState(false);
    const [ cameraRef, setCameraRef ] = useState(null);
    
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access camera was denied");
            };

            setHasCameraPermission(status === "granted");
        })();
    }, []);

    const shootFoto = async () => {
        const { uri } = await cameraRef.takePictureAsync();
        
        setValue(uri);
    }

    return <View style={styles.container}>
        {value
            ? <>
                <ImageBackground source={{uri: value}} style={styles.contentBlock}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            ...styles.tinyImgContainer,
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                        }}
                        onPress={() => setValue(null)}
                    >
                        <Image style={styles.tinyImg} source={require('../../assets/img/camera.png')} />
                    </TouchableOpacity>
                </ImageBackground> 
                <Text style={styles.text} onPress={() => setValue(null)}>
                    Редагувати фото
                </Text>
            </>
            : <>
                <View style={styles.contentBlock}>
                    <Camera
                        style={styles.camera}
                        type={Camera.Constants.Type.back}
                        ref={(ref) => {
                            setCameraRef(ref);
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{
                                ...styles.tinyImgContainer,
                                backgroundColor: "#FFFFFF"
                            }}
                            onPress={shootFoto}
                        >
                            <Image style={styles.tinyImg} source={require('../../assets/img/camera.png')} />
                        </TouchableOpacity>
                    </Camera>
                </View>
                <Text style={styles.text} onPress={shootFoto}>
                    Завантажте фото
                </Text>
            </>
        }
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    contentBlock: {
        justifyContent: "center",
        alignItems: "center",

        height: 237,
        marginBottom: 8,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,

        overflow: "hidden",
    },
    tinyImgContainer: {
        justifyContent: "center",
        alignItems: "center",
        
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    tinyImg: {
        width: 24,
        height: 24,
    },
    text: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,

        color: "#BDBDBD",
    },
    camera: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});