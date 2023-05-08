# SSC - Consultancy Website

Soka Strength consultancy is website for consultancy services providers who offers consulting and coaching services to help organizations implement effective strategies based on its research findings.

Coaches at SSC uses CliftonStrengths, formerly known as StrengthsFinder assessment tool developed by Gallup. It is designed to help individuals identify their natural talents and strengths and learn how to use them to achieve success and fulfillment in their personal and professional lives.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Husky](https://typicode.github.io/husky/#/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [npm](https://www.npmjs.com/)

## Project Purpose

The purpose of this website is to provide individuals with access to Gallup certified coaches who can help them identify their natural talents and strengths using the CliftonStrengths assessment. The coaches will work with individuals to develop personalized strategies for leveraging their strengths to achieve success and fulfillment in their personal and professional lives.

The website will provide information about the CliftonStrengths assessment, including how it works and what individuals can expect from the coaching process. It will also allow individuals to search for and connect with certified coaches in their area or online.

The goal of this project is to help individuals gain a better understanding of their unique abilities and learn how to use them to achieve their goals and improve their overall well-being. By providing access to certified coaches and the CliftonStrengths assessment, the website aims to empower individuals to live more fulfilling and satisfying lives.

A more detailed description of the project goes here. Describe the project's purpose, features, and any challenges you faced while building it.

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Usage

To run the project, follow these steps:

1. Navigate to the project directory.
2. Add `.env.local` file to define your global vaiables.
3. Run `npm run dev` to start the development server.

## Project Structure

.husky - _Includes git Hooks used to perform various actions before or after certain git commands executed_

.vscode - _Includes VS Code settings for project_

components - _Includes atomic level components used in the project_

hooks - _Includes custom React hooks that encapsulate reusable logic for the website_

lib - _Includes apihelper mehodsd, MongoDB config and Sanity config_

modules - _Folder contains page wise folder that represents a complete section in the website ,maded by group of components_
home - _home folder inside the modules representsa home page_
Hero.tsx - _Include code for hero section on the home pagve_

pages - _folder includes page wise route_

public - _Includes static files_

services - _often used to contain code related to making API calls, handling responses, and other related logic_

styles - _has only global styles file to define applevel styles_

types - _has type definintions for the website_

utils - _inlcudes constant data related to website_

## Configurations

1. Most of the folder include index file to export components defined inside that folder
2. To commit code, check for linting errors and run test cases, husky is used
3. Use commitlint to check for commit message format
4. Build is done using next during git push.

\*\*\* In Case `git push` or build fails, remove `.next` folder and run `npm run build` again

## Contributing
