import Animated, {
  useSharedValue,
  useWorklet,
  useEventWorklet,
  Worklet,
  useAnimatedStyle,
  ReanimatedView,
} from 'react-native-reanimated';
import { View, Button } from 'react-native';
import React, { useState, useRef } from 'react';

export default function RotatingSquare(props) {
  const wat = useSharedValue(0);

  const style = useAnimatedStyle(
    function(input) {
      'worklet';
      const { wat } = input;

      return {
        opacity: Reanimated.withSpring(wat.value, 0),
      };

      return {
        transform: [
          {
            translateX: wat.value,
          },
        ],
      };
    },
    { wat }
  );

  return (
    <View
      style={{
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        flexDirection: 'column',
      }}>
      <ReanimatedView
        style={[
          { width: 80, height: 80, backgroundColor: 'black', margin: 30 },
          style,
        ]}
      />
      <Button title="toggle" onPress={() => wat.set(Math.random())} />
    </View>
  );
}
