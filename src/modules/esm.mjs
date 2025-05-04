import { dirname, join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';
import './files/c.cjs';

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const unknownObject = random > 0.5 ? './files/a.json' : './files/b.json';
const unknownObjectPath = join(__dirname, unknownObject);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(JSON.parse(await readFile(unknownObjectPath, 'utf-8')));

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
}
