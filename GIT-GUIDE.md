# Git Setup and GitHub Push Guide

This guide will help you initialize a Git repository for your Healthcare Medicine Catalog project and push it to GitHub.

## Prerequisites

1. Git must be installed on your system
2. A GitHub account
3. Terminal/command prompt access

## Step 1: Initialize Git Repository

Open your terminal/command prompt and navigate to the project directory:

```bash
cd path/to/healthcare-medicine-catalog
```

Initialize the Git repository:

```bash
git init
```

## Step 2: Add Files to Git

Add all files to the repository:

```bash
git add .
```

## Step 3: Create Initial Commit

Create your first commit with a meaningful message:

```bash
git commit -m "Initial commit: Healthcare Medicine Catalog with Next.js"
```

## Step 4: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Give your repository a name (e.g., "healthcare-medicine-catalog")
4. Optionally add a description
5. Choose if the repository should be Public or Private
6. **Do NOT initialize the repository with a README, .gitignore, or license**
7. Click "Create repository"

## Step 5: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see commands to connect your local repository. It will look something like this:

```bash
git branch -M main
git remote add origin https://github.com/your-username/your-repository-name.git
git push -u origin main
```

Replace `your-username` and `your-repository-name` with your actual GitHub username and repository name.

## Step 6: Push to GitHub

Finally, push your code to GitHub:

```bash
git push -u origin main
```

## Troubleshooting

If you encounter any issues:

1. **Authentication problems**: Use GitHub CLI or SSH keys for authentication
2. **Permission denied**: Make sure you have proper permissions for the repository
3. **Branch name issues**: Ensure you're using the correct branch name (main or master)

## Additional Git Commands

- Check status: `git status`
- View commit history: `git log`
- Check remote: `git remote -v`

Your project should now be successfully pushed to GitHub!