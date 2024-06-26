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
} from 'react-native';
import Theme from '../../Theme/Theme';
import {Dropdown} from 'react-native-element-dropdown';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const data = [
  {label: 'Remote', value: 'Remote'},
  {label: 'Part Time', value: 'Part Time'},
  {label: 'Full Time', value: 'Full Time'},
];
const data1 = [
  {label: 'Intermediate', value: 'Intermediate'},
  {label: 'Bachelor', value: 'Bachelor'},
  {label: 'Masters', value: 'Masters'},
];
const data2 = [
  {label: 'Fresh', value: 'Fresh'},
  {label: 'Junior', value: 'Junior'},
  {label: 'Intermediate', value: 'Intermediate'},
  {label: 'Senior', value: 'Senior'},
];
const CreateJob = ({navigation}) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [jobType, setJobType] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState([]);
  const [inputSkills, setinputSkills] = useState('');

  const addSkill = () => {
    if (inputSkills.trim() !== '' && !skills.includes(inputSkills.trim())) {
      setSkills([...skills, inputSkills.trim()]);
      setinputSkills('');
    }
  };

  const removeSkill = skillToRemove => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };
  const maxWords = 1500;

  const wordCount =
    description.trim() === '' ? 0 : description.trim().split(/\s+/).length;
  const isOverLimit = wordCount > maxWords;

  const handleChangeText = text => {
    const words = text.trim() === '' ? [] : text.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setDescription(text);
    } else {
      setDescription(words.slice(0, maxWords).join(' '));
    }
  };
  const renderItem = item => {
    return (
      <View
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            flex: 1,
            fontSize: 13,
            color: Theme.colors.textColor,
            fontFamily: Theme.fontFamily.regular,
          }}>
          {item.label}
        </Text>
      </View>
    );
  };
  const HandleData = () => {
    if (!title) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Job Title',
        autoClose: 1500,
      });
    } else if (!description) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Job Description',
        autoClose: 1500,
      });
    } else if (skills.length === 0) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Skills',
        autoClose: 1500,
      });
    } else if (!jobType) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Select Job Type',
        autoClose: 1500,
      });
    } else if (!education) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Select Education',
        autoClose: 1500,
      });
    } else if (!experience) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Select Experience Level',
        autoClose: 1500,
      });
    } else {
      const obj = {
        title: title,
        description: description,
        skills: skills,
        jobType: jobType,
        education: education,
        experience: experience,
      };
      navigation.navigate('reviewJob', {data: obj});
    }
  };
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
              width: '7%',
              borderRadius: 10,
              backgroundColor: Theme.colors.primaryColor,
            }}></View>
          <View
            style={{
              height: 1.5,
              width: '26%',
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
          <View
            style={{
              height: 1.5,
              width: '26%',
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
              color: Theme.colors.primaryColor,
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
              color: '#95969D',
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
        contentContainerStyle={{paddingBottom: 50, paddingTop: 10}}>
        <Text
          style={{
            color: Theme.colors.textColor,
            fontFamily: Theme.fontFamily.medium,
            fontSize: 15,
            marginLeft: '5%',
          }}>
          Job Title
        </Text>
        <TextInput
          placeholder="Enter job title"
          placeholderTextColor={'#ADAEAE'}
          value={title}
          onChangeText={setTitle}
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
            paddingHorizontal: '5%',
            color: Theme.colors.textColor,
            fontSize: 14,
            fontFamily: Theme.fontFamily.regular,
            backgroundColor: '#F2F2F3',
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            color: Theme.colors.textColor,
            fontFamily: Theme.fontFamily.medium,
            fontSize: 15,
            marginLeft: '5%',
            marginBottom: 5,
            marginTop: 10,
          }}>
          Description
        </Text>
        <View style={styles.container}>
          <TextInput
            style={[styles.input, isOverLimit && styles.inputError]}
            multiline={true}
            value={description}
            onChangeText={handleChangeText}
            placeholder="Your job description"
            placeholderTextColor={'#ADAEAE'}
          />
          <Text style={styles.wordCounter}>
            {wordCount}/{maxWords}
          </Text>
        </View>
        <Text
          style={{
            color: Theme.colors.textColor,
            fontFamily: Theme.fontFamily.medium,
            fontSize: 15,
            marginLeft: '5%',
            marginBottom: 5,
            marginTop: 20,
          }}>
          Skills
        </Text>
        <View
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 10,
            paddingLeft: 12,
            paddingRight: 10,
            backgroundColor: '#F2F2F3',
            overflow: 'hidden',
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              height: 50,
              width: '85%',
              fontFamily: Theme.fontFamily.regular,
              fontSize: 14,
              borderRadius: 10,
              color: Theme.colors.textColor,
            }}
            placeholder="Type skill"
            value={inputSkills}
            onChangeText={setinputSkills}
            onSubmitEditing={addSkill}
          />
          <TouchableOpacity
            onPress={() => addSkill()}
            style={{
              height: 30,
              width: 30,
              backgroundColor: Theme.colors.primaryColor,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
            }}>
            <Icon name="plus" type="antdesign" color={'white'} size={18} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={skills}
          keyExtractor={item => item}
          style={{width: '90%', alignSelf: 'center'}}
          numColumns={3}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                marginTop: 5,
                marginRight: 10,
                backgroundColor: '#F2F2F3',
                borderRadius: 6,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Theme.fontFamily.medium,
                  color: Theme.colors.primaryColor,
                  marginRight: 2,
                }}>
                {item}
              </Text>
              <Icon
                name="trash-2"
                type="feather"
                color={'red'}
                size={15}
                onPress={() => removeSkill(item)}
              />
            </View>
          )}
        />
        <Text
          style={{
            color: Theme.colors.textColor,
            fontFamily: Theme.fontFamily.medium,
            fontSize: 15,
            marginLeft: '5%',
            marginBottom: 5,
            marginTop: 20,
          }}>
          Job Type
        </Text>

        <Dropdown
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 50,
            backgroundColor: '#F2F2F3',
            borderRadius: 10,
            padding: 12,
          }}
          placeholderStyle={{
            fontSize: 14,
            color: '#ADAEAE',
            fontFamily: Theme.fontFamily.regular,
          }}
          selectedTextStyle={{
            fontSize: 14,
            color: Theme.colors.textColor,
            fontFamily: Theme.fontFamily.regular,
          }}
          iconStyle={{
            width: 20,
            height: 20,
          }}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select job type"
          value={jobType}
          onChange={item => {
            setJobType(item.value);
          }}
          renderItem={renderItem}
        />
        <Text
          style={{
            color: Theme.colors.textColor,
            fontFamily: Theme.fontFamily.medium,
            fontSize: 15,
            marginLeft: '5%',
            marginBottom: 5,
            marginTop: 20,
          }}>
          Education
        </Text>

        <Dropdown
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 50,
            backgroundColor: '#F2F2F3',
            borderRadius: 10,
            padding: 12,
          }}
          placeholderStyle={{
            fontSize: 14,
            color: '#ADAEAE',
            fontFamily: Theme.fontFamily.regular,
          }}
          selectedTextStyle={{
            fontSize: 14,
            color: Theme.colors.textColor,
            fontFamily: Theme.fontFamily.regular,
          }}
          iconStyle={{
            width: 20,
            height: 20,
          }}
          data={data1}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select education"
          value={education}
          onChange={item => {
            setEducation(item.value);
          }}
          renderItem={renderItem}
        />
        <Text
          style={{
            color: Theme.colors.textColor,
            fontFamily: Theme.fontFamily.medium,
            fontSize: 15,
            marginLeft: '5%',
            marginBottom: 5,
            marginTop: 20,
          }}>
          Experience Level
        </Text>

        <Dropdown
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 50,
            backgroundColor: '#F2F2F3',
            borderRadius: 10,
            padding: 12,
          }}
          placeholderStyle={{
            fontSize: 14,
            color: '#ADAEAE',
            fontFamily: Theme.fontFamily.regular,
          }}
          selectedTextStyle={{
            fontSize: 14,
            color: Theme.colors.textColor,
            fontFamily: Theme.fontFamily.regular,
          }}
          iconStyle={{
            width: 20,
            height: 20,
          }}
          data={data2}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select education"
          value={experience}
          onChange={item => {
            setExperience(item.value);
          }}
          renderItem={renderItem}
        />
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
          onPress={()=> HandleData()}
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
              Get Started
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
export default CreateJob;
