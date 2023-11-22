// deno-lint-ignore-file no-explicit-any
import Festivals from "../western/festivals/index.ts";
import { path_mod, fs_mod } from "../libs.ts";

const article_set = () => {
    const wiki_articles = new Set<string>();
    for (const festival of Festivals) {
        if (!festival.wikipedia_article_titles) {
            continue;
        }
        for (const wiki_article of festival.wikipedia_article_titles) {
            wiki_articles.add(wiki_article.replace(/ /g, "_"));
        }
    }
    return wiki_articles;
};

const get_extract = async (article: string) => {
    const url = new URL("https://en.wikipedia.org/w/api.php");
    url.searchParams.set("format", "json");
    url.searchParams.set("action", "query");
    url.searchParams.set("prop", "pageimages|extracts");
    url.searchParams.set("exintro", "");
    url.searchParams.set("explaintext", "");
    url.searchParams.set("redirects", "1");
    url.searchParams.set("titles", article);
    const api_url = url.toString();
    const resp = await fetch(api_url);
    const json = await resp.json();
    if (json && Object.keys(json).length === 0) {
        return;
    }
    return {
        captured: new Date().toISOString(),
        article,
        api_url,
        article_url: `https://en.wikipedia.org/wiki/${article}`,
        wikipedia_data: json,
    };
};

const scan = async (outdir: string) => {
    const set = article_set();
    for (const article of set) {
        const filename = path_mod.join(outdir, `${btoa(article)}.json`);
        if (fs_mod.existsSync(filename)) {
            continue;
        }
        const extract = await get_extract(article);
        if (extract) {
            // write extract to file
            Deno.writeTextFileSync(filename, JSON.stringify(extract));
        } else {
            console.log(`no extract for ${article}`);
        }
    }
};

const combine = (outdir: string, outfile: string) => {
    const files = fs_mod.expandGlobSync(path_mod.join(outdir, "*.json"));
    const combined: { [key: string]: any } = {};
    for (const file of files) {
        const data: any = JSON.parse(Deno.readTextFileSync(file.path));
        const article: string = data.article;
        combined[article] = data;
    }
    Deno.writeTextFileSync(outfile, JSON.stringify(combined));
};

const main = async () => {
    const usage = () => console.log("Usage: wikiscan <outdir> <outfile>");
    const outdir = Deno.args[0];
    if (!outdir) {
        return usage();
    }
    const outfile = Deno.args[1];
    if (!outfile) {
        return usage();
    }
    await scan(outdir);
    combine(outdir, outfile);
};

await main();
