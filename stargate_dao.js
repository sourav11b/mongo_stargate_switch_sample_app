const stargate = require(`./stargate`);
const collection = `airlines`;


const clusterId = `33f8e1a0-bd34-4987-9c59-73744e6e6d43`;
const region = `us-east-1`;
const baseUrl = `https://`+clusterId+`-`+region+`.apps.astra.datastax.com`
const username = `stargate_document_api`;
const password = `stargate_document_api`;
const namespace = `stargate_document_api`;




async function insert(document, docid) {
  const docRootPath = `/namespaces/${namespace}/collections/${collection}/${docid}`;
  const stargateClient = async () => {
    const stargateClient = await stargate.createClient({
      baseUrl: baseUrl,
      username: username,
      password: password,
    });

    return stargateClient;
  }
  (async () => {
    let insert_client = await stargateClient();
    await insert_client.put(docRootPath, document);
    console.log(`1 document inserted`);
  })()
}

async function update(docid, document) {
  const docRootPath = `/namespaces/${namespace}/collections/${collection}/${docid}`;
  const stargateClient = async () => {
    const stargateClient = await stargate.createClient({
      baseUrl: baseUrl,
      username: username,
      password: password,
    });

    return stargateClient;
  }
  (async () => {
    let insert_client = await stargateClient();
    await insert_client.patch(docRootPath, document);
    console.log(`1 document updated`);
  })()
}


async function delete_document(docid) {
  const docRootPath = `/namespaces/${namespace}/collections/${collection}/${docid}`;
  const stargateClient = async () => {
    const stargateClient = await stargate.createClient({
      baseUrl: baseUrl,
      username: username,
      password: password,
    });
    return stargateClient;
  }
  (async () => {
    let insert_client = await stargateClient();
    await insert_client.delete(docRootPath);
    console.log(`1 document deleted`);
  })()


}

async function find(docid) {
  const docRootPath = `/namespaces/${namespace}/collections/${collection}/${docid}`;
  const stargateClient = async () => {
    const stargateClient = await stargate.createClient({
      baseUrl: baseUrl,
      username: username,
      password: password,
    });
    return stargateClient;
  }


  (async () => {
    let insert_client = await stargateClient();
    const update_res = await insert_client.get(docRootPath);
    if (update_res.jsonResponse != null) {
      console.log(`found document  : ` + JSON.stringify(update_res.jsonResponse))
    }
    else {
      console.log(`document not found for document id  : ` + docid)

    }
  })()
}

module.exports = { insert, update, delete_document, find }


