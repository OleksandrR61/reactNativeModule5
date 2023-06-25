import { Image, Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const PostImage = ({source}) => <Image source={{uri: source}} style={styles.img}/>

const styles = StyleSheet.create({
    img: {
        marginBottom: 8,
        resizeMode: "cover",
        borderRadius: 8,
        overflow: "hidden",
        width: windowWidth - 32,
        height: 240,
    },
})