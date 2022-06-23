import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { REACT_APP_GOOGLE_CLIENT_ID } from 'react-native-expand-dotenv';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import * as authThunk from '@store/auth/thunk';
import { SocialButton } from '@components/index';

GoogleSignin.configure({
    webClientId: REACT_APP_GOOGLE_CLIENT_ID, //client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, //if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', //specifies a hosted domain restriction
    loginHint: '', //[iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', //[Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', //[iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

export const SocialButtonsContainer = styled.View`
    margin-top: 15px;
    width: 100%;
`;

export default function SocialButtons() {

    const dispatch = useDispatch();

    const googleLogin = async () => {
        try {

            await GoogleSignin.hasPlayServices();

            const isUserSigned = await GoogleSignin.isSignedIn();

            !isUserSigned && await GoogleSignin.signIn();

            const tokens = await GoogleSignin.getTokens();

            dispatch(authThunk.signInOauth(tokens.accessToken, 'google'));

        } catch (error) {

            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('user cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('operation (e.g. sign in) is in progress already');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('play services not available or outdated');
            } else {
                // some other error happened
                console.log(error);
                console.log('error code', error.code);
            }
        }
    };

    const facebookLogin = () => {
        return LoginManager.logInWithPermissions(["public_profile"]).then(
            function (result) {

                if (result.isCancelled) {
                    console.log("login is cancelled.");
                } else {

                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            dispatch(authThunk.signInOauth(data.accessToken.toString(), 'facebook'));
                        }
                    )
                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        );
    }

    return <SocialButtonsContainer>
        <SocialButton onPress={facebookLogin}
            customButtonStyle={{ backgroundColor: '#337ab7' }}
            underlayColor={'#0863b3'}
            text={'Facebook'}
            iconName={'facebook'} />

        <SocialButton onPress={() => null}//googleLogin}
            customButtonStyle={{ backgroundColor: '#d9534f' }}
            underlayColor={'#ca2c27'}
            text={'Google'}
            iconName={'google'} />
    </SocialButtonsContainer>
}
