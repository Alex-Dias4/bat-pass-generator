import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentButton:{
    display: "flex",
    flexDirection: 'row',
    gap: '4%',
    width: '100%'
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    paddingVertical: 12,
    paddingHorizontal: 28,
    backgroundColor: 'black',
    borderRadius: 3,
    elevation: 3,
    marginTop: 8

  },
  text:{
    fontSize:16,
    lineHeight:21,
    letterSpacing:0.25,
    color: '#E5BF3C'
  }
});