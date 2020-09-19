import React from 'react';
import {Container, Content, Text, Button} from 'native-base';
import Footer from './Footer';

export default function Course({navigation}) {
  return (
    <Container>
        <Content>
            <Button onPress={() => navigation.navigate('CourseDetail')}> 
                <Text>성판악 코스</Text>
            </Button>
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};