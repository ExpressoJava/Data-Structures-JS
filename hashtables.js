class HashTable {
	constructor(val) {
		this._storage = []
		this._tableSize = val // initialize value
	}
	/*
	 * Insert a new key-value pair
	 * @param {string} key - the key associated with the value
	 * @param {*} value - the value to insert
	 */
	insert(key, value) {
		const index = this._hash(key, this._tableSize)

		if (!this._storage[index]) this._storage[index] = [] // if it doesnt extst, then we initialize it
		// [0,0,0,[],]
		// TODO: loop through array and find if key was already inserted
		this._storage[index].push([key, value])
		// [0,0,0,['a', 1, ['b', 2]]] // handling collision = hash func returns index for different key
	}
	/*
	 * Delete a key-value pair
	 * @param {string} - the key associated with the value
	 * @return {*} value - the deleted value
	 */
	remove() {}
	/*
	 * Returns the value associated with a key
	 * @param {string} key - the key to search for
	 * @return {*} - the value associated with the key
	 */
	// { _storage: [0,0,0, ['a', 1], ['b', 2],0,0,0] }
	retrieve(key) {
		const index = this._hash(key, this._tableSize)
		const arrayAtIndex = this._storage[index] // where arrayAtIndex = aray inside storage

		if (arrayAtIndex) {
			for (let i = 0; i < this._storage[index]; i++) {
				const keyValueArray = arrayAtIndex[i] // key/value pair
				if (keyValueArray[0] === key) return keyValueArray[1] // in this case we only know the key
			}
		}
	}
	/*
	 * Hashes string value into an integer that can be mapped to an array index
	 * @param {string} str - the string to be hashed
	 * @param {number} n - the size of the storage array
	 * @return {number} - an integer between 0 and n
	 */
	_hash(str, n) {
		let sum = 0
		for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3

		return sum % n
	}
}
const myHT = new HashTable(25) // bucket value of 25. Can always implment resize and double when is half-full

console.log(myHT)

myHT.insert('a', 1)
myHT.insert('b', 2)

console.log(myHT)

// HashTable { _storage: [0,0,0['a', 1],0,0,0] }
