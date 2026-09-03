# QuickBlog

QuickBlog is a full-stack blogging platform. Visitors can browse published articles, filter them by category, search by title or category, read individual posts, and leave comments for moderation. Administrators can sign in to manage blog posts and review comments from a dashboard.

## Features

### For visitors

- Responsive home page with navigation, header, newsletter section, and footer
- Blog cards with category filtering and title/category search
- Individual blog pages with formatted rich-text content, publication date, and comments
- Comment submission with approval before comments become public
- Toast notifications and loading states

### For administrators

- JWT-protected admin login
- Dashboard with blog, comment, and draft counts
- Recent blog overview
- Create posts with a Quill rich-text editor, thumbnail upload, category, and publish status
- Publish or unpublish posts
- Delete posts and their related comments
- Approve or delete comments

## Technology Stack

### Frontend

- React 19 with Vite
- React Router for public and admin navigation
- Tailwind CSS for styling
- Axios for API requests
- Quill for rich-text editing
- Motion for interface animations
- React Hot Toast for notifications

### Backend

- Node.js with Express
- MongoDB with Mongoose
- JWT authentication for admin routes
- Multer for image uploads
- ImageKit for hosted and optimized blog images
- Google Gemini SDK configuration for AI functionality

## Project Structure

```text
quickblog/
├── client/
│   ├── src/
│   │   ├── assets/              Images, icons, categories, and rich-text styles
│   │   ├── components/          Shared public and admin UI components
│   │   ├── context/             Shared Axios client, blogs, search, and auth state
│   │   ├── pages/               Public blog pages and admin views
│   │   ├── App.jsx              Application routes
│   │   └── main.jsx             React entry point and providers
│   └── package.json
├── server/
│   ├── configs/                 Database, Gemini, and ImageKit setup
│   ├── controllers/             Blog and admin request handlers
│   ├── middleware/              JWT authentication and multipart upload handling
│   ├── models/                  Blog and comment schemas
│   ├── routes/                  Blog and admin API routes
│   ├── server.js                Express server entry point
│   └── package.json
└── README.md
```

## Frontend Components and Pages

- `Navbar`, `Header`, `Footer`, and `Newsletter`: shared public-site layout and content sections.
- `BlogList` and `BlogCard`: category filtering, search filtering, and blog previews.
- `Blog`: full article view, approved comments, comment submission, and social links.
- `Loader`: loading feedback while blog data is fetched.
- `AppContext`: global blog data, search input, Axios configuration, navigation, and admin token state.
- `Login`: administrator authentication form.
- `Layout` and `Sidebar`: protected admin shell and navigation.
- `Dashboard`: admin metrics and recent posts.
- `AddBlog`: post creation form with image upload and Quill editor.
- `ListBlog` and `BlogTableItem`: post management and publish/delete actions.
- `Comments` and `CommentTableItem`: comment review, approval, and deletion.

## API Overview

The backend runs under `/api`.

| Method | Endpoint | Purpose | Auth |
| --- | --- | --- | --- |
| `POST` | `/api/admin/login` | Authenticate an administrator | No |
| `GET` | `/api/admin/dashboard` | Get dashboard metrics | JWT |
| `GET` | `/api/admin/blogs` | Get all posts for management | JWT |
| `GET` | `/api/admin/comments` | Get all comments for moderation | JWT |
| `POST` | `/api/admin/approve-comment` | Approve a comment | JWT |
| `POST` | `/api/admin/delete-comment` | Delete a comment | JWT |
| `GET` | `/api/blog/all` | Get published posts | No |
| `GET` | `/api/blog/:blogId` | Get one post | No |
| `POST` | `/api/blog/comments` | Get approved comments for a post | No |
| `POST` | `/api/blog/add-comment` | Submit a comment for review | No |
| `POST` | `/api/blog/add` | Create a post with an image | JWT |
| `POST` | `/api/blog/toggle-publish` | Toggle post publication | JWT |
| `POST` | `/api/blog/delete` | Delete a post and its comments | JWT |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- A MongoDB database
- An ImageKit account for blog images
- Configured administrator credentials

### 1. Install dependencies

Open two terminals from the repository root:

```bash
cd server
npm install
```

```bash
cd client
npm install
```

### 2. Run the application

Start the API server:

```bash
cd server
npm run server
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

Open the Vite URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

### Client

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

### Server

```bash
npm run server    # Start the server with nodemon
npm start         # Start the server with Node.js
```

## Admin Access

1. Open `/admin` in the frontend.
2. Sign in with the administrator credentials configured for the server.
3. Use the dashboard sidebar to manage posts and comments.

The admin token is stored in browser local storage and sent with protected API requests.
