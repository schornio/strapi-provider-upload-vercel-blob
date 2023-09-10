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

Update security policy:

(From: https://github.com/strapi/strapi/blob/main/packages/providers/upload-aws-s3/README.md#security-middleware-configuration)

```ts
// File: /config/middlewares.ts
export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'INSERT_HERE.public.blob.vercel-storage.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'INSERT_HERE.public.blob.vercel-storage.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```
