import { del, put } from '@vercel/blob';

type StrapiUploadFile = {
  name: string;
  url: string;
};

type BufferedStrapiUploadFile = StrapiUploadFile & {
  buffer: Buffer;
};

type StreamedStrapiUploadFile = StrapiUploadFile & {
  stream: ReadableStream;
};

export const init = ({ token }: { token?: string }) => {
  return {
    async upload(file: BufferedStrapiUploadFile) {
      const result = await put(file.name, file.buffer, {
        access: 'public',
        token,
      });
      file.url = result.url;
    },

    async uploadStream(file: StreamedStrapiUploadFile) {
      const result = await put(file.name, file.stream, {
        access: 'public',
        token,
      });
      file.url = result.url;
    },

    async delete(file: StrapiUploadFile) {
      del(file.url, { token });
    },
  };
};
