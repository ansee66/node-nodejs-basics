import { argv } from 'node:process';

const parseArgs = () => {
    const args = argv.slice(2).reduce((prev, curr, index) => {
        return prev + (index === 0 ? `${curr.slice(2)} is ` : index % 2 === 0 ? `, ${curr.slice(2)} is ` : curr)
    }, '')

    console.log(args);
};

parseArgs();