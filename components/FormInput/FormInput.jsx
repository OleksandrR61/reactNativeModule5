import { StyleSheet, TextInput } from "react-native";

export const FormInput = ({
    placeholder,
    keyboardType = 'default',
    value,
    secureTextEntry = false,
    onChangeText,
    onEndEditing,
    style
}) => <TextInput
    style={{...styles.input, ...style}}
    placeholder={placeholder}
    placeholderTextColor='#BDBDBD'
    keyboardType={keyboardType}
    value={value}
    secureTextEntry={secureTextEntry}
    onChangeText={onChangeText}
    onEndEditing={onEndEditing}
/>;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E8E8E8',
        borderRadius: 8,

        marginBottom: 16,
        height: 50,
        padding: 16,

        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
    },
});