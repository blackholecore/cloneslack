# Clone Slack App 
Simple chat app 
<img src="https://img.icons8.com/dotty/344/react.png" width="20" heigh="20"> ReactJS 
app with 
<img src="https://img.icons8.com/color/344/redux.png" width="20" heigh="20"> Redux,
<img src="https://img.icons8.com/color/344/firebase.png" width="20" heigh="20"> Firebase.

### [Live demo:](https://slackclone-d3bea.web.app/) https://slackclone-d3bea.web.app/

![](https://github.com/tranhakhanhduy/cloneslack/blob/master/assetsReadme/app.PNG)



## Run Locally

<details>
  <summary>1. Install Dependencies</summary>
  
```sh
$ npm install
```
  
</details>
  
 <details>
  <summary>2. Create a new firebase project</summary>
Login to your google account and create a new firebase project [here](https://console.firebase.google.com/u/0/)

Open `firebase.js` and add the following configuration details. You can either use the same configuration details for both development and production but it's best to make separate projects. It can be found on your firebase project settings.

```
// SAMPLE CONFIG .firebase-config, you should put the actual config details found on your project settings
  apiKey: "AIzaSyAxLNQP1wQtANxiKge84Okz-6ePtlp_U9Q",
  authDomain: "slackclone-d3bea.firebaseapp.com",
  projectId: "slackclone-d3bea",
  storageBucket: "slackclone-d3bea.appspot.com",
  messagingSenderId: "575920230609",
  appId: "1:575920230609:web:d74c57c12d8b60e40735f0"
``` 

After setting up necessary configuration,
create a **Database** and choose **Cloud Firestore** and start in test mode
</details>

<details>
  <summary>3. Run development server</summary>
  
```sh 
$ npm run dev-server
```
  
</details>

<details>
  <summary>4. Build the project</summary>
  
```sh
$ npm run build
```
  
</details>

