// import React, {useState} from 'react';
// import {SafeAreaView, View, Text} from 'react-native';

// const ReviewJob = () => {
//   return (
//     <View style={{flex: 1}}>
//       <Text>Hello World</Text>
//     </View>
//   );
// };

// export default ReviewJob;
import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Theme from '../../Theme/Theme';
import {Dropdown} from 'react-native-element-dropdown';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const ReviewJob = ({navigation, route}) => {
  const data = route?.params?.data;
  console.log('response from params data ===', data);

  return (
    <View style={{flex: 1, backgroundColor: Theme.colors.whiteColor}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: Theme.colors.whiteColor,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <Icon
          name="chevron-small-left"
          type="entypo"
          color={Theme.colors.textColor}
          size={28}
        />
        <Text
          style={{
            color: Theme.colors.textColor,
            fontSize: 17,
            fontFamily: Theme.fontFamily.medium,
            marginLeft: 10,
          }}>
          Post a Job
        </Text>
      </View>
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: '#F2F2F3',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            height: 30,
          }}>
          <View
            style={{
              height: 15,
              width: '5%',
              borderRadius: 20,

              backgroundColor: '#7A7C85',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="check" type="antdesign" color={'white'} size={10} />
          </View>
          <View
            style={{
              height: 15,
              width: '26%',

              backgroundColor: '#E0E0E0',
            }}></View>
          <View
            style={{
              height: 15,
              width: '5%',
              borderRadius: 20,

              backgroundColor: '#7A7C85',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="check" type="antdesign" color={'white'} size={10} />
          </View>
          <View
            style={{
              height: 15,
              width: '26%',

              backgroundColor: '#E0E0E0',
            }}></View>

          <View
            style={{
              height: 15,
              width: '7%',
              borderRadius: 10,
              backgroundColor: Theme.colors.primaryColor,
            }}></View>
          <View
            style={{
              height: 1.5,
              width: '25%',
              borderRadius: 10,
              backgroundColor: '#AFB0B6',
            }}></View>

          <View
            style={{
              height: 15,
              width: '5%',
              borderRadius: 10,
              borderWidth: 1.5,
              borderColor: '#AFB0B6',
            }}></View>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 20,
          }}>
          <Text
            style={{
              fontSize: 10,
              fontFamily: Theme.fontFamily.regular,
              color: '#95969D',
            }}>
            Job Detail
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: Theme.fontFamily.regular,
              color: '#95969D',
            }}>
            Post Detail
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: Theme.fontFamily.regular,
              color: Theme.colors.primaryColor,
            }}>
            Preview
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: Theme.fontFamily.regular,
              color: '#95969D',
            }}>
            Payment
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10, paddingTop: 10}}>
        <Text
          style={{
            fontSize: 13,
            fontFamily: Theme.fontFamily.regular,
            color: '#7A7C85',
            width: '90%',
            alignSelf: 'center',
          }}>
          This is a preview of what your job post will look like to job seekers.
        </Text>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#AFB0B6',
            borderRadius: 10,
            paddingVertical: 10,marginTop:10,
          }}>
          <View
            style={{
              height: 100,
              width: '100%',
              borderBottomColor: '#EFEFEF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: '5%',
              borderBottomWidth: 1,
            }}>
            <Image
              source={require('../../assets/images/post.png')}
              style={{height: 70, width: 70, borderRadius: 10}}
            />
            <View
              style={{height: '100%', width: '72%', justifyContent: 'center'}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '85%'}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      color: Theme.colors.textColor,
                    }}>
                    {data?.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: Theme.fontFamily.regular,
                      color: '#75788D',
                    }}>
                    Kickstar,{' '}
                    <Text style={{color: '#ACAEBE'}}>in Manchester</Text>
                  </Text>
                </View>
                <Icon
                  name="staro"
                  type="antdesign"
                  color={'#DCDDDF'}
                  size={24}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    backgroundColor: '#EBF8FD',
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 8,
                      fontFamily: Theme.fontFamily.medium,
                      color: '#62636A',
                    }}>
                    {data?.skills[0]}
                  </Text>
                </View>
                {data?.skills?.length > 1 && (
                  <View
                    style={{
                      backgroundColor: 'rgba(0, 160, 76, 0.1)',
                      paddingVertical: 5,
                      paddingHorizontal: 7,
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 8,
                        fontFamily: Theme.fontFamily.medium,
                        color: '#62636A',
                      }}>
                      {data?.skills[1]}
                    </Text>
                  </View>
                )}
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: Theme.fontFamily.regular,
                    color: '#75788D',
                  }}>
                  Posted 6 hours ago
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: Theme.colors.textColor,
              fontFamily: Theme.fontFamily.medium,
              fontSize: 15,
              marginLeft: '5%',
              marginBottom: 5,
              marginTop: 10,
            }}>
            Job Description
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
              color: '#7A7C85',
              width: '90%',
              alignSelf: 'center',
            }}>
            {data?.description}
          </Text>
          <Text
            style={{
              color: Theme.colors.textColor,
              fontFamily: Theme.fontFamily.medium,
              fontSize: 15,
              marginLeft: '5%',
              marginBottom: 5,
              marginTop: 10,
            }}>
            Requirements
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Theme.fontFamily.regular,
              color: '#7A7C85',
              width: '90%',
              alignSelf: 'center',
            }}>
            Suspendisse dignissim neque sed lorem mattis tristique. Cras viverra
            elit quis dolor sagittis, sed bibendum nisl consectetur.
            Pellentesque at imperdiet ante. Phasellus id felis eget leo
            scelerisque posuere quis sed est. Nam maximus dui vel quam vehicula,
            eget scelerisque velit lacinia. Quisque sodales eleifend urna. Fusce
            eu efficitur lectus, et fermentum dui.
          </Text>
        </View>
        <View
          style={{
            height: 80,
            width: '100%',
            backgroundColor: Theme.colors.whiteColor,
            borderTopColor: '#AFB0B6',
            borderTopWidth: 1,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('submitJob')}
            style={{
              height: 50,
              width: '90%',
              borderRadius: 10,
              backgroundColor: Theme.colors.primaryColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: Theme.colors.whiteColor,
                fontSize: 16,
                fontFamily: Theme.fontFamily.medium,
              }}>
            Payment
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,

    backgroundColor: '#F2F2F3',
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    height: 250,

    padding: 10,
    textAlignVertical: 'top',
    fontFamily: Theme.fontFamily.regular,
    fontSize: 14,
    color: Theme.colors.textColor,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  wordCounter: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#ADAEAE',
    fontFamily: Theme.fontFamily.regular,
    fontSize: 12,
    // color: isOverLimit ? 'red' : '#000',
  },
});
export default ReviewJob;
