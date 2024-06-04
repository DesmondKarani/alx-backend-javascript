#!/bin/bash

# Define variables
commit_message="Automated commit message"
branch="main"

# Check if a commit message was provided as an argument
if [ $# -eq 1 ]; then
    commit_message=$1
fi

# Add all changes to git
git add .

# Commit changes with the specified message
git commit -m "$commit_message"

# Push changes to the specified branch
git push origin $branch
