import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { FormInput } from "../FormInput/FormInput";
import { BtnAdditional } from "../BtnAdditional/BtnAdditional";

export const FormSecretInput = ({placeholder, value, onChangeText}) => {
    const [ isSecure, setIsSecure ] = useState(true);

    return <View style={styles.inputContainer}>
        <FormInput
            placeholder={placeholder}
            value={value}
            secureTextEntry={isSecure}
            onChangeText={onChangeText}
        />
        <BtnAdditional
            style={styles.secureBtn}
            onPress={() => setIsSecure(prev => !prev)}
        >
            {isSecure ? "Показати" : "Приховати"}
        </BtnAdditional>
    </View>;
};

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        marginBottom: 43,
    },
    secureBtn: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
});