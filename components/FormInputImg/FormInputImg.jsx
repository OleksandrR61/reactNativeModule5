import { View, TouchableOpacity, Image, Text, StyleSheet, ImageBackground } from "react-native";

export const FormInputImg = ({value, setValue}) => <View style={styles.container}>
    <ImageBackground source={value} style={styles.contentBlock}>
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                ...styles.tinyImgContainer,
                backgroundColor: value ? "rgba(255, 255, 255, 0.3)" : "#FFFFFF"
            }}
            onPress={() => setValue(require('../../assets/img/postImgExample1.jpg'))}
        >
            <Image style={styles.tinyImg} source={require('../../assets/img/camera.png')} />
        </TouchableOpacity>
    </ImageBackground> 
    <Text style={styles.text} onPress={() => setValue(require('../../assets/img/postImgExample1.jpg'))}>
        {value ? "Редагувати фото" : "Завантажте фото"}
    </Text>
</View>;

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
});