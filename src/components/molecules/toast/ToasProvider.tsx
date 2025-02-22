import React from 'react';
import {View} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';
import {TextComponent } from '../../atoms';
import {toastStyles} from "./toast.styles.ts";

interface IToastProviderComponent {
  children: React.ReactNode;
}

export const ToastProviderComponent = ({
  children,
}: IToastProviderComponent) => {
  return (
    <ToastProvider
      placement="top"
      offset={10}
      renderType={{
        background_toast: (toast) => (
          <View
            style={{
              ...toastStyles.containerBackground,
              backgroundColor: toast.data.color,
            }}
          >
            <TextComponent
              styles={toastStyles.subtitleBackground}
              text={toast.message}
            />
          </View>
        ),
        custom_toast: (toast) => (
          <View
            style={{ ...toastStyles.container, borderLeftColor: toast.data.color }}
          >
            <TextComponent styles={toastStyles.title} text={toast.data.title} />
            <TextComponent
              styles={toastStyles.subtitle}
              text={toast.message}
            />
          </View>
        ),
      }}
    >
      {children}
    </ToastProvider>
  );
};
