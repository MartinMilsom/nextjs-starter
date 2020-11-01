# nextjs-starter

##### Functionality

Scaffolded to have apis that are available from the outside, and some internal. Internal ones are in a subfolder called "client".

I have configured nextauth.js to use a Google account provider on the client apis. These are persisted in mongo.

#### Deployment

Tests and linter will also run on build.

#### Environment

Locally, I have a `.env.local` file which has sensitive things in, such as google account and db connection
On production, Vercel provides a way of storing these environment variables (encrypted).

## Next steps

Need to secure the api app with a simple auth key.
