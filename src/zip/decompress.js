import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';

const decompress = async () => {
    const __dirname  = dirname(fileURLToPath(import.meta.url));
    const sourcePath = join(__dirname, 'files', 'archive.gz');
    const destinationPath = join(__dirname, 'files', 'fileToCompress.txt');

    const unzip = createUnzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    pipeline(source, unzip, destination, (error) => {
        if (error) {
            console.error('Error', error);
            process.exitCode = 1;
        }
    });
};

await decompress();