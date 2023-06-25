import { PostsContainer, PostsUser, PostsList } from "../../../components";

const PostsScreen = ({route, navigation}) => {
    const { user } = route.params;
    
    return <PostsContainer>
        <PostsUser user={user}/>
        <PostsList
            posts={user.posts}
            screen={"posts"}
            style={{paddingHorizontal: 0}}
            navigation={navigation}
        />
    </PostsContainer>
};

export default PostsScreen;