import { promises as fs } from 'fs';
import path from 'path';

const directory = path.join(process.cwd(), 'src/contents/technologies');

export interface TechnologyContent {
  title: string;
  /**
   * @returns {string} The path of the image.
   */
  icon: string;
}

let cache: TechnologyContent[] | null = null;

export async function getTechnologyContents(): Promise<TechnologyContent[]> {
  if (cache) return cache;
  else cache = [];

  const filenames = await fs.readdir(directory);
  for (const filename of filenames) {
    const content = await fs.readFile(path.join(directory, filename));
    cache.push(JSON.parse(content.toString('utf-8')));
  }

  return cache;
}
