# replit.md

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend), featuring a modern UI component library and PostgreSQL database integration. The application uses a monorepo structure with shared schemas and types, designed for scalable web development with contact form functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas shared between frontend and backend
- **Session Management**: PostgreSQL-based session storage
- **Development**: tsx for TypeScript execution in development

### Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/ui/  # Shadcn/ui components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and query client
│   │   └── pages/         # Route components
├── server/                # Backend Express application
├── shared/               # Shared schemas and types
└── migrations/          # Database migration files
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Migration Strategy**: Drizzle Kit for schema migrations
- **Connection**: Neon Database serverless PostgreSQL

### API Layer
- **Contact Form Endpoint**: `/api/contact` for form submissions
- **Validation**: Zod schemas ensure data integrity
- **Error Handling**: Centralized error middleware
- **Storage**: Memory storage implementation with interface for easy database swapping

### UI Components
- **Design System**: Shadcn/ui with "new-york" style variant
- **Theme**: Neutral base color with CSS variables for theming
- **Components**: Comprehensive set including forms, dialogs, toasts, etc.
- **Responsive**: Mobile-first design with responsive breakpoints

### Development Tools
- **Hot Reload**: Vite HMR for frontend, tsx for backend
- **Error Overlay**: Runtime error modal for development
- **Code Quality**: TypeScript strict mode enabled
- **Path Aliases**: Configured for clean imports

## Data Flow

1. **User Interaction**: Users interact with React components
2. **Form Submission**: Contact forms use React Hook Form with Zod validation
3. **API Request**: TanStack Query manages HTTP requests to Express backend
4. **Validation**: Server validates requests using shared Zod schemas
5. **Storage**: Data stored using storage interface (currently memory-based)
6. **Response**: JSON responses sent back to frontend
7. **UI Update**: TanStack Query updates UI state automatically

## External Dependencies

### Frontend Dependencies
- **UI**: Radix UI primitives, Lucide React icons
- **State**: TanStack Query for server state
- **Forms**: React Hook Form, Hookform Resolvers
- **Styling**: Tailwind CSS, Class Variance Authority
- **Utils**: clsx, date-fns, embla-carousel

### Backend Dependencies
- **Database**: Drizzle ORM, Neon Database serverless
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod for schema validation
- **Development**: tsx, esbuild for TypeScript execution

### Build Dependencies
- **Frontend**: Vite, React plugin
- **Backend**: esbuild for production builds
- **Database**: Drizzle Kit for migrations
- **Development**: Replit-specific plugins for enhanced development experience

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend assets
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Development Mode
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with auto-restart on changes
- **Database**: Drizzle push for schema synchronization
- **Environment**: NODE_ENV=development for development-specific features

### Environment Requirements
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Session Configuration**: PostgreSQL-based session storage

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```