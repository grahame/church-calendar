// ex. scripts/build_npm.ts
import { build, emptyDir } from "dnt";

await emptyDir("./npm");

await build({
    entryPoints: ["./cli/index.ts"],
    outDir: "./npm",
    shims: {
        // see JS docs for overview and more options
        deno: true,
    },
    package: {
        // package.json properties
        name: "church-calendar",
        version: Deno.args[0],
        description: "a library for calculating the calendar of the Christian Church",
        license: "LGPL-3.0-or-later",
        repository: {
            type: "git",
            url: "git+https://github.com/grahame/church-calendar.git",
        },
        bugs: {
            url: "https://github.com/grahame/church-calendar/issues",
        },
    },
    postBuild() {
        // steps to run after building and before running the tests
        Deno.copyFileSync("LICENSE", "npm/LICENSE");
        Deno.copyFileSync("README.md", "npm/README.md");
    },
});
