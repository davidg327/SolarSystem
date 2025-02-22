import {useToast} from 'react-native-toast-notifications';

export function useNotification() {
  const toast = useToast();

  const showNotification = (messageToast: string, color: string) => {
    toast.show(messageToast, {
      type: 'background_toast',
      animationDuration: 100,
      data: {
        color: color,
      },
    });
  };

  return {showNotification};
}
