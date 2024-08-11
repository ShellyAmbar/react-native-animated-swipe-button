import {StyleSheet} from "react-native";
import {SwipeButtonStyleProps} from "./interfaces";
const createStyles = ({
  height,
  width,
  dimantions,
  padding,
  textAfterSwipeStyle,
  textBeforeSwipeStyle,
  containerStyle,
}: SwipeButtonStyleProps) =>
  StyleSheet.create({
    swipeCont: {
      overflow: "hidden",
      height: height,
      width: width,
      backgroundColor: "rgba(21, 21, 21, 0.6)",
      borderRadius: height,
      padding: padding,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      shadowColor: "#FFFF",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 5,

      elevation: 1,
      ...{...containerStyle},
    },
    colorWave: {
      position: "absolute",
      left: 0,
      height: height,
      borderRadius: height,
      shadowColor: "#FFFF",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 7,
      backgroundColor: "#FFF",

      elevation: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    swipeable: {
      position: "absolute",
      left: padding,
      height: dimantions,
      width: dimantions,
      borderRadius: dimantions,
      zIndex: 3,
    },
    swipeText: {
      alignSelf: "center",
      fontSize: 18,
      fontWeight: "bold",
      zIndex: 2,
      color: "#FFF",

      textShadowRadius: 20,
      textShadowOffset: {
        width: 0,
        height: 0,
      },
      elevation: 20,
      ...{...textBeforeSwipeStyle},
    },
    swipeTextOut: {
      alignSelf: "center",
      fontSize: 18,
      fontWeight: "bold",
      zIndex: 3,
      textAlign: "center",
      color: "#FFF",

      textShadowColor: "#FFF",
      textShadowRadius: 20,
      textShadowOffset: {
        width: 0,
        height: 0,
      },
      elevation: 20,
      ...{...textAfterSwipeStyle},
    },
  });
export {createStyles};
