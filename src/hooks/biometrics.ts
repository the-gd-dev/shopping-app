import React, {useEffect, useState} from 'react';
import {ReactNativeBiometricsLegacy as ReactNativeBiometrics} from 'react-native-biometrics';

const useBiometrics = () => {
  const [biometryType, setBiometryType] = useState('');

  useEffect(() => {
    ReactNativeBiometrics.simplePrompt({promptMessage: 'Confirm your identity'})
      .then(resultObject => {
        const {success} = resultObject;
        if (success) {
          // Checking the biometry type supported by the device
          ReactNativeBiometrics.biometricKeysExist()
            .then(result => {
                console.log("some key should be ", result);
                
              const {keysExist} = result;
              if (keysExist) {
                setBiometryType('Biometrics available');
              } else {
                setBiometryType('No biometrics');
              }
            })
            .catch(() => {
              setBiometryType('Error checking biometric keys');
            });
        } else {
          setBiometryType('Authentication canceled');
        }
      })
      .catch(() => {
        setBiometryType('No biometrics or authentication failed');
      });
  }, []);

  return {
    biometryType,
  };
};

export default useBiometrics;
