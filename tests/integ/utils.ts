import { Client } from '@elastic/elasticsearch';

const DEFAULT_ORDER_DOC_MAPPING = {
  dynamic: false,
  _all: {
      enabled: false,
  },
  _routing: {
      required: true,
  },
  date_detection: false,
  properties: {
      user_id: {
          type: 'integer',
      },
      source: {
          type: 'integer',
      },
      status: {
          type: 'integer',
      },
      date_created: {
          type: 'date',
      },
      price: {
          type: 'integer',
      },
  },
};

export const getOrderDocMapping = (): object => {
  return { ...DEFAULT_ORDER_DOC_MAPPING };
}

export const indexDoc = async (client: Client, indexName: string, id: string, body: any, routing: string) => {
  await client.index({
    index: indexName,
    id,
    type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body,
    routing,
    refresh: 'wait_for',
  });
}