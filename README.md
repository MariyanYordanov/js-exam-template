# SoftUni JS Back-End Exam Preparation Cheat Sheet

1. Initialize Project
 - [x] Init npm project `npm init --yes`
 - [x] Change module system
 - [x] Add start file `/src/index.js`
 - [x] Add Dev Script
 - [x] Config Debugging
2. Express
 - [x] Install express `npm i express`
 - [x] Init express server
 - [ ] Add public resources in public - css, html resources
 - [x] Setup static middleware
 - [x] Add body parser middleware `app.use(express.urlencoded());`
 - [x] Add home controller
 - [x] Setup routes file
 - [x] Add error page
3. Handlebars
 - [ ] Install handlebars `npm i express-handlebars`
 - [ ] Config handlebars as view enging
 - [ ] Config views file extensions
 - [ ] Change views directory
 - [ ] Add resources to views folder
 - [ ] Add home view
 - [ ] Add layout
 - [ ] Add partials dir
 - [ ] Config handlebars to read mongoose documents
4. Database
 - [ ] Install mongoose `npm i mongoose`
 - [ ] Setup db connection
 - [ ] Setup db connection error handling
 - [ ] Add basic user model
5. Register
 - [ ] Install bcrypt `npm i bcrypt`
 - [ ] Fix navigation links
 - [ ] Add register view
 - [ ] Add user controller
 - [ ] Add register page
 - [ ] Modify register form
 - [ ] Create post register action
 - [ ] Add user service with register
 - [ ] Hash password
 - [ ] Check rePassword
 - [ ] Check if user exists
 - [ ] Register user
6. Login
 - [ ] Add jsonwebtoken `npm i jsonwebtoken`
 - [ ] Add cookie parser `npm i cookie-parser`
 - [ ] Use cookie parser middleware
 - [ ] Add login view
 - [ ] Add login page
 - [ ] Fix login form 
 - [ ] Add login post action
 - [ ] Add login method to user service
 - [ ] Validate user on login
 - [ ] Validate password on login
 - [ ] Add JWT_SECRET to global config file
 - [ ] Generate jwt token
 - [ ] Attach token to cookie
 - [ ] Login User
 - [ ] Auto login on register
7. Logout
 - [ ] Add logout action
8. Authentication
 - [ ] Auth middleware
 - [ ] Use auth middleware
 - [ ] Check if guest
 - [ ] Verify token
 - [ ] Handle invalid token
 - [ ] Attach user to request
 - [ ] Attach user data to handlebars context
9. Authorization
 - [ ] Create isAuth middleware
 - [ ] Create isGuest middleware
 - [ ] Add route guards
10. Dynamic content
 - [ ] Dynamic navigation
 - [ ] Dynamic titles
11. Error Handling
 - [ ] Add notification
 - [ ] Error message in notification
 - [ ] Add error message util
 - [ ] Add error handling for register
 - [ ] Persist form data in register form
 - [ ] Add error handling for login
 - [ ] Persist form data in login form
11. Bonuses
 - [ ] Set page title from view
 - [ ] Export helpers to external file
 - [ ] Temp data
   - [ ] Install express session
   - [ ] Use express session
   - [ ] Add temp data middleware
   - [ ] Use temp data middleware
 - [ ] Async jsonwebtoken
 - [ ] Add type declaration for promisified jsonwebtoken
    
