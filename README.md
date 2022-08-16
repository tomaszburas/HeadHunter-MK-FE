<div align="center">
  <img src="https://i.imgur.com/nYV30Ba.png" alt="logo" width="200" height="auto" />
<p>
    Frontend for the application that allows you to easily connect people from HR departments of companies with people looking for a job in IT.
  </p>

<h4>
    <a href="https://tomaszenko.networkmanager.pl/hh">View demo</a>
    <span> · </span>
    <a href="https://github.com/Simoon234/HeadHunter-MK-BE">Server repo.</a>
  </h4>
</div>

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
    * [Tech Stack](#space_invader-tech-stack)
    * [Features](#dart-features)
    * [Environment Variables](#key-environment-variables)
    * [Run Locally](#running-run-locally)
    * [Demo](#globe_with_meridians-demo)

<!-- About the Project -->
## :star2: About the Project


<!-- TechStack -->
### :space_invader: Tech Stack

- React.js
- Typescript
- Styled Components
- Redux-toolkit

<!-- Features -->
### :dart: Features

### Admin Panel
The **system administrator** has such functions as editing his own data (email and password), adding students (.csv file), and adding a person from hr. 

<img src="https://i.imgur.com/8hYsppM.jpg" alt="MK Head Hunter" />
  
- Adding students by the administrator is done by sending a `.csv` file. The file must contain such keys as:

| Key               | Description                                                                           | Validate                          |
|-------------------|---------------------------------------------------------------------------------------|-----------------------------------|
| email             | E-mail adress.                                                                        | Contains @. Unique in the system. |
| courseCompletion  | Assessment of the degree of course completion in the range of 0 - 5.                  | 0 - 5                             |
| courseEngagement  | Assessment of the degree of activity and involvement in the course in the range of 0 - 5. | 0 - 5                             |
| projectDegree     | Assessment of the final project in the course in the range of 0 - 5.                     | 0 - 5                             |
| teamProjectDegree | Assessment of team work in the Scrum bonus project in the course in the range 0 - 5.  | 0 - 5                             |
| bonusProjectUrls* | The url to GitHub of the project from the bonus stage. If there are several links, repeat the key in the file as many times as necessary. `Important!` the key must contain the word bonusProjectUrls and any prefix. The key cannot repeat itself.                        | Url address (https://...)         |
<img src="https://i.imgur.com/b59FJBs.jpg" alt="MK Head Hunter" />

- Adding people from hr via the form.

<img src="https://i.imgur.com/sAZXn3x.jpg" alt="MK Head Hunter" />

- If adding students and people from hr by admin is successful. They will be sent an activation link to the account, which is active for 7 days, to the e-mail address. The user activates the account by clicking on the link and setting the password.

<img src="https://i.imgur.com/gDu3Qhm.jpg" alt="MK Head Hunter" />

### HR Panel
The **HR panel** helps a person from companies to find suitable candidates for work, conduct interviews with them and propose cooperation. The user of this panel can also edit his account.

- **Available students** - tab in which a person from hr can view job candidates added by the administrator, and can also add them to the "For interview" tab. It is possible to filter students and to search for them by name.

<img src="https://i.imgur.com/awuf1M6.jpg" alt="MK Head Hunter" />

- **Interview students** - A tab where a person from hr can view the candidates he added himself. There is a limit imposed by the administrator as to the number of students who can be in this tab. It is possible to filter students, as well as search for them by name, as well as buttons that lead to the candidate's CV, removal from the "For interview" tab, and employment of a candidate. When hr clicks on the last option, the student's account will cease to be active.

<img src="https://i.imgur.com/8wMyTmO.jpg" alt="MK Head Hunter" />

- **Edit account**

<img src="https://i.imgur.com/r6DnvHk.jpg" alt="MK Head Hunter" />

- **Filtering students**

<img src="https://i.imgur.com/bGPBdcG.jpg" alt="MK Head Hunter" />

### Student Panel
The **student's panel** is a place where a user invited by the administrator and a job seeker can edit their account by supplementing the relevant information that will be displayed by the person from hr. The user of this panel can also mark himself as employed and his account will cease to be active at that moment.

<img src="https://i.imgur.com/NlrF51h.jpg" alt="MK Head Hunter" />

<!-- Env Variables -->
### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file or src/config.ts

`API_URL` - url to api

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/tomaszburas/HeadHunter-MK-FE.git
```

Go to the project directory

```bash
  cd HeadHunter-MK-FE
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

<!-- Demo -->
### :globe_with_meridians: Demo

This is a demo version and does not include all functionalities. If you want to see all functionalities run the application locally.

`Link:`
<https://tomaszenko.networkmanager.pl/hh>

`Admin Panel:` email: admin@hh.com password: Qwerty1

`Hr Panel:` email: hr@hh.com password: Qwerty1

`Student Panel:` email: student@hh.com password: Qwerty1




