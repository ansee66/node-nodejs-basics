import { cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    const __dirname  = dirname(fileURLToPath(import.meta.url));
    const source  = join(__dirname, 'files');
    const target = join(__dirname, 'files_copy');

    try {
        await cp(source, target, { recursive: true, force: false, errorOnExist: true });
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
