# Contributing to Need4Deed's frontpage

We are lucky to have you! 🎉👍

The following is a set of guidelines for contributing to this project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a merge request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Merge Request](#merge-request)
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

Unsure where to begin contributing? You can start by looking through `good-first-issue` labeled issues.

### Merge request

Step 1: Fork the Repository

1. Go to the our repository: [https://gitlab.com/need4deed/website](https://gitlab.com/need4deed/website).
1. Click the **Fork** button in the top-right corner.
1. Choose where to fork the repository (usually your own GitLab account).

Step 2: Clone Your Forked Repository

1. Go to your forked repository (e.g., `https://gitlab.com/your-username/website`).
1. Click the **Clone** button and copy it e.g. with HTTPS URL.
   ```bash
   git clone https://gitlab.com/your-username/website.git
   ```
1. Navigate into the cloned repository:

   ```bash
   cd website
   ```

   Step 3: Add the Original Repository as a Remote

1. Add the original repository as a remote called `upstream`:
   ```bash
   git remote add upstream https://gitlab.com/need4deed/website.git
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
   The branch should titled be your_nick-feature-title

Step 6: Commit and Push Your Changes

1. Stage your changes:
   ```bash
   git add .
   ```
1. Commit your changes - as in the #git-commit-message section
   ```bash
   git commit -m "Your commit message"
   ```
1. Push your changes to your forked repository:
   ```bash
   git push origin your-branch-name
   ```

Step 7: Create a Merge Request (MR)

1. Go to your forked repository on GitLab: `https://gitlab.com/your-username/website`.
1. Click on **Merge Requests** in the left sidebar.
1. Click **New Merge Request**.
1. Select your branch (`your-branch-name`) as the **Source Branch** and `main` as the **Target Branch**.
1. Fill in the Merge Request template
1. Click **Create Merge Request**.
1. Let us know about the awaiting review!

### Reporting Bugs

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).

#### Before Submitting A Bug Report

- Please check [check](https://gitlab.com/need4deed/website/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Any&first_page_size=20) if the problem has already been reported.

#### How Do I Submit A Bug Report?

Bugs are tracked as [GitHub issues](https://gitlab.com/need4deed/website/-/issues). Create a bug issue. All the necesary info should be in the bug template.

### Suggesting features

Feature suggestions are also tracked as [GitHub issues](https://gitlab.com/need4deed/website/-/issues). Please refer to the feature template.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` when improving the format/structure of the code
  - 🐎 `:racehorse:` when improving performance
  - 📝 `:memo:` when writing docs
  - 🐛 `:bug:` when fixing a bug
  - 🔥 `:fire:` when removing code or files

### JavaScript Styleguide

Please refer to the linter.

## License

By contributing, you agree that your contributions will be licensed under its [Commons Clause + MIT License](LICENSE).

## Questions?

Don't hesitate to reach out if you have any questions! You can:

- Open an issue
- Reach out to [@maintainer](https://github.com/[https://gitlab.com/szymon.skorupinski.need4deed])
- Join our Slack (please request an access)

Any contributions are welcome! 🙏
