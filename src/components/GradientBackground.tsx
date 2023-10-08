import React, {useContext, useEffect} from 'react';
import {Platform, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradientContext);

  useEffect(() => {
    setPrevMainColors(colors);
  }, [colors]);

  return (
    // <LinearGradient
    //   colors={[prevColors.primary, prevColors.secondary, '#fff']}
    //   style={styles.linearGradient}
    //   start={{x: 0, y: 0}}
    //   end={Platform.OS==='ios'? {x: 0, y: .75} : {x: 0, y: .95}}>
    <LinearGradient
      colors={['#111218', '#111218', '#111218', '#111218', '#111218', '#212329']}
      style={styles.linearGradient}
      start={{x: 0, y: 0}}
      end={Platform.OS==='ios'? {x: 0, y: 1} : {x: 0, y: 1}}>
      {children}
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {flex:1},
});
