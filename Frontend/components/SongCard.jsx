import React, {
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  forwardRef,
} from "react";
import { View, Animated, PanResponder, Text, Button } from "react-native";

const SongCard = forwardRef(({ onSwipeLeft, onSwipeRight }, ref) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [track, setTrack] = useState(null);

  const fetchRandomTrack = () => {
    fetch('https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888')
      .then((response) => response.text())  
      .then((text) => { 
        const randomNumber = Math.floor(Math.random()*10);
        console.log("Numéro au hasard",randomNumber);     
        try {
          const data = JSON.parse(text);
          const artist = data.track[randomNumber]; 
          console.log('idArtist:', artist.idArtist); 
          setTrack(artist);
        } catch (error) {
          throw new Error("Received non-JSON response");
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchRandomTrack();
  }, []);

  useImperativeHandle(ref, () => ({
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
          fetchRandomTrack();
        }, 100);
      });
    },
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
          fetchRandomTrack();
        }, 100);
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
      onPanResponderRelease: (e, gesture) => {
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
              fetchRandomTrack();
            }, 100);
          });
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
              fetchRandomTrack();
            }, 100);
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
        {track ? (
          <>
            <Text className=" font-pbold text-base text-white ">
              {track.strTrack}
            </Text>
            <Text className=" font-pbold text-base text-white ">
              {track.strAlbum}
            </Text>
            <Text className=" font-pbold text-base text-white ">
              {track.strArtist}
            </Text>
          </>
        ) : (
          <Text className=" font-pbold text-base text-white ">
            Loading...
          </Text>
        )}
      </View>
    </Animated.View>
  );
});

export default SongCard;
