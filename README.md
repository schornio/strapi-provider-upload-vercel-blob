# @schornio/strapi-provider-upload-vercel-blob

Install:

```
npm i @schornio/strapi-provider-upload-vercel-blob
```

Configure:

```ts
// File: /config/plugins.ts
export default ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: '@schornio/strapi-provider-upload-vercel-blob',
      providerOptions: {
        token: env('BLOB_READ_WRITE_TOKEN'),
      },
    },
  },
  // ...
});
```
