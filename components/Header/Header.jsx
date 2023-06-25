import { View, Text, StyleSheet } from 'react-native';
import { BtnAdditionalImg } from '../BtnAdditionalImg/BtnAdditionalImg';

export const Header = ({title, logOut, back}) => <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {logOut && <BtnAdditionalImg
        source={require('../../assets/img/logOut.png')}
        styleBtn={styles.logOutBtn}
        styleImg={styles.logOutBtnImg}
        onPress={logOut}
    />}
    {back && <BtnAdditionalImg
        source={require('../../assets/img/arrowLeft.png')}
        styleBtn={styles.backBtn}
        styleImg={styles.logOutBtnImg}
        onPress={back}
    />}
</View>;

const styles = StyleSheet.create({
    container: {
        height: 88,
        position: "relative",
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowColor: "rgba(0, 0, 0, 0.3)",
    },
    title: {
        fontFamily: "Roboto-Medium",
        fontWeight: "500",
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.4,
        alignSelf: "center",
        position: "absolute",
        bottom: 11,
    },
    logOutBtn: {
        bottom: 10,
        right: 16,
    },
    logOutBtnImg: {
        height: 24,
        width: 24,
    },
    backBtn: {
        bottom: 10,
        left: 16,
    },
})