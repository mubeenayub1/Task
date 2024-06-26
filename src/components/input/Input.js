import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {Icon} from '@rneui/themed';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../screens/auth/signin/styles';
const Input = ({
  label,
  iconName,
  error,
  password,
  withNotice,
  iconType,
  onChangeText,
  text,
  number,
  width,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View
      style={{
        backgroundColor: '#EEEEEE',
        height: 60,
        width: '100%',
        borderRadius: 30,
        marginTop: 10,
      }}>
      <Text style={style.label}>{label}</Text>

      <View style={style.inputContainer}>
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          onChangeText={onChangeText}
          style={{
            color: Theme.colors.textColor,
            fontSize: 12,
            fontFamily: Theme.fontFamily.medium,
            width: '90%',
            paddingLeft: 20,
          }}
          {...props}
        />
        {password && (
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color={'#B2B2B2'}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginLeft: 20,
    fontSize: 10,
    color: 'black',
    marginTop: 10,
    fontFamily: Theme.fontFamily.medium,
  },
  inputContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',

    bottom: 10,
  },
});

export default Input;
