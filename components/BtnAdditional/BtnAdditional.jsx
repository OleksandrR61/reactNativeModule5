import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const BtnAdditional = ({style = {}, styleText = {}, children, onPress}) =>
    <TouchableOpacity style={{...style}} onPress={onPress}>
        <Text style={{...styles.btnText, ...styleText}}>{children}</Text>
    </TouchableOpacity>
;

const styles = StyleSheet.create({
    btnText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
    },
});