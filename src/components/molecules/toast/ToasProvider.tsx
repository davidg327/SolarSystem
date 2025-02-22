import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';
import {TextComponent } from '../../atoms';
import {Colors} from '../../../theme';

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
              ...styles.containerBackground,
              backgroundColor: toast.data.color,
            }}
          >
            <TextComponent
              styles={styles.subtitleBackground}
              text={toast.message}
            />
          </View>
        ),
        custom_toast: (toast) => (
          <View
            style={{ ...styles.container, borderLeftColor: toast.data.color }}
          >
            <TextComponent styles={styles.title} text={toast.data.title} />
            <TextComponent
              styles={styles.subtitle}
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

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    marginVertical: 4,
    borderRadius: 8,
    borderLeftWidth: 6,
    justifyContent: 'center',
  },
  containerBackground: {
    width: '90%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 4,
    borderRadius: 8,
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    color: Colors.black,
    fontWeight: '600',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 10,
    color: Colors.black,
    fontWeight: '300',
    marginTop: 2,
    marginLeft: 10,
  },
  subtitleBackground: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: '500',
    marginTop: 2,
    marginLeft: 10,
  },
});
