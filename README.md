# Precious Onome Afere – Developer Portfolio

Welcome to my personal web developer portfolio, built with **React** and styled using **CSS Modules**. This fully responsive site is designed to showcase my journey, projects, and skill set with a strong focus on clean UI/UX, accessibility, and interactive animations.

---

## Highlights

- Fully responsive design
- Gradient text with `background-clip: text` for modern aesthetic
- Dynamic Typewriter effect in Hero section
- Mobile-first layout with conditional rendering
- Modular components and maintainable codebase

---

## Overview

This portfolio serves as my digital resume, showcasing:

- My path into tech (Graduated from **Migracode Barcelona** bootcamp)
- Real-world projects
- Tech stack and development skills
- How to contact or collaborate with me

---

## Tech Stack

- **Frontend**: React, HTML5, CSS Modules
- **Animations**: React Spring, React Simple Typewriter
- **Icons**: React Icons
- **Styling**: Custom CSS (Responsive with media queries)
- **Version Control**: Git & GitHub

---

## Project Structure

```js
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Hero/
│   ├── Projects/
│   ├── Sidebar/
│   ├── Skills/
│   └── Socials/
└── App.jsx

```

---

## Features

### About Section

- Responsive layout with adaptive font sizes
- Includes a personal story and education background (Migracode Barcelona)

### Skills

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

### Socials

- Social icons shown:
  - Inside **Sidebar** on large screens
  - Inside **Hero** on mobile view only
- Icons animate on hover with subtle effects

### Sidebar Navigation

- Fixed left sidebar for large screens (250px)
- Animated on mount (`slideInLeft`)
- Hidden via media query on screens smaller than `768px`
- Smooth scroll and active link indicators

---

## About Me

I’m **Precious Onome Afere**, a full-stack developer with a passion for clean code, responsive design, and continuous learning. I completed a one-year intensive bootcamp at **Migracode Barcelona**, where I gained hands-on experience with modern technologies and built real-world projects in a collaborative environment.

---

## Responsive Design

- Uses media queries to adapt layout:
  - Sidebar hidden on mobile
  - Socials shown conditionally based on screen size
  - Layout reflows gracefully on screens from 360px to 2560px+

---

## Getting Started

```js
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
npm install
npm start
```

# Contributing

This is a personal project, but if you'd like to suggest improvements or report bugs, feel free to open an issue or PR.

# Contact

Let’s connect and build something amazing!

- [LinkedIn](https://www.linkedin.com/in/afere-precious-3929a0306/)
- [GitHub](https://github.com/AferePreciousOnome)
- Email: preciousafere@gmail.com

Designed and developed with 💙 by Precious Onome Afere
