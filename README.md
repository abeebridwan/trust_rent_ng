# Vetarent Project

This document provides a comprehensive overview of the Vetarent project, its structure, and how to contribute. It is intended to be a living document that is updated as the project evolves.

## Project Description

Vetarent is Nigeria's only rental platform that verifies both landlords and tenants before any rental occurs. The platform aims to build trust and confidence in the rental market by eliminating fraud.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/) (v15)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand)
*   **Data Fetching:** [TanStack Query](https://tanstack.com/query/latest)
*   **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
*   **Linting:** [ESLint](https://eslint.org/)
*   **PWA:** [@serwist/next](https://serwist.pages.dev/docs/next/getting-started)

## Project Structure

```
/home/olumide/Desktop/trust_rent_ng/
├───.gitignore
├───next.config.ts
├───package.json
├───README.md
├───public/                 # Static assets (images, fonts, etc.)
└───src/
    ├───app/                # Next.js app directory (pages and layouts)
    ├───assets/               # Project-specific assets
    ├───components/           # Reusable React components
    │   ├───ui/               # shadcn/ui components
    │   └───...               # Custom components
    ├───lib/                  # Utility functions and libraries
    │   ├───store.ts          # Zustand state management store
    │   └───utils.ts          # General utility functions
    └───providers/            # React context providers
```

### Key Directories

*   `src/app`: Contains the core application logic, including pages and layouts.
*   `src/components`: Houses all reusable UI components. Components from `shadcn/ui` are in `src/components/ui`.
*   `src/lib`: Contains shared utility functions and the Zustand store (`store.ts`).
*   `src/assets`: Contains all static assets like images and icons.
*   `src/providers`: Contains the application's context providers. Currently, this includes providers for tooltips and toast notifications (`Toaster` and `Sonner`).

## State Management (Zustand)

The project uses Zustand for global state management. The store is defined in `src/lib/store.ts`.

**Example Usage:**

```typescript
import { useStore } from '@/lib/store';

const MyComponent = () => {
  const { propertyType, setPropertyType } = useStore();

  // ...
};
```

To add new state:

1.  Update the `StoreState` interface in `src/lib/store.ts`.
2.  Add the new state and actions to the `create` function.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production.
*   `npm run start`: Starts a production server.
*   `npm run lint`: Lints the codebase using ESLint.

## Progressive Web App (PWA)

The application is a Progressive Web App (PWA), configured using `@serwist/next`. This enables offline capabilities and allows users to install the app on their devices.

The PWA configuration is located in `next.config.mjs`. The service worker is located at `src/app/sw.ts` and the web app manifest is in `src/app/manifest.json`.

## Future Development

*This section should be updated with information about new features, components, or changes to the project structure.*

- Implemented Progressive Web App (PWA) functionality using `@serwist/next`.