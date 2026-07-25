# Atomenos-website-v1
atomenos website version 1 draft 

# Team Development Guide

Welcome to the project! 

Before writing any code, please read this document completely. Following the same workflow ensures that everyone can work together without conflicts or accidental changes.

---

# Repository Workflow

We use **Git + GitHub** for version control.

**Important Rule:**

> **Never work directly on the `main` branch.**

Every team member must create their own branch before making any changes.

---

# Step 1: Clone the Repository

Clone the repository to your local machine.

```bash
git clone <repository-url>
```

Move into the project folder.

```bash
cd <repository-folder>
```

---

# Step 2: Open the Project

Open the project in your preferred editor (VS Code recommended).

```bash
code .
```

---

# Step 3: Install Dependencies

Install all required packages.

```bash
npm install
```

or

```bash
pnpm install
```

or

```bash
yarn
```

(Use the package manager already being used in the project.)

---

# Step 4: Create Your Own Branch

Before making any changes, create your own branch.

```bash
git checkout -b feature/your-name
```

Examples:

```bash
git checkout -b feature/harish
git checkout -b feature/rahul
git checkout -b feature/kiran
git checkout -b feature/saruk
```

You only need to create your branch once.

---

# Step 5: Start Working

Make your assigned changes only.

Please avoid modifying files that are unrelated to your task.

---

# Step 6: Save Your Changes

Check what has changed.

```bash
git status
```

Add your changes.

```bash
git add .
```

Commit them with a meaningful message.

```bash
git commit -m "Added hero section animations"
```

Examples:

* Fixed navigation menu
* Added contact page
* Updated services section
* Improved responsive layout

Avoid commit messages like:

* update
* changes
* final
* done

---

# Step 7: Push Your Branch

Push your branch to GitHub.

```bash
git push origin feature/your-name
```

Example:

```bash
git push origin feature/harish
```

---

# Step 8: Create a Pull Request

After pushing:

1. Open GitHub.
2. Open the repository.
3. Click **Compare & Pull Request**.
4. Make sure:

   * **Base Branch:** `main`
   * **Compare Branch:** `feature/your-name`
5. Add a short description of what you changed.
6. Submit the Pull Request.

---

# Step 9: Code Review

Do **not** merge your own Pull Request.

I will review:

* Code quality
* UI consistency
* Project structure
* Possible conflicts

If changes are required, I'll leave comments on the Pull Request.

After approval, I will merge it into the `main` branch.

---

# Why We Use Separate Branches

Working on separate branches helps us:

* Prevent accidental changes to the main project.
* Work on multiple features at the same time.
* Review code before merging.
* Roll back changes if needed.
* Keep the project stable.

This is the standard workflow used by professional software teams.

---

# Important Rules

* Never push directly to `main`.
* Always work on your own branch.
* Pull the latest changes before starting new work.
* Write clear commit messages.
* Don't modify someone else's work without discussing it.
* Complete one task before starting another.
* Test your changes before pushing.

---

# Getting the Latest Changes

Before starting work each day, switch to the `main` branch and pull the latest updates.

```bash
git checkout main
git pull origin main
```

Then switch back to your own branch.

```bash
git checkout feature/your-name
```

If needed, bring the latest changes from `main` into your branch.

```bash
git merge main
```

---

# Need Help?

If you run into merge conflicts, Git errors, or anything you're unsure about, ask in the team group before trying random commands. Git has a remarkable talent for remembering every mistake with perfect accuracy, so it's better to ask once than untangle a history full of panic commits.

Let's keep the repository clean, organized, and easy for everyone to work with.

