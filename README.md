# Eneba's internship task: frontend

## Tech stack
NextJS

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
