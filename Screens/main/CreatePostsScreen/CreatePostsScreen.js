import { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Keyboard } from "react-native";
import * as Location from "expo-location";

import { PostsContainer, Form, FormInputImg, FormInput, BtnPrime } from "../../../components";

const CreatePostsScreen = ({navigation}) => {
    const [ foto, setFoto ] = useState(null);
    const [ title, setTitle ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ hasLocationPermission, setHasLocationPermission ] = useState(false);
    const [ isTrashBtnVisible, setIsTrashBtnVisible ] = useState(true);

    useEffect(() => {
        const hideTrashBtn = Keyboard.addListener('keyboardDidShow', () => {
          setIsTrashBtnVisible(false);
        });
        const showTrashBtn = Keyboard.addListener('keyboardDidHide', () => {
          setIsTrashBtnVisible(true);
        });

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            
            if (status !== "granted") {
              console.log("Permission to access location was denied");
            };

            setHasLocationPermission(status === "granted");
        })();
    
        return () => {
          showTrashBtn.remove();
          hideTrashBtn.remove();
        };
    }, []);

    const handleSubmit = async () => {
        const coordinate = await Location.getCurrentPositionAsync();
        console.log(coordinate);
        
        navigation.navigate("PostsScreen", {
            post: {
                img: foto,
                title,
                location: {
                    title: location,
                    latitude: hasLocationPermission ? coordinate.coords.latitude : 0,
                    longitude: hasLocationPermission ? coordinate.coords.longitude : 0,
                },
            },
        })
    };

    const handleReset = () => {
        setFoto(null);
        setTitle("");
        setLocation("");
    };

    const isBtnDisabled = !foto || !title || !location;

    return (<>
        <PostsContainer>
            <Form style={{paddingHorizontal: 0, paddingBottom: 0,}}>
                <FormInputImg value={foto} setValue={setFoto} />
                <FormInput
                    placeholder={"Назва..."}
                    value={title}
                    onChangeText={setTitle}
                    style={{...styles.input, fontFamily: title ? "Roboto-Medium" : "Roboto-Regular"}}
                />
                <View style={styles.inputContainer}>
                    <Image source={require('../../../assets/img/mapPin.png')} style={styles.inputLogo} />
                    <FormInput
                        placeholder={"Місцевість..."}
                        value={location}
                        onChangeText={setLocation}
                        style={{...styles.input, ...styles.inputLocation}}/>
                </View>
                <BtnPrime
                    onPress={handleSubmit}
                    disabled={isBtnDisabled}
                    style={isBtnDisabled
                        ? {...styles.btnDisabled, marginBottom: 93}
                        : {marginBottom: 93}
                    }
                >
                    <Text style={isBtnDisabled && styles.textBtnDisabled}>Опубліковати</Text>
                </BtnPrime>
            </Form>
        </PostsContainer>
        {isTrashBtnVisible &&
            <View style={styles.trashBtnContainer}>
                <TouchableOpacity style={styles.trashBtn} activeOpacity={0.8} onPress={handleReset}>
                    <Image source={require('../../../assets/img/trash.png')} style={styles.trashBtnImg} />
                </TouchableOpacity>
            </View>
        }
    </>);
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
    input: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        paddingHorizontal: 0,

        borderBottomWidth: 1,
    },
    inputContainer: {
        position: "relative",
        marginBottom: 32,
    },
    inputLocation: {
        paddingLeft: 28,
        marginBottom: 0, 
    },
    inputLogo: {
        height: 18,
        width: 18,
        position: "absolute",
        top: 14,
        left: 4,
    },
    btnDisabled: {
        backgroundColor: "#F6F6F6",
    },
    textBtnDisabled: {
        color: "#BDBDBD",
    },
    trashBtnContainer: {
        position: "absolute",
        backgroundColor: "#FFFFFF",
        height: 83,
        width: "100%",
        bottom: 0,
        paddingTop: 9,
    },
    trashBtn: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 40,
        width: 70,
        backgroundColor: "#F6F6F6",
        borderRadius: 20,
        marginBottom: 34,
    },
    trashBtnImg: {
        height: 24,
        width: 24,
    },
});