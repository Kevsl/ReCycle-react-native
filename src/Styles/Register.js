import { StyleSheet } from 'react-native'

export const RegisterStyle = (StyleSheet.createstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '20%',
  },
  goBackArrow: { position: 'absolute', left: '5%', top: '10%' },
  inputView: {
    borderRadius: 3,
    width: '90%',
    marginTop: 5,
    color: '#000',
    marginHorizontal: '5%',
    border: 1,
    borderBottom: '1px solid #6A6F7D',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    color: '#000',
    borderBottomColor: '#6A6F7D',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  TextInputRight: {
    height: 50,
    flex: 1,
    padding: 10,
    color: '#000',
    borderBottomColor: '#91C788',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  TextInputWrong: {
    height: 50,
    flex: 1,
    padding: 10,
    color: '#000',
    borderBottomColor: '#DA2D2D',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  forgot_button: {
    marginLeft: '60%',
    height: 30,
    color: '#6A6F7D',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'baloo',
  },

  registerBtnEnabled: {
    width: '90%',
    borderRadius: 3,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#91C788',
    marginHorizontal: '5%',
    marginVertical: 10,
  },

  registerBtnDisabled: {
    width: '90%',
    borderRadius: 3,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#939393',
    marginHorizontal: '5%',
    marginVertical: 10,
  },

  registerText: {
    color: '#fff',
    fontFamily: 'baloo',
  },

  loading: {
    marginVertical: 20,
  },
  noAccount: {
    width: '80%',
    borderRadius: 3,
    height: 20,
    justifyContent: 'center',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '10%',
    fontFamily: 'baloo',
  },
  noAccountText: {
    color: '#6A6F7D',
    fontWeight: 'normal',
    fontFamily: 'baloo',
  },
  noAccountSpan: {
    color: '#91C788',
    fontFamily: 'baloo',
  },
  titleContainer: {
    marginTop: '10%',
    marginHorizontal: '5%',
  },
  title: {
    color: '#6A6F7D',
    fontSize: 30,
    fontFamily: 'baloo',
  },
  subTitle: {
    color: '#6A6F7D',
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'baloo',
    fontStyle: 'normal',
  },
  label: {
    color: '#6A6F7D',
    fontSize: 12,
    marginLeft: '1%',
    fontFamily: 'baloo',
  },
  flexInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icone: {
    height: 20,
    width: 20,
  },
  wrongInput: {
    fontSize: 10,
    color: '#DA2D2D',
    fontFamily: 'baloo',
    marginVertical: 0,
  },
}))
