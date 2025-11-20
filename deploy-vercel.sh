#!/bin/bash

# Deployment script for Vercel

echo "Starting deployment to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "Vercel CLI could not be found. Installing..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "Deploying application..."
vercel --prod

echo "Deployment completed!"