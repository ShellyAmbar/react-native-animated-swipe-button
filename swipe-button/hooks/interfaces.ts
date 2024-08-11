type UseSwipeButtonProps = {
  onToggle: (isToggled: boolean) => void;
  isToggled: boolean;
  width: number;
  height: number;
  padding: number;
  buttonColors?: string[];
};

export default UseSwipeButtonProps;
