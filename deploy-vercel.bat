@echo off
title Deploy to Vercel

echo Starting deployment to Vercel...

REM Check if vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Vercel CLI not found. Installing...
    npm install -g vercel
)

REM Deploy to Vercel
echo Deploying application...
vercel --prod

echo Deployment completed!
pause