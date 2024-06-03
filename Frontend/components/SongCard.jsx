import React, { useRef, useState } from "react";
import {
  View,
  PanResponder,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const COLORS = [
  "#FFAAAA",
  "#AAFFAA",
  "#AAAAFF",
  "#FFFFAA",
  "#FFAAFF",
  "#AAFFFF",
];
const SongCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pan] = useState(COLORS.map(() => new Animated.ValueXY()));

  const createPanResponder = (index) => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan[index].setOffset({
          x: pan[index].x._value,
          y: pan[index].y._value,
        });
      },
      onPanResponderMove: (e, gestureState) => {
        Animated.event([null, { dx: pan[index].x, dy: pan[index].y }], {
          useNativeDriver: false,
        })(e, gestureState);
      },
      onPanResponderRelease: (e, { dx, dy }) => {
        if (Math.abs(dx) > 120) {
          Animated.spring(pan[index], {
            toValue: {
              x: dx > 0 ? SCREEN_WIDTH : -SCREEN_WIDTH,
              y: dy,
            },
            useNativeDriver: true,
          }).start(() => {
            nextCard();
          });
        } else {
          Animated.spring(pan[index], {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    });
  };

  const [panResponders] = useState(
    COLORS.map((_, index) => createPanResponder(index))
  );

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < COLORS.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const rotate = (index) =>
    pan[index].x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });

  const rotateAndTranslate = (index) => ({
    transform: [
      { rotate: rotate(index) },
      { translateX: pan[index].x },
      { translateY: pan[index].y },
    ],
  });

  const renderCards = () => {
    return COLORS.map((color, i) => {
      if (i < currentIndex) {
        return null;
      } else if (i === currentIndex) {
        return (
          <Animated.View
            key={i}
            {...panResponders[i].panHandlers}
            className="w-[300px] h-[400px] rounded-lg justify-center items-center absolute"
            style={[
              rotateAndTranslate(i),
              ,
              { backgroundColor: color, zIndex: COLORS.length - i },
            ]}
          />
        );
      } else {
        return (
          <Animated.View
            key={i}
            className="w-[300px] h-[400px] rounded-lg justify-center items-center absolute"
            style={[
              {
                backgroundColor: color,
                zIndex: COLORS.length - i - 1,
              },
            ]}
          />
        );
      }
    }).reverse();
  };
  return (
    <View className="flex-1 justify-center items-center ">{renderCards()}</View>
  );
};

export default SongCard;
