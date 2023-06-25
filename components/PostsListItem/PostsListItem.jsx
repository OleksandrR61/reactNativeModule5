import { View, StyleSheet, Image, Text } from "react-native";

import { PostImage } from "../PostImage/PostImage";
import { BtnAdditionalImg } from "../BtnAdditionalImg/BtnAdditionalImg";

export const PostsListItem = ({post, screen, navigation}) => <View style={styles.container}>
    <PostImage source={post.img} />
    <Text style={styles.title}>{post.title}</Text>
    <View style={styles.details}>
        <View style={styles.comment}>
            <BtnAdditionalImg
                source={screen === "profile"
                    ? require('../../assets/img/shape.png')
                    : require('../../assets/img/message.png')
                }
                styleBtn={{position: "relative"}}
                styleImg={styles.commentImg}
                onPress={() => navigation.navigate("CommentsScreen", {
                    img: post.img,
                    comments: post.comments,
                })}
            />
            <Text style={{
                ...styles.commentCount,
                color: screen === "profile" ? "#212121" : "#BDBDBD"
            }}>{post.comments.length}</Text>
            {screen === "profile" && <>
                <Image
                    source={require('../../assets/img/thumbsUp.png')}
                    style={{
                        ...styles.commentImg,
                        marginLeft: 24
                    }}
                />
                <Text style={{...styles.commentCount, color: "#212121"}}>{post.likes}</Text></>
            }
        </View>
        <View style={styles.comment}>
            <BtnAdditionalImg
                source={require('../../assets/img/mapPin.png')}
                styleBtn={{position: "relative"}}
                styleImg={styles.commentImg}
                onPress={() => navigation.navigate("MapScreen", {
                    ...post.location,
                    title: post.title}
                )}
            />
            <Text style={styles.location}>
                {screen === "profile" 
                    ? post.location.title.split(",").reverse()[0]
                    : post.location.title
                }
            </Text>
        </View>
    </View>
</View>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 32,
    },
    title: {
        marginBottom: 8,
        fontFamily: "Roboto-Medium",
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
    },
    details: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    comment: {
        flexDirection: "row",
    },
    commentImg: {
        height: 18,
        width: 18,
        resizeMode: "contain",
    },
    commentCount: {
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        marginLeft: 9,        
    },
    location: {
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        textDecorationLine: "underline",
        color: "#212121",
    }
});