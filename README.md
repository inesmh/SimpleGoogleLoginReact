# Simple Google Loging App

## Objective
The aim of this project is to integrate OpenIdConnect (OIDC) with Google as the Identity Provider (IdP) with a React application

### Skills Learned
[Bullet Points - Remove this afterwards]

### Tools Used
[Bullet Points - Remove this afterwards]
- Google Cloud Console
- Node.js: as the JavaScript runtime environment
- Npm: package manager for Node.js packages

## Steps
Create a project in Google Cloud Console. <br />
<img width="425" alt="simple_google_auth_1" src="https://github.com/user-attachments/assets/83d04c02-9e94-4263-9254-4bf4c5be59b3">
*Ref 1: Google Cloud Console project*

Create the user consent screen, under the section APIs and services.
<img width="381" alt="simple_google_auth_2" src="https://github.com/user-attachments/assets/d4b18eaf-81c9-4758-afd7-fbc0a9e6986a">
*Ref 2: Navigation to the user content screen in Google Cloud Console*

For the consent screen, the following options are personalized:
● Name: LoginApp in this case
● User type: external so that any test user with a google account could use
it.
● Support email and developer contact information
● Test users: users to perform the login tests.
<img width="365" alt="simple_google_auth_3" src="https://github.com/user-attachments/assets/4784370e-a2ce-4c2f-a513-76329933c744">
*Ref 3: Personalized user consent screen*
<img width="369" alt="simple_google_auth_4" src="https://github.com/user-attachments/assets/d9b01ae1-bf5f-45a7-b483-6ce85d675fab">
*Ref 4: Personalized user consent screen*

Create the credentials for the application, under the section APIs and services.
<img width="286" alt="simple_google_auth_5" src="https://github.com/user-attachments/assets/0d55170e-6b16-4bd7-8c68-551ccd9d289c">
*Ref 5: Navigation to the credentials screen in Google Cloud Console*

Create new credentials.
<img width="410" alt="simple_google_auth_6" src="https://github.com/user-attachments/assets/f3d9187c-8ec5-4fb2-a84d-f09923442a84">
*Ref 6: Create new credentials*

For the credentials, the following options are personalized:
Application type: we choose a Web application, as we will develop a react app.
● Name: Cliente web 1 in this case.
● Authorized JavaScript origins:localhost and localhost in port 3000 (default port for react) for local testing.
● Authorized redirect URIs: same as the Javascript origins.
<img width="613" alt="simple_google_auth_8" src="https://github.com/user-attachments/assets/ef6c57df-c77b-40dc-aae5-8bee2a0cd043">
*Ref 7: Personalized credentials*
<img width="819" alt="simple_google_auth_7" src="https://github.com/user-attachments/assets/370dadf9-b012-4a2f-ba30-bca98a2db842">
*Ref 8: New credentials created*

Once finished with the Google Cloud Console, download Node.js and Npm.

To create the React app, go to the folder's route in which the project will be saved and run the following command to have a template to start.
 “npx create-react-app <app name>”

In the index.html we add the google script of the client library, for the authentication to work.
We add the async defer for it to load faster.
<script src="https://accounts.google.com/gsi/client" async defer></script>

The code has the following sections:
● UseEffect: indicates the functions to take the google object from the previous script. The app initializes with the client ID created in the Google Cloud Console, calls the
login function and renders the login google button.
● Login function (HandleCallBackResponse): manages the response token when a user logs in and shows the login button and text.
● Signout function (HandleSignOut): shows logout button, user’s picture and name once logged in.
● HTML code: shows the applications name, and with the interface guides the user to login and logout, calling the buttons and functions previously created.

To test the app, go to the folder where the project is saved. Note that node.js and npm should be installed in order to compile the application. Type "npm start" to launch the application. The browser will open http://localhost:3000/
<img width="313" alt="simple_google_auth_9" src="https://github.com/user-attachments/assets/b7e18995-86fe-4298-8410-d91b3128ca40">
*Ref 9: Application launched*

Once clicked the login button, it prompts to login using one of our Google accounts, or a different one.
<img width="369" alt="simple_google_auth_10" src="https://github.com/user-attachments/assets/31445ddc-83e5-4758-ab6c-cc955d6e9d57">
*Ref 10: Log in with a google account*

Select the account and the log in will be successfull. The application will show the account's profile picture and name, as well as a sign out button
<img width="271" alt="simple_google_auth_11" src="https://github.com/user-attachments/assets/c96f8536-d90d-4685-aac5-b4b6498ce095">
*Ref 10: Log in successfull*




