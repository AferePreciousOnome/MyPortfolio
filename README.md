# Precious Onome Afere - Developer Portfolio 

Welcome to my developer portfolio! This is a fully responsive web portfolio built with **React**, showcasing my background, projects, skills, and contact information. Designed with modern UI/UX and subtle animations to enhance the user experience.

##  Overview

This portfolio serves as my digital resume — highlighting:

- My journey into tech (Graduated from Migracode Barcelona bootcamp )
- Projects I've worked on
- Skills in modern web development technologies
- Contact and social links

---

## Tech Stack

- **Frontend**: React, HTML5, CSS Modules
- **Animations**: React Spring
- **Icons**: React Icons
- **Styling**: Custom CSS with responsive design and transitions
- **Version Control**: Git & GitHub

---

##  Project Structure
```js
src/
├── components/
│ ├── Hero/
│ ├── Sidebar/
│ ├── About/
│ ├── Skills/
│ ├── Projects/
│ ├── Contact/
│ └── Socials/
├── assets/
└── App.jsx

```

---

##  Features

###  About Section
- Responsive layout with adaptive font sizes
- Includes a personal story and education background (Migracode Barcelona)

###  Skills
- Grid layout of tools/technologies (HTML, CSS, JavaScript, React, MongoDB, PostgreSQL, etc.)
- Hover animations on each skill card
- Fully responsive with mobile-optimized cards

### Projects
- Dynamic card layout for showcasing projects
- Technologies used per project listed as tags
- Hover effects for depth and interactivity

### Contact Section
- Clear call-to-action with styled email block
- Copy-to-clipboard functionality for the email address
- Responsive for all screen sizes

###  Socials
- Social icons shown:
  - Inside **Sidebar** on large screens
  - Inside **Hero** on mobile view only
- Icons animate on hover with subtle effects

###  Sidebar Navigation
- Fixed left sidebar for large screens (250px)
- Animated on mount (`slideInLeft`)
- Hidden via media query on screens smaller than `768px`
- Smooth scroll and active link indicators

---

##  About Me

I’m **Precious Onome Afere**, a full-stack developer with a passion for clean code, responsive design, and continuous learning. I completed a one-year intensive bootcamp at **Migracode Barcelona**, where I gained hands-on experience with modern technologies and built real-world projects in a collaborative environment.

---

##  Responsive Design

- Uses media queries to adapt layout:
  - Sidebar hidden on mobile
  - Socials shown conditionally based on screen size
  - Layout reflows gracefully on screens from 360px to 2560px+

---

## Getting Started

``` js
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
npm install
npm start
```

