import { StyleSheet } from 'react-native'

export const ChatPageStyle = (StyleSheet.createstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '20%',
  },
  goBackArrow: { position: 'absolute', left: '5%', top: '-20%' },
  titleContainer: {
    marginTop: '10%',
    marginHorizontal: '5%',
  },
  title: {
    color: '#6A6F7D',
    fontSize: 30,
    fontFamily: 'baloo',
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F8F9FE',
    width: '90%',
    marginHorizontal: '5%',
    paddingHorizontal: '10%',
    height: 30,
    borderRadius: 25,
    marginTop: '10%',
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 7,
  },
  scrollView: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
    alignItems: 'center',
  },
  userPic: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
  messageDatas: {
    width: '70%',
  },
  messageUserName: {
    color: '#1F2024',
    fontSize: 12,
    fontFamily: 'Baloo',
  },
  notificationContainer: {
    width: '10%',
  },
  clientMessage: {
    backgroundColor: '#F8F9FE',
    borderRadius: 25,
    marginVertical: '5%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: '5%',
  },
  ownerMessage: {
    backgroundColor: '#91C788',
    borderRadius: 25,
    marginVertical: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  messageClientName: {
    color: '#1F2024',
    fontFamily: 'Baloo',
    paddingHorizontal: '5%',
    fontSize: 14,
  },
  messageClientMessage: {
    color: '#1F2024',
    fontFamily: 'Baloo',
    paddingHorizontal: '5%',
    fontSize: 14,
  },
  messageOwnerName: {
    color: '#fff',
    fontFamily: 'Baloo',
    paddingHorizontal: '5%',
    fontSize: 14,
  },
  messageOwnerMessage: {
    color: '#fff',
    fontFamily: 'Baloo',
    paddingHorizontal: '5%',
    fontSize: 14,
  },
  warningMessage: {
    backgroundColor: '#F8A581',
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 25,
    marginTop: '10%',
    marginBottom: '5%',
    paddingVertical: '2%',
  },
  warningMessageText: {
    fontFamily: 'Baloo',
    width: '80%',
    marginHorizontal: '10%',
    color: '#70727A',
    fontSize: 12,
    marginVertical: 7,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPseudo: {
    fontWeight: '400',
    fontFamily: 'Baloo',
    fontSize: 14,
  },
}))
