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
    ProfileAvatar,
} from "../../../components";

const INITIALSTATE = {
    LOGIN: '',
    EMAIL: '',
    PASSWORD: '',
};

const RegistrationScreen = ({navigation, route}) => {
    const [ login, setLogin ] = useState(INITIALSTATE.LOGIN);
    const [ email, setEmail ] = useState(INITIALSTATE.EMAIL);
    const [ password, setPassword ] = useState(INITIALSTATE.PASSWORD);

    const handleSubmit = () => {
        console.log({login, email, password});
        setLogin(INITIALSTATE.LOGIN);
        setEmail(INITIALSTATE.EMAIL);
        setPassword(INITIALSTATE.PASSWORD);
        Keyboard.dismiss();
        route.params.handleSubmit();
    };

    return (
        <Container>
            <InnerContainer style={{paddingTop: 60}}>
                <ProfileAvatar source={require('../../../assets/img/userExample.jpg')} />
                <PageHeader>Реєстрація</PageHeader>
                <Form>
                    <FormInput
                        placeholder='Логін'
                        value={login}
                        onChangeText={value => setLogin(value)}
                    />
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
                    <BtnPrime onPress={handleSubmit}>Зареєстуватися</BtnPrime>
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
                            Вже є акаунт?{" "}
                        </Text>
                        <BtnAdditional
                            onPress={() => navigation.navigate("LoginScreen")}
                        >
                            Увійти
                        </BtnAdditional>
                    </View>
                </Form>
            </InnerContainer>
        </Container>
    );
};

export default RegistrationScreen;