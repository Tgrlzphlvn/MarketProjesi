import {StyleSheet, Dimensions} from 'react-native';

export const cardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    margin: 4,
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.2,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    textAlign: 'left',
    padding: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: 'gray',
    textAlign: 'left',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stockControlText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    textAlign: 'right',
    padding: 10,
  },
});
