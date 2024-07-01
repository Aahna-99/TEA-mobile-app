import { dispatch } from 'utils/navigation/NavigationRef';
import { Alert } from 'react-native';
// import UserPreference from 'config/UserPreferences';

const ErrorHandler = (NotificationContext: any, handler?: any) => {
    const { desubscribeNotifications } = NotificationContext;

    const logOut = async () => {
        // await UserPreference.instance.removeUser();
        // await UserPreference.instance.removeItem('TokenKey');
        // await UserPreference.instance.clearPreference();
        // await UserPreference.instance.clearDomain();
        desubscribeNotifications();
    };

    const AsyncAlert = async () =>
        new Promise((resolve, reject) => {
            Alert.alert(
                'Session Timeout',
                'Your session expired. Please sign in again to continue',
                [
                    {
                        text: 'OK',
                        onPress: async () => {
                            // const email =
                            //     await UserPreference.instance.getEmail();
                            // const domain =
                            //     await UserPreference.instance.getDomain();
                            // await logOut();
                            // dispatch(0, 'Subdomain', {
                            //     SubDomain: domain,
                            //     Email: email,
                            // });
                        },
                        style: 'default',
                    },
                ],
            );
            reject();
        });

    const errorObject = async errorResponse => {
        let result;
        try {
            result = await errorResponse.json();
        } catch (error) {
            result = {
                message: 'Something Went Wrong',
            };
        }
        return result;
    };

    const errorhandler = async (error: any) => {
        return new Promise(async (resolve, reject) => {
            if (error.status == 401) {
                let errorhandler = handler ? handler : AsyncAlert;

                await errorhandler().catch((error: any) => reject(error));
                reject();
            } else if (!error.status.toString().startsWith('2')) {
                let errorData = await errorObject(error);
                reject(errorData);
            }

            resolve();
        });
    };
    return {
        errorhandler,
    };
};

export default ErrorHandler;
