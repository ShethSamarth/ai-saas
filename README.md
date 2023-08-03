# SaaS AI Platform

This is a repository for SaaS AI Platform: Next.js 13.4, React, TailwindCSS, Stripe, ShadCN UI, MySQL, AWS, Prisma.

Key Features:

- Conversation Generation Tool (Open AI)
- Code Generation Tool (Open AI)
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Music Generation Tool (Replicate AI)
- Stripe monthly subscription
- MySQL database deployed on AWS
- Credential authentication with Clerk
- Google authentication with Clerk
- Client form validation and handling using react-hook-form
- Server error handling with react-hot-toast
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices

# Final Version

To visit the website, [click here.](https://ai-saas-ss.vercel.app)

### Cloning the repository

```shell
git clone https://github.com/ShethSamarth/genius-ai-saas.git
```

### Install packages

```shell
npm install
```

### Setup prisma

```shell
npx prisma generate
npx prisma db push
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"

```

### Start the app

```shell
npm run dev
```
