# Eneba's internship task: frontend

>[!Important]
> This project is a non-commercial demo frontend built as part of a technical assignment for Eneba. **All trademarks and images belong to their respective owners**.

>[!CAUTION]
> Please note the frontend application will only display images that originate from https://imgproxy.eneba.games/ and https://static.eneba.games. As this project is a non-commercial demo backend built as part of a technical assignment for Eneba, I used Eneba’s public image CDN for realism, but the project is non-commercial and solely built for evaluation. **All trademarks and images belong to their respective owners**.

## Tech stack
- NextJS

## Description
This frontend application was built with NextJS and Tailwind CSS and thus is quite simple, it only contains one page and just a few custom built components. The main page and the custom built components are all rendered on the client device. The search bar queries the backend via the /list endpoint and a search query.

```
https://BACKEND_API/list?search=QUERY
```

Then, the response gets converted into Product components, which are displayed in a grid.

## Running the frontend
This repository contains docker files for easy setup.

The following command installs dependencies and starts the application on port ***6004***:
```bash
sudo docker-compose up --build
```
