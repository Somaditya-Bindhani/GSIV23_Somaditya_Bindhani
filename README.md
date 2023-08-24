## Initial Environment Setup for local

```bash
 cd GSIV23_Somaditya_Bindhani
 npm install
```

Create the following environment variable to run the application locally.

```bash
REACT_APP_URL =
REACT_APP_BEARER_TOKEN =
REACT_APP_IMAGE_URL =
```

## Start the application locally

```bash
npm start
```
## Deployement 
Application os deployed to Vercel Here is the link to that : 
## Challenges

- It to get the consistent data from the server , there were few case where the basic information as the image and rating were missing and I have adde checks to handle those situaiton .
- Raw state management and clicks handling using the in built hooks.

## Improvements

- Add more styling and I wish to a card loading effect while there is a loading from server which will take more time to do .
- In single movie pafe change the font color as per the backgraound color . Switch between White and Black depending on the color of the background .

## Notes

* I didn't want to over engineer the application by adding a state management libaray and a rotuig libaray , it was just a two page application thats why I have used the in built hooks for state management .
* I need more time to write test cases and I am not used a lot of TDD for react app;ications . 
