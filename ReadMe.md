- A custom component of an animated swipe button with gradient colors, in typescript.

- It comes with a built-in TypeScript typings and is compatible with all popular JavaScript frameworks. You can use it directly or leverage well-maintained wrapper packages that allow for a more native integration with your frameworks of choice.

# Example:

![](./assets/videos/1.gif)

## How to use:

```
import SwipeButton from 'react-native-animated-swipe-button';

   <SwipeButton
          onToggle={(isToggled) => {
            const time = setTimeout(() => {
              onPressCheckIn(isToggled);
              clearTimeout(time);
            }, 500);
          }}
          isToggled={isCheckedIn}
          width={width * 0.7}
          height={70}
          padding={5}
          gradiantColors={[
            GlobalColors.Brand.thierd,
            GlobalColors.Brand.secondary,
          ]}
          buttonColors={[
            GlobalColors.Brand.secondary,
            GlobalColors.Brand.thierd,
          ]}
        />
```

# DateInput Props -

| Name                  | Type                         | Default |
| --------------------- | ---------------------------- | ------- |
| onToggle              | (isToggled: boolean) => void |
| isToggled             | boolean                      |
| width?                | number                       |
| height?               | number                       |
| padding?              | number                       |
| containerStyle?       | ViewStyle                    |
| gradiantColors?       | string[]                     |
| buttonColors?         | string[]                     |
| textBeforeSwipeStyle? | TextStyle                    |
| textAfterSwipeStyle?  | TextStyle                    |
