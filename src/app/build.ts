import { injectManifest } from "@serwist/build";

injectManifest({
    swSrc: "/src/app/sw.ts",
    swDest: "dist/sw.js",
    globDirectory: "dist/static",
});