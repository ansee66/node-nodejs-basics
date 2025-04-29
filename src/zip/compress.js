import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';

const compress = async () => {
    const __dirname  = dirname(fileURLToPath(import.meta.url));
    const sourcePath = join(__dirname, 'files', 'fileToCompress.txt');
    const destinationPath = join(__dirname, 'files', 'archive.gz');

    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    pipeline(source, gzip, destination, (error) => {
        if (error) {
            console.error('Error', error);
            process.exitCode = 1;
        }
    });
};

await compress();