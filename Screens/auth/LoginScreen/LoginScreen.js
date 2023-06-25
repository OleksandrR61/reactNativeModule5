import { useState } from "react";
import { Keyboard, View, Text } from "react-native";

import {
    Container,
    InnerContainer,
    PageHeader,
    Form,
    FormInput,
    FormSecretInput,
    BtnPrime,
    BtnAdditional,
} from "../../../components";

const INITIALSTATE = {
    EMAIL: '',
    PASSWORD: '',
};

const LoginScreen = ({navigation, route}) => {
    const [ email, setEmail ] = useState(INITIALSTATE.EMAIL);
    const [ password, setPassword ] = useState(INITIALSTATE.PASSWORD);

    const handleSubmit = () => {
        console.log({email, password});
        setEmail(INITIALSTATE.EMAIL);
        setPassword(INITIALSTATE.PASSWORD);
        Keyboard.dismiss();
        route.params.handleSubmit();
    };

    return (
        <Container>
            <InnerContainer>
                <PageHeader style={{paddingTop: 32}}>Увійти</PageHeader>
                <Form style={{paddingBottom: 132}}>
                    <FormInput
                        placeholder='Адреса електронної пошти'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={value => setEmail(value)}
                    />
                    <FormSecretInput
                        placeholder='Пароль'
                        value={password}
                        onChangeText={value => setPassword(value)}
                    />
                    <BtnPrime onPress={handleSubmit}>Увійти</BtnPrime>
                    <View style={{
                        marginTop: 16,
                        flex: 1,
                        flexDirection: "row",
                        alignSelf: 'center',
                    }}>
                        <Text  style={{
                            fontFamily: "Roboto-Regular",
                            fontSize: 16,
                            lineHeight: 19,
                            color: '#1B4371'                            
                        }}>
                            Немає акаунту?{" "}
                        </Text>
                        <BtnAdditional
                            styleText={{textDecorationLine: "underline"}}
                            onPress={() => navigation.navigate("RegistrationScreen")}
                        >
                            Зареєструватися
                        </BtnAdditional>
                    </View>
                </Form>
            </InnerContainer>
        </Container>
    );
};

export default LoginScreen;