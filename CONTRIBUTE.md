# Contributing to Need4Deed's frontpage

We are lucky to have you! 🎉👍

The following is a set of guidelines for contributing to this project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a merge request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [First Merge Request](#first-merge-request)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting features](#suggesting-features)
  - [Pull Requests](#pull-requests)
- [Styleguides](#styleguides)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript Styleguide](#javascript-styleguide)
- [License](#license)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through `good-first-issue` labeled [issues](https://github.com/need4deed-org/website/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22)

### First Merge Request

Step 1: Fork the Repository

1. Go to the our repository: [https://github.com/need4deed-org/website](https://github.com/need4deed-org/website).
1. Click the **Fork** button in the top-right corner.
1. Choose where to fork the repository (usually your own GitHub account).

Step 2: Clone Your Forked Repository

1. Go to your forked repository (e.g., `https://github.com/your-username/website`).
1. Click the **Clone** button and copy it e.g. with HTTPS URL.
   ```bash
   git clone git@github.com:need4deed-org/website.git
   ```
1. Navigate into the cloned repository:

   ```bash
   cd website
   ```

Step 3: Add the Original Repository as a Remote

1. Add the original repository as a remote called `upstream`:
   ```bash
   git remote add upstream https://github.com/need4deed-org/website.git
   ```
1. Verify the remotes:

   ```bash
   git remote -v
   ```

   You should see:

   - `origin` → Your forked repository.
   - `upstream` → The original repository.

1. Create a new branch for your changes:
   ```bash
   git checkout -b your-branch-name
   ```
   The branch should titled be issue#-your_nick-feature-title, like `123-johndoe-update-readme`

Step 4: Commit and Push Your Changes

1. Stage your changes:
   ```bash
   git add .
   ```
1. Commit your changes - as in the [git commit message](#git-commit-message) section
   ```bash
   git commit -m "Your commit message"
   ```
1. Push your changes to your forked repository:
   ```bash
   git push origin your-branch-name
   ```

Step 5: Create a pull request (PR)

1. Go to your forked repository on GitHub: `https://github.com/your-username/website`.
2. Click on **Pull requests** in the left sidebar.
3. Click **New pull request**.
4. Select your branch (`your-branch-name`) on the right and make sure `develop` is on the left.
5. Click **Create pull request**.
6. Fill in the Pull Request template
7. Click **Create pull request**.
8. Let us know about the awaiting review!

### Reporting Bugs

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).

#### Before Submitting A Bug Report

- Please check [already reported bugs](https://github.com/need4deed-org/website/issues?q=is%3Aissue%20state%3Aopen%20type%3ABug) if the problem has already been reported.

#### How Do I Submit A Bug Report?

Bugs are tracked as [GitHub issues](https://github.com/need4deed-org/website/issues). Create a bug issue. All the necessary info should be in the bug template.

### Suggesting features

Feature suggestions are also tracked as [GitHub issues](https://github.com/need4deed-org/website/issues). Please refer to the feature template.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests can be placed after the first line
- Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` when improving the format/structure of the code
  - 🐎 `:racehorse:` when improving performance
  - 📝 `:memo:` when writing docs
  - 🐛 `:bug:` when fixing a bug
  - 🔥 `:fire:` when removing code or files

Please keep commits reasonably scoped, e.g. a single commit containing all the diffs is hard to comprehend.

### JavaScript Styleguide

Please refer to the linter.

## License

By contributing, you agree that your contributions will be licensed under its [Commons Clause + MIT License](LICENSE).

## Questions?

Don't hesitate to reach out if you have any questions! You can:

- Open an issue
- Reach out to [@need4deed](https://github.com/need4deed)
- Join our Slack (please request an access dev@need4deed.org)

Any contributions are welcome! 🙏
