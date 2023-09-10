# @schornio/strapi-provider-upload-vercel-blob

Install:

`npm i @schornio/strapi-provider-upload-vercel-blob`

Configure:

```ts
export default ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'vercel-blob',
      providerOptions: {
        token: env('BLOB_READ_WRITE_TOKEN'),
      },
    },
  },
  // ...
});
```
