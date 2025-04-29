import { Transform } from 'node:stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('') + '\n';
            this.push(reversed);
            callback();
        }
    });

    console.log('Enter text (to finish, press Ctrl+C):');

    process.stdin.pipe(reverseStream).pipe(process.stdout);
    
    process.stdin.on('end', () => {
        stream.end();
    });
};

await transform();