import { StyleSheet, View } from 'react-native';
import React from 'react';
import LoginLogo from '../../../assets/Drawables/LoginLogo.svg';
import constColors from '../../../utils/constants/constColors';
import { Button } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  SSO: undefined;
};

const AuthScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const handleBtnClick = (type: string) => {
    switch (type) {
      case 'login':
        navigation.navigate("Login");
        return;
      case 'register':
        navigation.navigate("Register");
        return;
      case 'sso':
        navigation.navigate("SSO");
        return;
      default:
        navigation.navigate("Login");
        return;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LoginLogo width={180} height={200} />
      </View>
      
      <View style={styles.footer}>
        <View style={styles.authButtons}>
          <Button style={styles.button} mode='outlined' textColor={constColors.neutralGrey11} onPress={() => handleBtnClick('register')}>
            Register
          </Button>
          <Button style={styles.button} mode='contained' textColor={constColors.bgWhite} buttonColor={constColors.brandBlue500} onPress={() => handleBtnClick('login')}>
            Login
          </Button>
        </View>
        <Button mode='outlined' textColor={constColors.neutralGrey11} onPress={() => handleBtnClick('sso')}>
          Login with SSO
        </Button>
      </View>
    </View>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: constColors.bgWhite,
    paddingVertical: 16
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  button: {
    flex: 0.45
  }
});