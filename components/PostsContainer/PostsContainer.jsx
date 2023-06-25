import {View, TouchableWithoutFeedback, Keyboard, StyleSheet} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const PostsContainer = ({children}) => <View style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>
            {children}
        </KeyboardAwareScrollView>        
    </TouchableWithoutFeedback>
</View>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",

        paddingTop: 32,
        paddingBottom: 16,
        paddingHorizontal: 16,
    },
});