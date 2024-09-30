import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { View } from 'react-native';

export default function PostIcons() {
  return (
    <View className="flex-row gap-3 p-3">
      <FontAwesome name="heart-o" size={24} />
      <Ionicons name="chatbubble-outline" size={24} />
      <Feather name="send" size={24} />

      <Feather name="bookmark" size={24} className="ml-auto" />
    </View>
  );
}
