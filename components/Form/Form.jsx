import { StyleSheet, View } from "react-native";

export const Form = ({style, children}) => <View style={{...styles.form, ...style}}>
    {children}
</View>;

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 16,
        paddingBottom: 66,
    },
});