[![CircleCI](https://circleci.com/gh/MustaRohman/github-user-favourite-language/tree/main.svg?style=svg)](https://circleci.com/gh/MustaRohman/github-user-favourite-language/tree/main)

A simple user interface 

## Getting Started

First, run the development server:

1. Clone project
2. Create .env.local file with a GitHub API token assigned to `NEXT_PUBLIC_API_TOKEN` like so: 
   ```
   NEXT_PUBLIC_API_TOKEN=XXXXXXXXX
   ```
3. `cd` into project repository and run `npm install`
4. Run `npm run dev`
5.Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
6. Enter GitHub username into text input and press Enter

# Tech Stack
- NextJS
- Styled Components
- Jest
- React Testing Library
- OctoKit GitHub API client
