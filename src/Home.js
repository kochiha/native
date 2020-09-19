import React, {useState, useEffect} from 'react';
import {Image, Platform,Text,View, StyleSheet,TouchableOpacity} from 'react-native';
import {Container, Button} from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from './Footer';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Foundation';
import WeatherInfo from './WeatherInfo';

export default function Layout({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [imageList, setImageList] =useState([ require('./img/1.jpg'),require('./img/2.jpg'),require('./img/3.jpg') ]);
  function increment() {
    setCurrentIndex(currentIndex => currentIndex + 1);
  }
  // useEffect(() => {
  //   // 컴포넌트가 마운트 되고 함수를실행합니다.
  //     this.animation.play();
      
  // }, []);

  return (
    <Container>
    <View style={styles.container}>
      {/* 이미지 슬라이더 */}
    <View style={styles.image}>
              <SliderBox
                autoplay={true}  //자동 슬라이드 넘김
                circleLoop={true} //맨끝 슬라이드에서 다시 첫슬라이드로
                resizeMode="cover"  // 이미지 사이즈 조절값
                images={imageList} // 이미지 주소 리스트 
                dotColor="rgba(0,0,0,0)" // 아래 점 투명으로 안보이게 가림
                inactiveDotColor="rgba(0,0,0,0)" 
                ImageComponentStyle={{ width: wp('100%'), height: hp('30%') }} // 이미지 Style 적용
                currentImageEmitter={increment}
              />              
            </View>
            {/* 이미지 슬라이더 */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Info')}>
        <Text style={styles.buttonTitle}>▶탐방로 정보 확인하기</Text>
      </TouchableOpacity>

      <View style={styles.trailBar}>        
        <View style={styles.trailContent}>
        <Text style={styles.trail1}>My Trail</Text>
        <LottieView autoPlay loop  source={require('./svg/run.json')}
      />
        <View  style={styles.trailLine} />
        <Icon name="flag" size={35} color='#1E824C'style={styles.icon}/>
        </View>

        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
        <View style={styles.weather}>
          {/* <WeatherInfo /> */}
        </View>
        <View style={styles.ranking}>
        <TouchableOpacity style={{backgroundColor:"#1E824C",left:150, width: wp('6%'), }} onPress={() => navigation.navigate('Info')}>
                    <Icon name="plus" size={30} color='#fff'/>
                    
         </TouchableOpacity>
         <Image source={require('./img/rank.png')} style={styles.rankImage}></Image>
         <Text style={styles.trail1}>Ranking</Text>
        </View>
        </View>
      </View>

     
     </View>
     <Footer navigation={navigation} value='1' />
     </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    ...Platform.select({
      ios: { fontFamily: 'AppleSDGothicNeo-Regular' },
      android: {
        fontFamily: 'NotoSansKR-Bold',
        fontWeight: 'bold',
        includeFontPadding: false
      }
    }),    
  },
  image:{
    position: 'absolute',
    width: wp('100%'), 
    height: hp('30%'), 
    flex: 1, 
    marginTop: 40,
    
  },
  button: {    
    position: 'absolute',
    alignItems: "center",
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderWidth: 1,   
    padding: 5,
    marginHorizontal: 100,
    marginTop: 120
    
  },
  buttonTitle: {
    padding: 3,
    fontSize: 16,
    color: '#FFFFFF',    
  },
  trailBar:{
    position: 'relative',
    paddingHorizontal: 10,
    
  },
 
  trail1: {
    position: 'absolute',
    padding: 3,
    margin: 2,
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  trailContent:{  
    marginTop: 280, 
    borderRadius: 5,
    backgroundColor:'#f4d03f',
    height: hp('20%'), 
  },
  trailLine:{
    borderBottomColor: '#1E824C',
    borderBottomWidth: 3,
    marginHorizontal: 10,
    borderStyle: 'dashed',
    marginTop: 90,
    borderRadius: 1
  },
  icon:{
    position: 'absolute',
    
    padding: 0,
    left: 340,
    top: 60
  },
  weather:{    
    borderRadius: 5,
    backgroundColor:'#26A65B',
    height: hp('30%'),
    width: wp('46%'),
    marginRight: 5
  },
  ranking:{    
    borderRadius: 5,
    backgroundColor:'#1E824C',
    height: hp('30%'),
    width: wp('46%'),
    marginLeft: 5
  },
  rankImage:{
   left: 56,
   top: 20,
   width: wp('20%'),
   height: hp('20%'),
    //width: 150,
    //height: 'auto'
  }
})