"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const blob_1 = require("@vercel/blob");
const init = ({ token }) => {
    return {
        async upload(file) {
            const result = await (0, blob_1.put)(file.name, file.buffer, {
                access: "public",
                token,
            });
            file.url = result.url;
        },
        async uploadStream(file) {
            const result = await (0, blob_1.put)(file.name, file.stream, {
                access: "public",
                token,
            });
            file.url = result.url;
        },
        async delete(file) {
            (0, blob_1.del)(file.url, { token });
        },
    };
};
exports.init = init;
