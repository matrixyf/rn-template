/*
 * @Author: Hong.Zhang
 * @Date: 2022-09-05 18:28:48
 * @Description:
 */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function HomeScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <Text onPress={() => {
        navigation.navigate('Counter');
      }}>
        Home Screen
      </Text>
    </View>
  );
}
