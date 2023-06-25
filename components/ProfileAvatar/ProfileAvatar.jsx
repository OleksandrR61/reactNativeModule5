import { View, Image, StyleSheet, Dimensions } from "react-native";
import { BtnAdditionalImg } from "../BtnAdditionalImg/BtnAdditionalImg";

const dimensionWidth = Dimensions.get("window").width;

export const ProfileAvatar = ({source}) => <View style={styles.container}>
    <Image source={source} style={styles.avatar}/>
    <BtnAdditionalImg
        source={require('../../assets/img/union.png')}
        styleBtn={styles.button}
        styleImg={styles.byttonImg}
    />
</View>;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: -60,
        width: "100%",
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 16,
        overflow: "hidden",
        alignSelf: "center",
        resizeMode: "cover"
    },
    button: {
        backgroundColor: "#FFFFFF",
        height: 25,
        width: 25,
        borderRadius: 25,
        right: dimensionWidth / 2 - 60 - (25 / 2),
        bottom: 9,
    },
    byttonImg: {
        height: 13,
        width: 13,
    },
});