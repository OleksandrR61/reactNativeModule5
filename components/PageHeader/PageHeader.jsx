import { StyleSheet, Text } from "react-native";

export const PageHeader = ({style, children}) => <Text style={{...styles.pageHeader, ...style}}>
    {children}
</Text>;

const styles = StyleSheet.create({
    pageHeader: {
        paddingTop: 92,
        paddingBottom: 33,

        fontFamily:"Roboto-Medium",
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.16,
        textAlign: 'center',
        color: '#212121',
    },
});