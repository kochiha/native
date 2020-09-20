import React from 'react';
import {Container, Content, Text, TextInput} from 'native-base';

import Footer from './Footer';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
export default function Course({navigation}) {
  return (
    <Container>
      <Content>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              color: '#FFF',
              fontFamily: 'DungGeunMo',
            }}>
            코스 선택하기
          </Text>
        </View>
        {/* 코스 아이템 시작 */}
        <ScrollView>
          <TouchableOpacity
            style={styles.courses}
            onPress={() => navigation.navigate('Guide')}>
            <Image
              style={styles.img}
              source={require('./img/성판악.jpg')}></Image>
            <Text style={styles.title}>성판악</Text>
            <Text style={styles.info}>약 4시간 30분 소요(9.6km)</Text>
            <Text style={styles.info2}>
              삼림욕을 즐기며 탐방하기에 최적의 장소
            </Text>

            <Icon name="flag" size={35} color="#181717" style={styles.icon} />
            <Text style={styles.iconInfo}>정상 등반</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.courses}
            onPress={() => navigation.navigate('Map')}>
            <Image
              style={styles.img}
              source={require('./img/어승생악.jpg')}></Image>
            <Text style={styles.title}>어승생악</Text>
            <Text style={styles.info}>약 30분 소요(1.3km)</Text>
            <Text style={styles.info2}>
              가벼운 등산을 원하는 탐방객이 즐겨찾는 오름
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.courses}
            onPress={() => navigation.navigate('Prepare')}>
            <Image
              style={styles.img}
              source={require('./img/어리목.jpg')}></Image>
            <Text style={styles.title}>어리목</Text>
            <Text style={styles.info}>약 3시간 소요(6.8km)</Text>
            <Text style={styles.info2}>
              한라산을 찾는 탐방객들이 가장 많이 이용하는 곳
            </Text>
            <Icon2 name="wind" size={35} color="#181717" style={styles.icon} />
            <Text style={styles.iconInfo}>날씨 주의</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* 코스 아이템 끝 */}
      </Content>

      <Footer navigation={navigation} value="2" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  courses: {
    alignItems: 'center',

    marginHorizontal: 20,
    width: wp('91%'),
    height: hp('25.5%'),

    marginTop: 20,
    // borderStyle: 'dotted',
    borderColor: '#404040',
    borderWidth: 3,
    borderRadius: 10,
  },
  img: {
    width: wp('90%'),
    height: hp('25%'),
    alignItems: 'center',
    padding: 0,
    resizeMode: 'stretch',
    alignItems: 'center',

    opacity: 0.6,
  },
  title: {
    marginTop: 30,
    alignItems: 'center',
    position: 'absolute',
    padding: 0,
    fontFamily: 'DungGeunMo',
    fontSize: 30,
    color: '#181717',
  },
  info: {
    marginTop: 65,
    position: 'absolute',

    padding: 0,
    fontFamily: 'DungGeunMo',
    fontSize: 20,
    color: '#47525E',
  },
  info2: {
    marginTop: 95,
    position: 'absolute',

    padding: 0,
    fontFamily: 'DungGeunMo',
    fontSize: 14,
    color: 'black',
  },
  iconCircle: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    marginTop: 130,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3,
    height: 50,
    width: 50,
    borderRadius: 1000,
  },
  icon: {
    position: 'absolute',
    padding: 0,
    marginTop: 115,
    marginLeft: 90,
  },
  iconInfo: {
    marginTop: 10,
    position: 'absolute',

    padding: 0,
    fontFamily: 'DungGeunMo',
    fontSize: 16,
    color: '#181717',
    marginLeft: 90,
  },
  header: {
    marginTop: 20,

    padding: 10,
    backgroundColor: '#1E824C',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    fontSize: 20,
    fontWeight: '100',
  },
});
