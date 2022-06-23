import { showMessage } from "react-native-flash-message";

export function successNotification(message) {
  showMessage({
    message: message,
    type: 'success',
    duration: 4000
  });
}

export function dangerNotification(message) {
  showMessage({
    message: message,
    type: 'danger',
    duration: 4000
  });
}
