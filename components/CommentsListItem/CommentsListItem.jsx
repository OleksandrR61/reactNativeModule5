import { Text, View, StyleSheet, Image } from "react-native";

export const CommentsListItem = ({comment, isOdd}) => <View
        style={{...styles.container, flexDirection: isOdd ? "row" : "row-reverse"}}
    >
        <Image
            source={comment.author}
            style={{...styles.avatar, marginRight: isOdd ? 16 : 0, marginLeft: isOdd ? 0 : 16}}
        />
        <View
            style={{...styles.innerContainer,
                borderTopLeftRadius: isOdd ? 0 : 6,
                borderTopRightRadius: isOdd ? 6 : 0
            }}
        >
            <Text style={styles.comment}>{comment.text}</Text>
            <Text style={{...styles.date, textAlign: isOdd ? "right" : "left"}}>{comment.date}</Text>
        </View>
    </View>;

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    avatar: {
        height: 28,
        width: 28,
        borderRadius: 14,
        overflow: "hidden",
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        borderRadius: 6,
        borderTopLeftRadius: 0,
    },
    comment: {
        marginBottom: 8,
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 18,
        color: "#212121",
    },
    date: {
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 12,
        color: "#BDBDBD",
    },
});