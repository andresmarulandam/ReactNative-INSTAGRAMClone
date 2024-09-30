import { Image, Text, View } from 'react-native';
import posts from '@/assets/data/post.json';

const post1 = posts[0];

export default function StoriesFeed() {
  return (
    <View className=" m-3 ">
      <Image
        source={{ uri: post1.user.image_url }}
        className="w-20 aspect-square rounded-full"
      />
      <Text>Stories</Text>
    </View>
  );
}
