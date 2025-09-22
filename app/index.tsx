import StreakList from '@/components/StreakList';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <StreakList />
      <Link href="/CreateScreen" asChild>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add Item</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c42e29',
    padding: 10,
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  addText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
