import { useState } from "react";

import { PostsContainer, PostsUser, PostsList } from "../../../components";

import userExample from "../../../example/userExample";

const PostsScreen = ({route, navigation}) => {
    const [ user, setUser ] = useState(userExample);
    
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