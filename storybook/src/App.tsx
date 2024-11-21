import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { multiply } from 'com-halo9000-native-widgets';


// storybook app
export { default } from '../.storybook';

// example app
export function App() {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
