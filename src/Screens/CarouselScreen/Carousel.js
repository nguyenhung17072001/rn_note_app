import React, {useState, useRef, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar
} from 'react-native';
import theme from '../../Core/theme';
const {strings, images, colors, font} = theme;
import Context from '../../Core/Context';
import styles from './CarouselStyle'


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const Carousel = props => {
  const themeColor = useContext(Context);

  const [next, setNext] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = [
    {
      key: 1,
      title: 'Chuyên gia của bạn',
      text: 'Dễ dàng đặt lịch với Mytikasgroup để được được đội ngũ bác sỹ hàng đầu thăm khám và tư vấn',
      image: images.carouselb1,
      backgroundColor: 'white',
    },
    {
      key: 2,
      title: 'Điều trị hiệu quả',
      text: 'Đội ngũ chuyên gia được đào tạo bài bản và nhiều năm kinh nghiệm lâm sàng thực chiến',
      image: images.carouselb2,
      backgroundColor: 'white',
    },
    {
      key: 3,
      title: 'Theo dõi 24/7',
      text: 'Đội ngũ nhân sự tận tâm, theo dõi sát diễn biến bệnh lý, hỗ trợ kịp thời và chính xác thời điểm',
      image: images.carouselb3,
      backgroundColor: 'white',
    },
  ];

  useEffect(() => {
    if (currentSlideIndex == 2) {
      setNext(false);
    }
    if (currentSlideIndex < 2) {
      setNext(true);
    }
  }, [currentSlideIndex]);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setCurrentSlideIndex(currentIndex);
  };

  const ref = useRef();
  const nextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const backSlide = () => {
    const backSlideIndex = currentSlideIndex - 1;
    if (backSlideIndex != slides.length) {
      const offset = backSlideIndex * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(backSlideIndex);
      return;
    }
  };
  const Footer = () => {
    return (
      <View
        style={styles.footer}>
        {next ? (
          <TouchableOpacity style={styles.button} onPress={nextSlide}>
            <Text style={styles.textButton}>Tiếp</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.replace('SignIn')}>
            <Text style={styles.textButton}>Bắt đầu</Text>
          </TouchableOpacity>
        )}


        <View style={styles.indicator}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.circle,
                currentSlideIndex == index && {
                  backgroundColor: colors.white,
                  width: 14,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{...styles.container}}>
      <StatusBar backgroundColor={colors.mainBackgroundColor} barStyle='light-content' />
      <FlatList
        data={slides}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        key={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => (
          <View style={{...styles.slide, backgroundColor: themeColor.theme}}>
            <View style={{fljustifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={styles.imageSlide}
                resizeMode="contain"
                source={item.image}
            />


            <View style={styles.tab}>
                <Text style={styles.title}>{item.title}</Text>
                <Text
                  style={styles.text}>
                  {item.text}
                </Text>
            </View>
            
            </View>
          </View>
        )}
      />
      <Text style={styles.skip} onPress={() => props.navigation.replace('SignIn')} >Bỏ qua</Text>
      <Footer />
     
    </SafeAreaView>
  );
};


export default Carousel;
