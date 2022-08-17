class HashTable {
  constructor(size) {
    this.data = Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 1) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      // if no container
      this.data[address] = []; // add a container to put information kere
    }
    this.data[address].push([key, value]); // push this data to it
    return this.data;
  }
  get(key) {
    const address = this._hash(key);
    const buckets = this.data[address];
    // check if there are any values at the address
    if (buckets) {
      for (let i = 0; i < buckets.length; i++) {
        // find the array that matches the key
        if (buckets[i][0] === key) {
          return buckets[i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      const bucket = this.data[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          const key = bucket[j][0];
          keysArray.push(key);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
myHashTable.set('pears', 25);
myHashTable.set('apples', 340);

console.log(myHashTable.keys());
