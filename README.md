# MERN Blog App

## Project Overview
A full-stack blog application built using MongoDB, Express, React, and Node.js (MERN). Users can create, read, update, and delete posts.

## Features Implemented
- Create posts with title, content, and optional image
- Read all posts
- Update existing posts
- Delete posts
- Responsive UI

## Setup Instructions

### Backend
1. Navigate to `server` folder
2. Install dependencies: `npm install`
3. Create `.env` based on `.env.example`
4. Run server: `npm run dev`

### Frontend
1. Navigate to `client` folder
2. Install dependencies: `npm install`
3. Run frontend: `npm run dev`
4. Open browser: http://localhost:5173/

## API Documentation
- `GET /api/posts` → Get all posts
- `GET /api/posts/:id` → Get single post
- `POST /api/posts` → Create post
- `PUT /api/posts/:id` → Update post
- `DELETE /api/posts/:id` → Delete post

