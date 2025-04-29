import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
    const __dirname  = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    
    const stream = createReadStream(filePath);

    const hash = createHash('sha256');

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });
    
    stream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(fileHash)
    });
};

await calculateHash();