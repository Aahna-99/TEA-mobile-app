// File path: LoginScreen.tsx

import { StyleSheet, View, Alert } from 'react-native';
import React, { useState } from 'react';
import Text from '../../../uikit/Text';
import TextInput from '../../../uikit/TextInput';
import constColors from '../../../utils/constants/constColors';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../processors/store';
import { login } from '../../../processors/auth/authThunks';
import { validateForm, validateEmail, validatePassword } from '../helpers/Validation';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [loginPayload, setLoginPayload] = useState({
    email: 'admin@test.test',
    password: 'Engagedly1!'
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();

  const handleInputFields = (type: string, val: string) => {
    setLoginPayload({ ...loginPayload, [type]: val });

    // Validate input and update errors state
    if (type === 'email') {
      if (!validateEmail(val)) {
        setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format.' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
      }
    }

    if (type === 'password') {
      if (!validatePassword(val)) {
        setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required.' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
      }
    }
  };

  const loginHandler = async () => {
    const { valid, errors: validationErrors } = validateForm(loginPayload);

    if (!valid) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      ...loginPayload,
      account: '5beaf82672cad900dc853f6e',
      callbackUrl: 'https://rtregcode.admin.beta.theemployeeapp.com'
    };
    dispatch(login({payload, navigation}));
  };

  const forgotPwHandler = () => {
    console.log(">>>>Btn Clicked");
  };

  return (
    <View style={styles.container}>
      <Text headingType='h2' color={constColors.neutralGrey11} fontWeight='semiBold'>
        Login
      </Text>

      <View style={styles.loginForm}>
        <View style={styles.formInput}>
          <Text headingType='h5' color={constColors.neutralGrey11} fontWeight='semiBold'>E-mail</Text>
          <TextInput
            placeholder={'Enter your email'}
            onChange={(val: string) => handleInputFields('email', val)}
            editable={true}
          />
          {errors.email ? <Text color='red' headingType='h6'>{errors.email}</Text> : null}
        </View>
        <View style={styles.formInput}>
          <Text headingType='h5' color={constColors.neutralGrey11} fontWeight='semiBold'>Password</Text>
          <TextInput
            placeholder={'Enter your password'}
            onChange={(val: string) => handleInputFields('password', val)}
            editable={true}
          />
          {errors.password ? <Text color='red' headingType='h6'>{errors.password}</Text> : null}
        </View>

        <Button style={styles.forgotBtn} mode='text' textColor={constColors.brandBlue300} onPress={forgotPwHandler}>
          <Text headingType='h5' color={constColors.brandBlue300} fontWeight='regular' wrapperStyle={styles.forgotBtnTxt}>Forgot password?</Text>
        </Button>
      </View>

      <Button style={styles.loginBtn} mode='contained' textColor={constColors.bgWhite} buttonColor={constColors.brandBlue500} onPress={loginHandler}>
        Login
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    gap: 24,
  },
  loginForm: {
    gap: 12,
  },
  formInput: {
    gap: 6,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
  },
  forgotBtnTxt: {
    textDecorationLine: 'underline'
  },
  loginBtn: {
    width: '100%'
  }
});