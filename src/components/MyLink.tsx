import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';
import {colors} from '../colors';

export function MyLink(props: TextProps) {
  return <Text style={styles.text} {...props} />;
}

const styles = StyleSheet.create({
  text: {
    marginTop: 16,
    fontWeight: 'bold',
    color: colors.primaryDark,
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
