import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import useSwipeButton from "./hooks/useSwipeButton";
import { SwipeButtonProps } from "./interfaces";
import { createStyles } from "./swipe-button.styles";

const SwipeButton = ({
  onToggle,
  isToggled = false,
  width = 350,
  height = 70,
  padding = 10,
  containerStyle,
  gradiantColors = ["#FFFF", "blue"],
  buttonColors = ["blue", "#FFFF"],
  textAfterSwipeStyle,
  textBeforeSwipeStyle,
  textCheckIn = "Check IN!",
  textCheckOut = "Check Out!",
}: SwipeButtonProps) => {
  const { AnimatedStyles, animatedGestureHandler, AnimatedLinearGradient } =
    useSwipeButton({
      onToggle,
      isToggled,
      width,
      height,
      padding,

      buttonColors,
    });
  const styles = createStyles({
    height,
    width,
    padding,
    dimantions: height - 2 * padding,
    containerStyle,
    textAfterSwipeStyle,
    textBeforeSwipeStyle,
  });
  return (
    <Animated.View style={[styles.swipeCont, AnimatedStyles.swipeCont]}>
      <AnimatedLinearGradient
        style={[AnimatedStyles.colorWave, styles.colorWave]}
        colors={[gradiantColors[0], gradiantColors[1]]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      ></AnimatedLinearGradient>
      <Animated.Text style={[styles.swipeTextOut, AnimatedStyles.swipeTextOut]}>
        {textCheckOut}
      </Animated.Text>

      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]} />
      </PanGestureHandler>
      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
        {textCheckIn}
      </Animated.Text>
    </Animated.View>
  );
};

export default SwipeButton;
