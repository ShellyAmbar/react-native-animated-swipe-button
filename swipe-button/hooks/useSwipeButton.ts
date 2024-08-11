import {useEffect, useState} from "react";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {LinearGradient} from "expo-linear-gradient";
import UseSwipeButtonProps from "./interfaces";

const useSwipeButton = ({
  onToggle,
  isToggled = false,
  width = 350,
  height = 70,
  padding = 10,

  buttonColors = ["blue", "#FFF"],
}: UseSwipeButtonProps) => {
  const BUTTON_WIDTH = width;
  const BUTTON_HEIGHT = height;
  const BUTTON_PADDING = padding;
  const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

  const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
  const H_SWIPE_RANGE =
    BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);
  // Animated value for X translation
  const X = useSharedValue(0);
  // Toggled State
  const [toggled, setToggled] = useState(false);

  // Fires when animation ends
  const handleComplete = (isToggled: boolean) => {
    if (isToggled !== toggled) {
      setToggled(isToggled);
      onToggle(isToggled);
    }
  };

  // Gesture Handler Events
  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = H_SWIPE_RANGE + e.translationX;
      } else {
        newValue = e.translationX;
      }

      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        runOnJS(handleComplete)(true);
      }
    },
  });

  useEffect(() => {
    if (isToggled) {
      updateToggled();
      setToggled(true);
    }
  }, [isToggled]);

  const updateToggled = () => {
    X.value = withSpring(H_SWIPE_RANGE);
  };

  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    swipeCont: useAnimatedStyle(() => {
      return {};
    }),
    colorWave: useAnimatedStyle(() => {
      return {
        width: H_WAVE_RANGE + X.value,

        opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
      };
    }),
    swipeable: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          X.value,
          [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS - BUTTON_PADDING],
          [buttonColors[0], buttonColors[1]]
        ),
        transform: [{translateX: X.value}],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.7, 0],
          Extrapolate.CLAMP
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [-BUTTON_WIDTH / 15, BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS],
              Extrapolate.CLAMP
            ),
          },
        ],
      };
    }),
    swipeTextOut: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0, 1],
          Extrapolate.CLAMP
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [-BUTTON_WIDTH, SWIPEABLE_DIMENSIONS / 2],
              Extrapolate.CLAMP
            ),
          },
        ],
      };
    }),
  };

  return {
    AnimatedStyles,
    animatedGestureHandler,
    AnimatedLinearGradient,
  };
};

export default useSwipeButton;
