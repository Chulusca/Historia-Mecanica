import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-blue-50 justify-center items-center">
      <Text className="text-lg font-bold text-blue-600">
        Welcome to the Home Screen!
      </Text>
    </View>
  );
}