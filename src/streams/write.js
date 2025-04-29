import { createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
    const __dirname  = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, 'files', 'fileToWrite.txt');
    const stream = createWriteStream(filePath, { encoding: 'utf-8' });

    console.log('Enter text (to finish, press Ctrl+C):');

    process.stdin.on('data', (chunk) => {
        stream.write(chunk);
    });
    
    process.stdin.on('end', () => {
        stream.end();
    });
};

await write();