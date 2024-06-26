import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import Theme from '../../Theme/Theme';
import {Icon} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

export default function Button({
  isLoading,
  title,
  onPress,
  filled,
  style,
  rounded,
  disabled,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.Button,
        {...style},
        rounded && {borderRadius: 8},
        disabled && {backgroundColor: Theme.colors.grey},
      ]}
      onPress={onPress}
      disabled={disabled}>
          <LinearGradient
        colors={['#C390CB', "#6079EF"]}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 30,
          position: 'absolute',
        }}
        start={{x: 0.0, y: 1}}
        end={{x: 0.75, y: 1}}></LinearGradient>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.textButton}>{title}</Text>
      )}
   
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  Button: {
    height: 60,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Theme.colors.primaryColor,
    borderRadius: 30,
  },
  textButton: {
    color: 'white',
    fontFamily: Theme.fontFamily.bold,
    fontSize: 18,
    // marginRight: 20,
  },
});
