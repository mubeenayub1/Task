import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Theme from '../../Theme/Theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type SubmitJobProps = {
  navigation: NativeStackNavigationProp<any, any>;
};

const SubmitJob: React.FC<SubmitJobProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Theme.colors.primaryColor}
      />
      <Image
        source={require('../../assets/icons/icon.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Your Job is Posted!</Text>
      <Text style={styles.description}>
        Congratulations! Your job has been successfully posted and is now
        visible to potential candidates. Good luck in your recruitment process!
      </Text>
      <TouchableOpacity
        onPress={() => navigation.replace('createJob')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Manage Jobs</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 120,
    width: 120,
  },
  title: {
    color: Theme.colors.whiteColor,
    fontSize: 24,
    fontFamily: Theme.fontFamily.medium,
    marginTop: 30,
  },
  description: {
    color: Theme.colors.whiteColor,
    fontSize: 14,
    fontFamily: Theme.fontFamily.regular,
    width: '80%',
    textAlign: 'center',
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    backgroundColor: Theme.colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: Theme.colors.primaryColor,
    fontSize: 16,
    fontFamily: Theme.fontFamily.medium,
  },
});

export default SubmitJob;