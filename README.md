# Nextauth on NextJS with Mongoose Model

This example shows how you can use a Mongoose model and connection to support with Next and Next Auth application.

## How to use

I have setted all up. Just do:

```bash
git clone https://github.com/foysalremon/nextauth-mongodb-mongoose.git
```

## Configuration

### Step 1. Get the connection string of your MongoDB server

In the case of MongoDB Atlas, it should be a string like this:

```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

For more details, follow this [MongoDB Guide](https://docs.mongodb.com/guides/server/drivers/) on how to connect to MongoDB.

### Step 2. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local` (Remove which are not needed there):

- `MONGODB_URI` should be the MongoDB connection string you got from step 1.
- `SECRET` anything string, can [generate one from here](https://generate-secret.vercel.app/).
- `EMAIL_SERVER` checout [email provider on next auth](https://next-auth.js.org/providers/email).
- `EMAIL_FROM` checout [email provider on next auth](https://next-auth.js.org/providers/email).
- `GOOGLE_CLIENT_ID` checout [google provider on next auth](https://next-auth.js.org/providers/google).
- `GOOGLE_CLIENT_SECRET` checout [google provider on next auth](https://next-auth.js.org/providers/google).
- `FACEBOOK_CLIENT_ID` checout [facebook provider on next auth](https://next-auth.js.org/providers/facebook).
- `FACEBOOK_CLIENT_SECRET` checout [facebook provider on next auth](https://next-auth.js.org/providers/facebook).
- `GITHUB_CLIENT_ID` checout [github provider on next auth](https://next-auth.js.org/providers/github).
- `GITHUB_CLIENT_SECRET` checout [github provider on next auth](https://next-auth.js.org/providers/github).

### Step 3. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!
