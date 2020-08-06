# Chario Go Documentation

# Introduction

Chario go is an open source groceries and food delivery platform

# Getting Started & Installation

```bash
yarn
```

<br><br><br>

## Admin

For starting the admin dashboard part with corresponding api data run below commands.

```bash
# for dev mode run below command
yarn dev:admin

```

## Shop

### Configuration

1. Go to `/packages/shop` folder.
1. Copy the contents of `.env.local.sample` into a new file called `.env.local`
1. Put Your Stripe public api key in the `/packages/shop/.env.local` file's `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` key.

For starting the shop part with corresponding api run below commands.

```bash
# for dev mode run below command
yarn dev:shop

```

### If you want to test your production build admin or shop in local environment then run the below commands.

## Admin

```bash
# build admin for production
yarn build:admin

# build api which in needed for local testing
yarn build:api

#start admin in production mode
yarn serve:admin
```

<br><br><br><br><br><br><br>

## Shop

```bash
# build shop for production
yarn build:shop

# build api which in needed for local testing
yarn build:api

# start shop in production mode
yarn serve:shop
```

# Folder Structure & Customization

`/packages/admin` : In this portion all the admin dashboard related coding and functions.

`/packages/shop` : All the shop related coding and functions.

`/packages/api` : API related code for both admin and shop section.

admin related api codes are in `admin` folder

shop related codes are in `shop` folder

# Configuration & Deployment

## [vercel.com](https://vercel.com/) (previously known as now.sh)

If you want to host the template in vercel.com then follow the below command

### API

- Navigate to `packages/api`
- Now run below command

```bash
vercel
```

<br><br><br><br>

### Admin

- After deploying the api you will get the api endpoint url. Put that url in the `packages/admin/.env`
- also need to put it within `vercel.json` .

```
REACT_APP_API_URL={put_your_api_url_here}/admin/graphql;
```

- Navigate to `packages/admin`
- Now run below command

```bash
vercel
```

### Shop

- After deploying the api you will get the api endpoint url. Put that url in the `packages/shop/.env.local` and `vercel.json` file.

```.env.local
NEXT_PUBLIC_STRIPE_PUBLIC_KEY= 'put_your_stripe_public_key'

NEXT_PUBLIC_GRAPHQL_API_ENDPOINT= '{put_your_api_url_here.}/shop/graphql'
```

- Navigate to `packages/shop`
- Now run below command

```
vercel
```

## NOTE: for deploying to `vercel` you need to install `vercel-cli` on your machine for more information please visit [here](https://vercel.com/docs/cli?query=cli#introduction/vercel-cli-reference)
