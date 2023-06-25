import { StyleSheet, TouchableWithoutFeedback, ImageBackground, Keyboard, View } from "react-native";

export const Container = ({children}) => <View
    style={styles.container}
>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
            source={require('../../assets/img/photoBG.jpg')}
            style={styles.imageBG}
        >
            {children}
        </ImageBackground>
    </TouchableWithoutFeedback>
</View>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    imageBG: {
        flex: 1,
        justifyContent: "flex-end",

        resizeMode: 'cover',
        objectFit: 'cover',
    },
});