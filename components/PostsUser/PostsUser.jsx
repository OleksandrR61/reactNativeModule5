import { View, StyleSheet, ImageBackground, Text } from "react-native";

export const PostsUser = ({ user: {avatar, name, email} }) => <View style={styles.container}>
    <ImageBackground
            source={avatar}
            style={styles.imageBG}
    />
    <View style={styles.title}>
        <Text style={styles.titleName}>{name}</Text>
        <Text style={styles.titleEmail}>{email}</Text>
    </View>
</View>;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60,

        marginBottom: 32,
    },
    imageBG: {
        height: 60,
        width: 60,
        borderRadius: 16,
        marginRight: 16,

        resizeMode: 'cover',
        objectFit: 'cover',
        overflow: "hidden",
    },
    title: {
        justifyContent: "center",
    },
    titleName: {
        fontFamily: "Roboto-Bold",
        fontSize: 13,
        lineHeight: 15,
        color: "#212121",
    },
    titleEmail: {
        fontFamily: "Roboto-Regular",
        fontSize: 11,
        lineHeight: 13,
        color: "rgba(33, 33, 33, 0.8)",
    }
});