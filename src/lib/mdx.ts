import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

export type MdxCollection =
  | "blog"
  | "neighborhoods"
  | "situations"
  | "case-studies";

export interface MdxDoc<T = Record<string, unknown>> {
  slug: string;
  frontmatter: T;
  content: string;
}

function dirFor(collection: MdxCollection): string {
  return path.join(CONTENT_ROOT, collection);
}

export function listSlugs(collection: MdxCollection): string[] {
  const dir = dirFor(collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getDoc<T = Record<string, unknown>>(
  collection: MdxCollection,
  slug: string
): MdxDoc<T> | null {
  const file = path.join(dirFor(collection), `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as T, content };
}

export function listDocs<T = Record<string, unknown>>(
  collection: MdxCollection
): MdxDoc<T>[] {
  return listSlugs(collection)
    .map((s) => getDoc<T>(collection, s))
    .filter((d): d is MdxDoc<T> => d !== null);
}
