importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBIgRqY6z43d2sj_AfaCEcu26zApRW1sdc",
    authDomain: "final-fb-7d1bd.firebaseapp.com",
    projectId: "final-fb-7d1bd",
    storageBucket: "final-fb-7d1bd.appspot.com",
    messagingSenderId: "1089323542372",
    appId: "1:1089323542372:web:e6b723b3388e0d18d3bc71"
}

firebase.initializeApp(firebaseConfig);
const messaging =firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});