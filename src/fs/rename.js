import { rename as fsRename } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const __dirname  = dirname(fileURLToPath(import.meta.url));
    const oldFilePath = join(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = join(__dirname, 'files', 'properFilename.md');
    
    try {
        await fsRename(oldFilePath, newFilePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();