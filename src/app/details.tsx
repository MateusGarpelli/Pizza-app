import { Feather } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Details() {
  

  return (
    <View className={styles.container}>
      <View className={styles.main}>
      </View>
    </View>
  );
}

const styles = {
  backButton: 'flex-row',
  backButtonText: 'text-blue-500 ml-1',
  container: 'flex-1 p-6',
  main: 'flex-1 max-w-[960]',
  title: 'text-[64px] font-bold',
  subtitle: 'text-4xl text-gray-700',
};
