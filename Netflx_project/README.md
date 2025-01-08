# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 API_KEY =  199915e57036d50fc49b26bcd5e05e4f

 CREATE TABLE users(
    userid INT(20) NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(userid)
   );
   CREATE TABLE question(
    id INT(20) NOT NULL AUTO_INCREMENT,
    questionid VARCHAR(100) NOT NULL UNIQUE,
    userid INT(20) NOT NULL,
    title VARCHAR(50) NOT NULL,
    descreption VARCHAR(200) NOT NULL,
    tag VARCHAR(20),
    PRIMARY KEY(id, questionid),
    FOREIGN KEY(userid) REFERENCES users(usersid)
     );  
    CREATE TABLE answers(
     answerid  INT(20) NOT NULL AUTO_INCREMENT,
     userid INT(20) NOT NULL, 
     questionid VARCHAR(100) NOT NULL,
     answer VARCHAR(200) NOT NULL, 
     PRIMARY KEY(answerid),
     FOREIGN KEY(questionid) REFERENCES questions(questionid),
     FOREIGN KEY(userid) REFERENCES users(usersid)   
    );