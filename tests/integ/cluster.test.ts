import { Client } from '@elastic/elasticsearch'; // TODO maybe replace
import { Cluster } from '../../src/cluster';

const esHost = `http://${process.env.ES_HOST}:9200`;

describe('Cluster integration', () => {
  test('should return es version', async () => {
    const cluster = new Cluster(new Client({ node: esHost }));

    const esVersion = await cluster.getEsVersion();
    expect(esVersion.major).toBe(6);
  });
});
