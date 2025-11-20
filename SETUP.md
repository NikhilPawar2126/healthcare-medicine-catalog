# Setup Guide

This guide provides detailed instructions for setting up the Healthcare Medicine Catalog application locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **pnpm** (package manager)
   - Install with: `npm install -g pnpm`
   - Verify installation: `pnpm --version`

3. **Git**
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation: `git --version`

## Cloning the Repository

1. Open your terminal or command prompt
2. Navigate to the directory where you want to clone the project:
   ```bash
   cd path/to/your/projects
   ```

3. Clone the repository:
   ```bash
   git clone https://github.com/NikhilPawar2126/healthcare-medicine-catalog.git
   ```

4. Navigate to the project directory:
   ```bash
   cd healthcare-medicine-catalog
   ```

## Installing Dependencies

Install all required dependencies using pnpm:
```bash
pnpm install
```

This will install all dependencies listed in `package.json`.

## Running the Development Server

Start the development server:
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

The development server features:
- Hot reloading (changes reflect immediately)
- Error reporting
- Fast refresh

## Building for Production

To create a production build:
```bash
pnpm build
```

This command:
- Compiles TypeScript to JavaScript
- Optimizes assets
- Creates an optimized build in the `.next` directory

## Running the Production Build

After building, you can run the production version locally:
```bash
pnpm start
```

This starts a local server hosting the production build.

## Project Structure

```
healthcare-medicine-catalog/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── lib/                 # Utility functions and data
├── public/              # Static assets
├── styles/              # Global styles
├── .github/workflows/   # GitHub Actions workflows
├── .gitignore           # Git ignored files
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies and scripts
├── pnpm-lock.yaml       # Dependency lock file
├── postcss.config.mjs   # PostCSS configuration
├── README.md            # Project documentation
├── SETUP.md             # This file
├── DEPLOYMENT-GUIDE.md  # Deployment instructions
├── deploy-vercel.sh     # Unix deployment script
├── deploy-vercel.bat    # Windows deployment script
└── tsconfig.json        # TypeScript configuration
```

## Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Creates a production build
- `pnpm start` - Starts the production server
- `pnpm lint` - Runs ESLint to check for code issues

## Troubleshooting

### Common Issues

1. **"pnpm: command not found"**
   - Solution: Install pnpm globally with `npm install -g pnpm`

2. **Node.js version issues**
   - Solution: Ensure you're using Node.js 18 or higher

3. **Port already in use**
   - Solution: The app will automatically use another port, or you can specify a port:
     ```bash
     pnpm dev --port 3001
     ```

4. **Dependency installation errors**
   - Solution: Clear pnpm cache and reinstall:
     ```bash
     pnpm store prune
     pnpm install
     ```

### Development Tips

1. **Code Structure**: The project uses Next.js App Router with a component-based architecture
2. **Data**: Medicine data is stored in `lib/data.ts` for easy modification
3. **Styling**: Uses Tailwind CSS with shadcn/ui components
4. **Type Safety**: Full TypeScript support throughout the project

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request

## Support

For issues or questions:
1. Check existing issues on GitHub
2. Create a new issue with detailed information
3. Refer to the documentation in README.md