
import { StyleSheet, Text, View } from 'react-native';
import { Screen_01, Screen_02, Screen_03, Screen_04 } from './screen';
export default function App() {
  return (
    <View style={styles.container}>
        <Screen_04 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
