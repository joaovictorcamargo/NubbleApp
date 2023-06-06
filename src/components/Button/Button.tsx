import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';

export function Button() {
  return (
    <TouchableOpacity>
      <Text preset="paragraphMedium" bold>
        oi
      </Text>
    </TouchableOpacity>
  );
}
