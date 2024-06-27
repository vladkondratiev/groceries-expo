# Groceries App

In order to launch the application, perform the following steps:

## Start JSON server

```sh
npx json-server db.json
```

## Compile and run locally

To compile the app locally, you will need to have Xcode ([learn more](https://docs.expo.dev/guides/local-app-development/#ios)) and/or Android ([learn more](https://docs.expo.dev/guides/local-app-development/#android)) toolchains installed and configured.

> [!NOTE]
> In order to be able to sign the app for an iOS device with a development certificate, you need a unique bundle identifier. Change the `APP_ID_PREFIX` in **app.config.js** to a unique ID, such as `yourname.reactconf`. Run `npx expo prebuild --clean` when you've updated the value to sync it to the native project.

### Android

```sh
# Generate the `android/` directory
npx expo prebuild -p android

# Compile with Gradle
npx expo run:android
# Alternatively, start the dev server and manually open in Android Studio and build
npx expo start
```

### iOS

```sh
# Generate the `ios/` directory
npx expo prebuild -p ios

# Compile with xcodebuild and run on simulator.
npx expo run:ios
# Alternatively, start the dev server and manually open Xcode and build
npx expo start
```
