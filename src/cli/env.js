import { env } from 'node:process';

const prefix = 'RSS_';

const parseEnv = () => {
    const result = Object.entries(env).reduce((prev, curr) => {
        if (curr[0].startsWith(prefix)) {
            return [...prev, `${curr[0]}=${curr[1]}`];
        }
        return prev;
    }, []).join('; ');

    console.log(result)
};

parseEnv();