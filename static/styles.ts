import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const archive = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgr: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  wrapper: {
    paddingHorizontal: 16,
  },
  description: {
    paddingHorizontal: 16,
  },
  intro: {
    paddingHorizontal: 16,
    paddingTop: 19,
    paddingBottom: 10,
  },
  text: {
    lineHeight: 18,
    textAlign: 'justify',
  },
  tracks: {
    flex: 1,
  },
  pagination: {
    flex: 0, 
    flexDirection: 'row', 
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export const currentAntena = StyleSheet.create({
  container: {flex: 1},
  bgr: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  metadata: {
    flexDirection: 'row',
    paddingRight: 16,
    alignItems: 'center',
    paddingRight: 16,
  },
  time: {
    opacity: 0.7,
  },
  control: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const header = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    alignItems: 'center',
  },
});

export const day = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 40,
  },
  time: {
    flexGrow: 1,
    flexShrink: 0,
    flex: 1,

    padding: 3,
  },
  player: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    alignItems: 'flex-start',
  },
  title: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '50%',
    justifyContent: 'center',
    padding: 3,
  },
  iconContainer: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    alignItems: 'center',
  },
  notification: {
    height: 20,
    width: 20,
  },
});

export const player = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    paddingTop: 16,
  },
  listItem: {
    flex: 1,
    margin: 1,
    height: 80,
  },
  box: {
    height: 70,
  },
  img: {
    resizeMode: 'contain',
    justifyContent: 'center',
    flex: 1,
  },
});

export const schedule = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollviewContainer: {
    flex: 1,
  },
  dates: {
    color: '#f0eff6',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
  weekdates: {
    color: '#f0eff6',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
  },
});
