import { Image, Text, View } from 'react-native';

import PostIcons from './PostIcons';
import { Ionicons } from '@expo/vector-icons';

export default function PostListItem({ post }) {
  return (
    <View>
      {/*MainPost*/}
      <View className="p-2 flex-row items-center bg-white ">
        <View className=" flex-row items-center gap-2 flex-1">
          <Image
            source={{ uri: post.user.image_url }}
            className="w-12 aspect-square rounded-full"
          />
          <Text className="font-semibold ">{post.user.username}</Text>
        </View>
        <Ionicons name="ellipsis-vertical-sharp" size={20} color="black" />
      </View>

      <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
      <PostIcons />
    </View>
  );
}
