import redis from 'redis';

// Here, redis-server refers to the name of the redis server we define in docker-compose.yml
// the redis-server port is by default 6379
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

export default async function handler(req, res) {
    client.get('visits', (err, visits) => {
        let visitCount = 0;
        if (visits) {
            visitCount = parseInt(visits);
        }

        if (err) {
            // TODO
            res.status(200).json({ error: err })
        }
        res.status(200).json({ count: visitCount })
        client.set('visits', visitCount + 1)
    })
}
