/*
 * @Author: Hong.Zhang
 * @Date: 2022-09-05 18:28:48
 * @Description:
 */
import { Button } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { Toast } from '@ant-design/react-native';

import styles from './styles';

export default function HomeScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <Text>
        Home Screen
      </Text>
      <Button type="primary" onPress={() => {
        navigation.navigate('Counter');
        Toast.info('This is a toast tips');
      }}>Go To Counter Page</Button>
    </View>
  );
}
