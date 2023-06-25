import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const InnerContainer = ({children, style}) =><View> 
    <KeyboardAwareScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={style}>
        <View style={styles.innerContainer}>
            {children}
        </View>
    </KeyboardAwareScrollView>
</View>;

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
});