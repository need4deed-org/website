# Need4Deed's [frontpage](https://www.need4deed.org)

# Need4Deed is a need based voluntary support for refugees in Berlin

## About the project

The number of people fleeing conflict zones, persecution and human rights violations worldwide has never been as high as it is today. Need4Deed is set to promote the inclusion and integration of refugees in Berlin through the actions of civil society by making volunteering more accessible. We aim to build a sustainable and scalable mechanism for this purpose by connecting volunteers with refugees that are living in accommodation centers in Berlin based on their specific needs.

# Our values

## Equal opportunities

People living under destitute life conditions should be given equal opportunities. The latter includes underserved individuals and groups affected by forced migration.

## Responsibility

Both countries (the state) and civil society, have responsibility towards its underserved communities including those affected by forced migration.

## Migrant-to-migrant support

In particular, groups and individuals who have undergone forced migration could be best understood and supported by others with migration background in the course of their integration process, so that they receive equal opportunities and eventually benefit society themselves.

## Active participation

A migrant-to-migrant support alongside non-migrant support, can both play a key social role by facilitating a more rapid integration process and active participation of the supported communities.

## Technology

Applying technology in the effort to support underserved communities is a key value to make support giving and receiving more inclusive, accessible and scalable.

## Contributing 🤝

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## Background
We use simple react/vite app for landing page, aka [website], which is being served from files on S3 using Amplify
we're also developing a PWA on nextjs for automation of need4deed business processes, this is fe repo. also we use separate repo sdk mostly for sharing of types between fron and backend.
also we plan merging our landing page into the app so in the end there should be frontend, backend, and sdk.
so the website is now kind of frozen in terms of development. it still operates along with legacy backend before we launch the app with the new backend.


## Step 1: Fork the Repository

1. Go to the our repository: [https://gitlab.com/need4deed/website](https://gitlab.com/need4deed/website).
1. Click the **Fork** button in the top-right corner.
1. Choose where to fork the repository (usually your own GitLab account).

See [CONTRIBUTE.md](CONTRIBUTE.md) for the next steps and detailed contribution guidelines.

## Tech Stack 🛠️

- React.js

## Getting Started 🏁

### Prerequisites

- Node.js (v20 or higher)
- yarn

### Installation

#### Please note, that's the instruction for members of the project, if you are not one please check [CONTRIBUTE.md](CONTRIBUTE.md).

1. Clone the repository

```bash
git clone git@gitlab.com:need4deed/website.git
```

2. Install dependencies

```bash
cd website
yarn install
```

3. Create environment file

```bash
cp .env.example .env
```

4. start the development server

```bash
yarn dev
```

5. Optional dependencies to install

- aws

## Unit tests 🧪

```bash
yarn test
```

## Building 🚀

```bash
yarn build
```

## Adding images

```bash
aws s3 sync $YOUR_PATH/website/pictures s3://need4deed-images/images
```

## License 📝

This project is licensed under the Common Clause and the MIT License - see the [LICENSE](LICENSE) file for details.

## Support 💬

- Create an [Issue](https://gitlab.com/need4deed/website/-/issues)
- Join our Slack - ask as for an inivatation
- Email: h4ck@need4deed.org
