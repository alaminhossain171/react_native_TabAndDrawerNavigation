/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import imagePath from '../../Constants/imagePath';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MainNavigationString from '../../Constants/MainNavigationString';

const LiveChat = () => {
  const Navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000'}}>
      <View style={styles.superStarHome}>
        <TouchableOpacity
          style={styles.singleContent}
          onPress={() =>
            Navigation.navigate(MainNavigationString.CREATEQASCHEDULE, {
              typeName: 'Create Live Schedule',
            })
          }>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#e7a825', '#e7c233', '#ffad00']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Create</Text>
          </LinearGradient>
          <Image source={imagePath.CreateMeetup} style={styles.postImage} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Navigation.navigate(MainNavigationString.QAAPPROVED, {
              typeName: 'Pending Live',
            })
          }
          style={styles.singleContent}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#e7a825', '#e7c233', '#ffad00']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Pending</Text>
          </LinearGradient>
          <Image source={imagePath.PendingMeetup} style={styles.postImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.superStarHome}>
        <TouchableOpacity
          style={styles.singleContent}
          onPress={() =>
            Navigation.navigate(MainNavigationString.APPROVEDTITLEBANNER, {
              typeName: 'Live Chat List',
            })
          }>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#e7a825', '#e7c233', '#ffad00']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}> Live Chat List</Text>
          </LinearGradient>
          <Image source={imagePath.LiveTwo} style={styles.postImage} />
          <Text style={styles.TextColor}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleContent}
          onPress={() =>
            Navigation.navigate(MainNavigationString.QAAPPROVED, {
              typeName: 'Completed Live',
            })
          }>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#e7a825', '#e7c233', '#ffad00']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Completed</Text>
          </LinearGradient>
          {/* <Image source={imagePath.CreateMeetup} style={styles.postImage} /> */}
          <View style={styles.postImage}>
            <Ionicons
              name={'checkmark-done-circle'}
              color={'#ffad00'}
              size={65}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.superStarHome}>
      <TouchableOpacity
          style={styles.singleContent}
          onPress={() =>
            Navigation.navigate(MainNavigationString.QAAPPROVED, {
              typeName: 'Rejected',
            })
          }>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#e7a825', '#e7c233', '#ffad00']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Rejected</Text>
          </LinearGradient>
          <View style={styles.postImage}>
            <Entypo name={'squared-cross'} color={'#ffad00'} size={65} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#000',
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#232323',
    borderRadius: 10,
    paddingBottom: 8,
  },
  superStarHome: {
    flexDirection: 'row',
    padding: 5,
  },
  postImage: {
    width: 65,
    height: 65,
    margin: '15%',
  },
  postImageX: {
    width: 100,
    height: 85,
    margin: '15%',
  },

  linearGradient: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  },
  singleContent: {
    // flex: 1,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#ff0',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',

    paddingVertical: 8,
  },
  TextColor: {
    color: 'white',
    position: 'absolute',
    top: 55,
    right: 35,
    backgroundColor: 'red',
    textAlign: 'center',
    paddingTop: 8,
    width: 35,
    borderRadius: 100,
    height: 35,
    fontWeight: 'bold',
  },
});

export default LiveChat;
