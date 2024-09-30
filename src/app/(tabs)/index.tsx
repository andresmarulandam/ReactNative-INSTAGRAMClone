import PostListItem from '@/src/components/PostListItem';
import StoriesFeed from '@/src/components/StoriesFeed';
import { FlatList, View } from 'react-native';

import posts from '@/assets/data/post.json';

export default function FeedScreen() {
  return (
    <>
      <StoriesFeed />
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        contentContainerStyle={{
          gap: 3,
          maxWidth: 512,
          width: '100%',
        }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}
