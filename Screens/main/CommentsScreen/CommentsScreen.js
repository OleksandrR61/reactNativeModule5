import { useState } from "react";
import { View, TouchableOpacity, Keyboard, ImageBackground } from "react-native";
import { PostsContainer, PostImage, CommentsList, FormInput } from "../../../components/";

const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

const CommentsScreen = ({route}) => {
    const [ comments, setComments ] = useState(route.params.comments);
    const [ text, setText ] = useState("");
    
    const handlePress = () => {
        if (text){
            const dateNow = new Date();
            
            setComments(comments => [...comments, {
                id: comments.length,
                author: require('../../../assets/img/userExample.jpg'),
                text,
                date: `${dateNow.getDate() + 1} ${months[dateNow.getMonth()]}, ${dateNow.getFullYear()} | ${dateNow.getHours()}:${dateNow.getMinutes() < 10 ? "0" + dateNow.getMinutes() : dateNow.getMinutes()}`
            }]);
            setText("");
            
            Keyboard.dismiss();
        };
    };

    return <PostsContainer>
        <PostImage
            source={route.params.img}
        />
        <CommentsList comments={comments} />
        <View style={{position: "relative"}}>
            <FormInput
                placeholder={"Коментувати..."}
                value={text}
                onChangeText={setText}
                onEndEditing={handlePress}
                style={{
                    borderRadius: 100,
                    fontFamily: "Inter-Medium",
                    fontWeight: "500",
                }}
            />
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handlePress}
                style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 34,
                    width: 34,
                    borderRadius: 17,
                    backgroundColor: "#FF6C00",
                    position: "absolute",
                    top: 8,
                    right: 8,
                }}
            >
                <ImageBackground
                    source={require('../../../assets/img/vector.png')}
                    style={{
                        width: 10,
                        height: 14,
                    }}
                />
            </TouchableOpacity>
        </View>
    </PostsContainer>;
};

export default CommentsScreen;