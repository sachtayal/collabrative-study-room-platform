# Collaborative Study Room Platform

A real-time collaborative study platform designed to help students stay focused, study together, and track their productivity. Users can create or join virtual study rooms, communicate through real-time chat, collaborate using synchronized Pomodoro timers, and monitor their study progress through a personalized dashboard.

## Live Demo

[🚀 Visit Collaborative Study Room Platform](https://collaborative-study-room-five.vercel.app)


## Key Features

### Authentication & User Management
- Email and password authentication using Supabase Auth.
- Protected application routes.
- Automatic profile creation for registered users.

### Study Room Management
- Create and join public or private study rooms.
- Browse available rooms.
- Invite users through shareable room links.
- Join rooms automatically using invitation links.
- Leave rooms whenever needed.

### Real-Time Collaboration
- Real-time room chat powered by Supabase Realtime.
- Online presence indicators for room members.
- Synchronized Pomodoro timer across room participants.
- Creator-only timer controls.

### Pomodoro Productivity System
- 25-minute focused study sessions.
- 5-minute break cycles.
- Start, pause, and stop controls.
- Synchronized timer state for room participants.

### Personal Dashboard & Analytics
- Track total study hours.
- View weekly study sessions.
- Monitor rooms joined.
- Review recent study activity.
- Track session participants and durations.

### Leaderboard
- Ranking of top studiers based on total study time.
- Encourages consistency and collaborative productivity.

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | Next.js 14, TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui-style components |
| Authentication | Supabase Auth |
| Database | Supabase PostgreSQL |
| Real-Time Features | Supabase Realtime |
| Deployment Target | Vercel |

## Application Architecture

- **Next.js:** Handles the frontend, routing, and application structure.
- **TypeScript:** Provides type safety and maintainable code.
- **Supabase Auth:** Manages user registration and authentication.
- **PostgreSQL:** Stores user profiles, study rooms, memberships, and study session data.
- **Supabase Realtime:** Supports live chat, online presence, and synchronized room functionality.
- **Tailwind CSS:** Provides responsive styling and UI design.

## Installation & Setup

### Prerequisites
- Node.js
- npm
- A Supabase account

### 1. Clone the Repository

```bash
git clone https://github.com/sachtayal/collabrative-study-room-platform.git
cd collabrative-study-room-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Configure Supabase

Run the SQL script provided in `supabase/schema.sql` inside your Supabase SQL Editor.

### 5. Start the Development Server

```bash
npm run dev
```

### 6. Open the Application

Visit:

```text
http://localhost:3000
```

## Screenshots

Add screenshots of the following application sections:

- Authentication and registration
- Study room dashboard
- Room management
- Real-time chat
- Synchronized Pomodoro timer
- Personal productivity dashboard
- Study leaderboard

## Future Improvements

- Google OAuth authentication.
- Video and audio collaboration.
- AI-powered study recommendations.
- Advanced productivity analytics.
- Study goals and progress tracking.

## Author

**Sach Tayal**

GitHub: https://github.com/sachtayal

---

Built with Next.js, TypeScript, and Supabase.
