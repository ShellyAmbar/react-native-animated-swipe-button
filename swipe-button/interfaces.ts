import {TextStyle, ViewStyle} from "react-native";

type SwipeButtonProps = {
  onToggle: (isToggled: boolean) => void;
  isToggled: boolean;
  width?: number;
  height?: number;
  padding?: number;
  containerStyle?: ViewStyle;
  gradiantColors?: string[];
  buttonColors?: string[];
  textBeforeSwipeStyle?: TextStyle;
  textAfterSwipeStyle?: TextStyle;
};

type SwipeButtonStyleProps = {
  height: number;
  width: number;
  padding: number;
  dimantions: number;
  containerStyle?: ViewStyle;
  textBeforeSwipeStyle?: TextStyle;
  textAfterSwipeStyle?: TextStyle;
};
export {SwipeButtonProps, SwipeButtonStyleProps};
