import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
  await OneSignal.init({ appId: 'ff2207fc-fe1e-4c5e-9d7e-1fa418b90001', allowLocalhostAsSecureOrigin: true});
  OneSignal.showSlidedownPrompt();
}