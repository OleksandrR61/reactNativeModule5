import { useState, useEffect } from "react";

import { PostsContainer, PostsUser, PostsList } from "../../../components";

import userExample from "../../../example/userExample";

const PostsScreen = ({route, navigation}) => {
    const [ user, setUser ] = useState(userExample);
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        if (route.params?.post) {
            setPosts(posts => [...posts, {
                ...route.params.post,
                id: posts.length,
                comments: [],
                likes: 0,
            }]);
        };        
    }, []);

    console.log("posts -->> ", posts);

    return <PostsContainer>
        <PostsUser user={user}/>
        <PostsList
            posts={posts}
            screen={"posts"}
            style={{paddingHorizontal: 0}}
            navigation={navigation}
        />
    </PostsContainer>
};

export default PostsScreen;