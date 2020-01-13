# Contribution guide
## Issues

You can use [github issues](https://github.com/c4m/transporteCDMX/issues) to request features and file bug reports. An issue is also a good place to ask questions. We are happy to help out if you have reached a dead end, but please try to solve the problem yourself first.

When creating an issue there are couple of things you need to remember:

1. **Update to the latest version if possible and see if the problem remains.**
   If updating is not an option you can still request critical bug fixes for older versions.

2. **Describe your problem.**
   Answer the following questions: Which app version are you using? What are you doing? What code are you running? What is happening? What are you expecting to happen instead? If you provide code examples (please do!), **use the actual code you are running**. People often leave out details or use made up examples because they think they are only leaving out irrelevant stuff. If you do that, you have already made an assumption about what the problem is and it's usually something else. Also provide all possible stack traces and error messages.

3. **If possible, provide an actual reproduction**
   The fastest way to get your bug fixed or problem solved is to create a simple standalone app or a test case that demonstrates your problem.

## Pull requests

If you have found a bug or want to add a feature, pull requests are always welcome! It's better to create an issue first to open a discussion if the feature is something that should be added to TransporteCDMX. In case of bugfixes it's also a good idea to open an issue indicating that you are working on a fix.

For a pull request to get merged it needs to have the following things:

1. **A good description of what the PR fixes or adds. You can just add a link to the corresponding issue.**

2. **Tests that verify the fix/feature.** It's possible to create a PR without tests and ask for someone else to write them but in that case it may take a long time or forever until someone finds time to do it. _Untested code will never get merged!_

3. **For features you also need to write documentation.** You might want to add them to our contributing file

## Development setup

1. **Fork TransporteCDMX in your github account**

2. **Clone TransporteCDMX**

```bash
git clone git@github.com:<your-account>/transporteCDMX.git
```
3. Follow React Native getting started [guide](https://facebook.github.io/react-native/docs/getting-started#native) to install all the requiremnets. Keep in mind you need to follow React Native CLI Quickstart instructions. 

4. **Run `yarn install` at the root of project's folder**

5. **Run `pod install` at the root of [ios](ios) folder**

6. **Run `yarn test` at the root of project's folder to see if everything works.**

## Configure your Mock Endpoints and keys

1. Clone our [Postman Collection](https://www.getpostman.com/collections/94b1e6c1c57979fe26c3) in your account.

2. Follow [Postman instructions](https://learning.getpostman.com/docs/postman/mock-servers/setting-up-mock/) to create a Mock Server of your cloned collection.

3. After getting your Mock Server URL modify [.env.staging file](.env.staging) and replace your Postman ID  => `{YOUR-MOCK-SERVER-ID}` (no brackets needed).

4. Create a [Google Maps API Key](https://developers.google.com/maps/documentation/android-sdk/get-api-key) and replace it in `{YOUR-GOOGLE-MAPS-API-KEY}` to make maps work on Android.

## Notes
[prettier](https://prettier.io/) is used to format the code. Be sure husky is running when committing code.
