cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "com.paypal.cordova.mobilesdk.PayPalMobile",
        "file": "plugins/com.paypal.cordova.mobilesdk/www/cdv-plugin-paypal-mobile-sdk.js",
        "pluginId": "com.paypal.cordova.mobilesdk",
        "clobbers": [
            "PayPalMobile"
        ]
    },
    {
        "id": "com.telerik.plugins.nativepagetransitions.NativePageTransitions",
        "file": "plugins/com.telerik.plugins.nativepagetransitions/www/NativePageTransitions.js",
        "pluginId": "com.telerik.plugins.nativepagetransitions",
        "clobbers": [
            "window.plugins.nativepagetransitions"
        ]
    },
    {
        "id": "com.telerik.stripe.stripe",
        "file": "plugins/com.telerik.stripe/www/stripe.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe"
        ]
    },
    {
        "id": "com.telerik.stripe.charges",
        "file": "plugins/com.telerik.stripe/www/charges.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.charges"
        ]
    },
    {
        "id": "com.telerik.stripe.customers",
        "file": "plugins/com.telerik.stripe/www/customers.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.customers"
        ]
    },
    {
        "id": "com.telerik.stripe.recipients",
        "file": "plugins/com.telerik.stripe/www/recipients.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.recipients"
        ]
    },
    {
        "id": "com.telerik.stripe.subscriptions",
        "file": "plugins/com.telerik.stripe/www/subscriptions.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.subscriptions"
        ]
    },
    {
        "id": "com.telerik.stripe.transfers",
        "file": "plugins/com.telerik.stripe/www/transfers.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.transfers"
        ]
    },
    {
        "id": "com.telerik.stripe.coupons",
        "file": "plugins/com.telerik.stripe/www/coupons.js",
        "pluginId": "com.telerik.stripe",
        "clobbers": [
            "stripe.coupons"
        ]
    },
    {
        "id": "com.xmartlabs.cordova.market.Market",
        "file": "plugins/com.xmartlabs.cordova.market/www/market.js",
        "pluginId": "com.xmartlabs.cordova.market",
        "clobbers": [
            "cordova.plugins.market"
        ]
    },
    {
        "id": "cordova-plugin-app-version.AppVersionPlugin",
        "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
        "pluginId": "cordova-plugin-app-version",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "id": "cordova-plugin-apprate.AppRate",
        "file": "plugins/cordova-plugin-apprate/www/AppRate.js",
        "pluginId": "cordova-plugin-apprate",
        "clobbers": [
            "AppRate"
        ]
    },
    {
        "id": "cordova-plugin-apprate.locales",
        "file": "plugins/cordova-plugin-apprate/www/locales.js",
        "pluginId": "cordova-plugin-apprate",
        "runs": true
    },
    {
        "id": "cordova-plugin-globalization.GlobalizationError",
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "id": "cordova-plugin-globalization.globalization",
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "cordova-plugin-themeablebrowser.themeablebrowser",
        "file": "plugins/cordova-plugin-themeablebrowser/www/themeablebrowser.js",
        "pluginId": "cordova-plugin-themeablebrowser",
        "clobbers": [
            "cordova.ThemeableBrowser"
        ]
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "cordova-plugin-x-toast.Toast",
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "id": "cordova-plugin-x-toast.tests",
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "pluginId": "cordova-plugin-x-toast"
    },
    {
        "id": "onesignal-cordova-plugin.OneSignal",
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.5",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-splashscreen": "4.0.1",
    "cordova-plugin-statusbar": "2.2.1",
    "cordova-plugin-whitelist": "1.3.1",
    "ionic-plugin-keyboard": "2.2.1",
    "com.paypal.cordova.mobilesdk": "3.1.25",
    "com.telerik.plugins.nativepagetransitions": "0.6.5",
    "com.telerik.stripe": "1.0.6",
    "com.xmartlabs.cordova.market": "1.1",
    "cordova-plugin-app-version": "0.1.8",
    "cordova-plugin-apprate": "1.1.7",
    "cordova-plugin-globalization": "1.0.3",
    "cordova-plugin-inappbrowser": "1.4.1-dev",
    "cordova-plugin-network-information": "1.2.1",
    "cordova-plugin-themeablebrowser": "0.2.17",
    "cordova-plugin-x-socialsharing": "5.0.12",
    "cordova-plugin-x-toast": "2.5.1",
    "onesignal-cordova-plugin": "2.0.6",
    "cordova-plugin-dialogs": "1.2.1"
};
// BOTTOM OF METADATA
});