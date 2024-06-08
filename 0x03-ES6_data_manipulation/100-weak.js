const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const endpointKey = endpoint;
  if (!weakMap.has(endpointKey)) {
    weakMap.set(endpointKey, 1);
  } else {
    const count = weakMap.get(endpointKey);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpointKey, count + 1);
  }
}

export { weakMap, queryAPI };
