<h1>Simple Google Loging App</h1>

<h3>Objective</h3>
The aim of this project is to integrate OpenIdConnect (OIDC) with Google as the Identity Provider (IdP) with a React application
<br /> <br />
<h3>Skills Learned</h3>
● Understand OpenIdConnect with Google as an IdP
● Basic React

<br />
<h3>Tools Used</h3>
● Google Cloud Console
● Node.js: as the JavaScript runtime environment
● Npm: package manager for Node.js packages
<br />
<h3>Steps</h3>
Create a project in Google Cloud Console. 
<br /> <br />
<img width="425" alt="simple_google_auth_1" src="https://github.com/user-attachments/assets/83d04c02-9e94-4263-9254-4bf4c5be59b3">
<br />
*Ref 1: Google Cloud Console project*
<br /> <br />
Create the user consent screen, under the section APIs and services.
<br /> <br />
<img width="381" alt="simple_google_auth_2" src="https://github.com/user-attachments/assets/d4b18eaf-81c9-4758-afd7-fbc0a9e6986a">
<br />
*Ref 2: Navigation to the user content screen in Google Cloud Console*
<br /> <br />
For the consent screen, the following options are personalized:
<br />
● Name: LoginApp in this case <br />
● User type: external so that any test user with a google account could use it. <br />
● Support email and developer contact information. <br />
● Test users: users to perform the login tests. <br /> <br />
<img width="365" alt="simple_google_auth_3" src="https://github.com/user-attachments/assets/4784370e-a2ce-4c2f-a513-76329933c744">
<br />
*Ref 3: Personalized user consent screen*
<br /><br />
<img width="369" alt="simple_google_auth_4" src="https://github.com/user-attachments/assets/d9b01ae1-bf5f-45a7-b483-6ce85d675fab">
<br /> 
*Ref 4: Personalized user consent screen*
<br /> <br />
Create the credentials for the application, under the section APIs and services.
<br /> <br />
<img width="286" alt="simple_google_auth_5" src="https://github.com/user-attachments/assets/0d55170e-6b16-4bd7-8c68-551ccd9d289c">
<br />
*Ref 5: Navigation to the credentials screen in Google Cloud Console*
<br /> <br />
Create new credentials.
<br /> <br />
<img width="410" alt="simple_google_auth_6" src="https://github.com/user-attachments/assets/f3d9187c-8ec5-4fb2-a84d-f09923442a84">
<br />
*Ref 6: Create new credentials*
<br /> <br />
For the credentials, the following options are personalized:
<br />
Application type: we choose a Web application, as we will develop a react app.
<br />
● Name: Cliente web 1 in this case. <br />
● Authorized JavaScript origins:localhost and localhost in port 3000 (default port for react) for local testing. <br />
● Authorized redirect URIs: same as the Javascript origins. <br />
<br />
<img width="613" alt="simple_google_auth_8" src="https://github.com/user-attachments/assets/ef6c57df-c77b-40dc-aae5-8bee2a0cd043">
<br />
*Ref 7: Personalized credentials*
<br /> <br />
<img width="819" alt="simple_google_auth_7" src="https://github.com/user-attachments/assets/370dadf9-b012-4a2f-ba30-bca98a2db842">
<br />
*Ref 8: New credentials created*
<br /> <br />
Once finished with the Google Cloud Console, download Node.js and Npm.
<br /> <br />
To create the React app, go to the folder's route in which the project will be saved and run the following command to have a template to start. <br />
 “npx create-react-app <app name>” <br /> <br />

In the index.html we add the google script of the client library, for the authentication to work. We add the async defer for it to load faster.
<br />
<script src="https://accounts.google.com/gsi/client" async defer></script>
<br /> <br />
The code has the following sections: <br />
● UseEffect: indicates the functions to take the google object from the previous script. The app initializes with the client ID created in the Google Cloud Console, calls the
login function and renders the login google button. <br />
● Login function (HandleCallBackResponse): manages the response token when a user logs in and shows the login button and text. <br />
● Signout function (HandleSignOut): shows logout button, user’s picture and name once logged in. <br />
● HTML code: shows the applications name, and with the interface guides the user to login and logout, calling the buttons and functions previously created. <br />
<br /> <br />
To test the app, go to the folder where the project is saved. Note that node.js and npm should be installed in order to compile the application. Type "npm start" to launch the application. The browser will open http://localhost:3000/
<br /> <br />
<img width="313" alt="simple_google_auth_9" src="https://github.com/user-attachments/assets/b7e18995-86fe-4298-8410-d91b3128ca40">
<br />
*Ref 9: Application launched*
<br /> <br />
Once clicked the login button, it prompts to login using one of our Google accounts, or a different one.
<br /> <br />
<img width="369" alt="simple_google_auth_10" src="https://github.com/user-attachments/assets/31445ddc-83e5-4758-ab6c-cc955d6e9d57">
<br />
*Ref 10: Log in with a google account*
<br /> <br />
Select the account and the log in will be successfull. The application will show the account's profile picture and name, as well as a sign out button.
<br /> <br />
<img width="271" alt="simple_google_auth_11" src="https://github.com/user-attachments/assets/c96f8536-d90d-4685-aac5-b4b6498ce095">
<br />
*Ref 10: Log in successfull*




