# Modelence App

A full-stack TypeScript application built with the Modelence framework.

## Getting Started

```bash
npm run dev
```

The app will start at `http://localhost:3000`.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Check for linting errors |
| `npm run lint:fix` | Auto-fix linting errors |
| `npm run format` | Format code with Prettier |

## Developer Experience Improvements

This project includes a modern DX setup:

### Code Quality Tools

- **ESLint** - Linting with React, hooks, and TypeScript rules
- **Prettier** - Consistent code formatting (single quotes, trailing commas, 100 char width)
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters only on staged files

### Form Handling

Forms use `react-hook-form` with Zod validation:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(1, 'Required'),
});

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema),
});
```

### UI Components

Custom shadcn-style components in `src/client/components/ui/`:

- **Button** - Multiple variants (default, outline, destructive, ghost, link)
- **Input** - Text input with focus states
- **Textarea** - Multi-line text input
- **Select** - Dropdown select with options
- **Checkbox** - Toggle checkbox
- **Card** - Container with Header, Title, Content, Footer
- **FormField** - Wrapper combining Label + Input + error message
- **Toast** - Notification helpers

### TypeScript Configuration

Strict TypeScript settings for better code quality:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`
- Path alias: `@/*` maps to `./src/*`

## Project Structure

```
src/
├── client/           # React frontend
│   ├── components/   # Reusable UI components
│   ├── pages/        # Route pages
│   ├── lib/          # Utilities
│   └── router.tsx    # Route configuration
│
└── server/           # Node.js backend
    ├── app.ts        # Entry point
    ├── todo/         # Todo module (example)
    ├── example/      # Legacy example module
    └── regenerate/   # Feature module
```

## Learn More

- [Modelence Documentation](https://docs.modelence.com)
- [Modelence GitHub](https://github.com/modelence/modelence)
