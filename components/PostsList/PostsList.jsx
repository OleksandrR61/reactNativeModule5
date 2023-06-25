import { ScrollView } from 'react-native';

import { PostsListItem } from '../PostsListItem/PostsListItem';

export const PostsList = ({posts, screen, style, navigation}) => <ScrollView style={{
    paddingHorizontal: 16,
    paddingBottom: 43,
    ...style
}}>
    {posts.map((post) => <PostsListItem
        key={post.id}
        post={post}
        screen={screen}
        navigation={navigation}
    />)}
</ScrollView>;