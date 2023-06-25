import { Container, InnerContainer, PageHeader, ProfileAvatar, BtnAdditionalImg, PostsList } from "../../../components";
import { TouchableOpacity, Image } from 'react-native'

const ProfileScreen = ({route, navigation}) => {
    const { user } = route.params;
    
    return <Container>
    <InnerContainer style={{
        paddingTop: 127,
    }}>
        <ProfileAvatar source={user.avatar} />
        <BtnAdditionalImg
            source={require('../../../assets/img/logOut.png')}
            styleBtn={{
                top: 22,
                right: 16, 
            }}
            styleImg={{
                height: 24,
                width: 24,
            }}
        />
        <PageHeader
            style={{
                fontWeight: "500",
            }}
        >
            {user.name}
        </PageHeader>
        <PostsList
            posts={user.posts}
            screen={"profile"}
            navigation={navigation}
        />
    </InnerContainer>
</Container>
};

export default ProfileScreen;