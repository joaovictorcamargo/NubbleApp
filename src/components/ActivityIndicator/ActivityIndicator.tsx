import {useTheme} from '@shopify/restyle';
import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

// import {useAppTheme} from '@hooks';
// import {ThemeColors} from '@theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: string;
}
export function ActivityIndicator({color}: Props) {
  const {colors} = useTheme();

  return <RNActivityIndicator color={color[colors]} />;
}
