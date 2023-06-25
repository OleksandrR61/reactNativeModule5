import { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Keyboard } from "react-native";

import { PostsContainer, Form, FormInputImg, FormInput, BtnPrime } from "../../../components";

const CreatePostsScreen = () => {
    const [ foto, setFoto ] = useState(null);
    const [ title, setTitle ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ isTrashBtnVisible, setIsTrashBtnVisible ] = useState(true);

    useEffect(() => {
        const hideTrashBtn = Keyboard.addListener('keyboardDidShow', () => {
          setIsTrashBtnVisible(false);
        });
        const showTrashBtn = Keyboard.addListener('keyboardDidHide', () => {
          setIsTrashBtnVisible(true);
        });
    
        return () => {
          showTrashBtn.remove();
          hideTrashBtn.remove();
        };
    }, []);

    const handleSubmit = () => {
        console.log("Create post");
    };

    const handleReset = () => {
        setFoto(null);
        setTitle("");
        setLocation("");
    };

    const isBtnDisabled = !foto || !title || !location;

    return (<><PostsContainer>
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
                style={isBtnDisabled && {...styles.btnDisabled}}
            >
                <Text style={isBtnDisabled && styles.textBtnDisabled}>Опубліковати</Text>
            </BtnPrime>
        </Form>
    </PostsContainer>
    {isTrashBtnVisible && <TouchableOpacity style={styles.trashBtn} activeOpacity={0.8} onPress={handleReset}>
        <Image source={require('../../../assets/img/trash.png')} style={styles.trashBtnImg} />
    </TouchableOpacity>}</>);
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
        backgroundColor: "#F6F6F6"
    },
    textBtnDisabled: {
        color: "#BDBDBD",
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