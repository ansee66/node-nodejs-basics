import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname  = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, 'files', 'fileToRead.txt');
    
    const stream = createReadStream(filePath, { encoding: 'utf-8' });

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
    
    stream.on('end', () => {
        console.log('\n');
    });
};

await read();