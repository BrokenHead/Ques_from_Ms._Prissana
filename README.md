# Ques_from_Ms._Prissana
Question test from Ms. Prissana
I apologize if It have mistake since It my first time to writing typeScript

##Why / how's it working
This is repository for Midas soft Co., Ltd. Interview.In a position BackEnd with Node js
With is repository in ./ts folder it have all 3 Questions that I got

###Question 1  hand score
Input : get 3 Drew card from a deck of card 
Output : get highest score of suit type of card in hand with specific way of counting point

###Question 2 clock angle
Input : hh24:mm time
Output : find lower angle in clock long-short hands

###Question 3 Remote Associates Test
Input : got 3 word/Phrases
Output : remove same longest word in every word

##How I run Question

first, make a folder and run it in vs code
```
  code .
```

second, Start TypeScript project and open watch mode for detact file changes in .ts file extension to make it complie to .js file extension
```
  tsc --init
  tsc -w // make a ./ts folder to set as input target and make a ./dist folder to set as output target
```

3rd, Strt Node js project and open Nodemon for detact file changes in .js file extension to make it complie when file had changes 
```
  npm init
  npm -i nodemon // add "dev": "nodemon ./ts/Question****.ts" to "scripts": in package.json for set detacting target
  npm run dev
```

here you are, An auto complie .ts file for testing this Interview's Question, just save(CTRL + S) and answer (if console.log) will pop out 

