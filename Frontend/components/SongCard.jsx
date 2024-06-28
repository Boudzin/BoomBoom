import React, {
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
} from "react";
import { View, Animated, PanResponder, Text } from "react-native";

const SongCard = forwardRef(({ onSwipeLeft, onSwipeRight }, ref) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useImperativeHandle(ref, () => ({
    //Swipe a gauche avec le bouton
    swipeLeft: () => {
      Animated.spring(pan, {
        toValue: { x: -500, y: 0 },
        useNativeDriver: true,
      }).start(() => {
        setDisliked(true);
        onSwipeLeft();
        setTimeout(() => {
          pan.setValue({ x: 0, y: 0 });
          setDisliked(false);
        }, 100); // Ajout d'un délai pour que l'animation puisse se terminer correctement
      });
    },
    //Swipe a droite avec le bouton
    swipeRight: () => {
      Animated.spring(pan, {
        toValue: { x: 500, y: 0 },
        useNativeDriver: true,
      }).start(() => {
        setLiked(true);
        onSwipeRight();
        setTimeout(() => {
          pan.setValue({ x: 0, y: 0 });
          setLiked(false);
        }, 100); // Ajout d'un délai pour que l'animation puisse se terminer correctement
      });
    },
  }));

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      //Quand le tactile est relaché
      onPanResponderRelease: (e, gesture) => {
        //Si la carte est a droite ajouter Like
        if (gesture.dx > 120) {
          Animated.spring(pan, {
            toValue: { x: 500, y: gesture.dy },
            useNativeDriver: true,
          }).start(() => {
            setLiked(true);
            onSwipeRight();
            setTimeout(() => {
              pan.setValue({ x: 0, y: 0 });
              setLiked(false);
            }, 100); // Ajout d'un délai pour que l'animation puisse se terminer correctement
          });
          //Si la carte est a gauche ajouter disLike
        } else if (gesture.dx < -120) {
          Animated.spring(pan, {
            toValue: { x: -500, y: gesture.dy },
            useNativeDriver: true,
          }).start(() => {
            setDisliked(true);
            onSwipeLeft();
            setTimeout(() => {
              pan.setValue({ x: 0, y: 0 });
              setDisliked(false);
            }, 100); // Ajout d'un délai pour que l'animation puisse se terminer correctement
          });
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
      }}
      {...panResponder.panHandlers}
    >
      <View className="w-[300px] h-[500px] bg-[#7D82B8] justify-center items-center rounded-3xl shadow-sm">
        <Text className=" font-pbold text-base text-white ">
          Style de musique
        </Text>
      </View>
    </Animated.View>
  );
});

export default SongCard;
