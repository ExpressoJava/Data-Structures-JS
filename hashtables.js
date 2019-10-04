class HashTable {
	constructor() {
		this._storage = []
		this._tableSize = val // initialize at the value of 25. we can always increase later
	}
	/*
	 * Insert a new key-value pair
	 * @param {string} key - the key associated with the value
	 * @param {*} value - the value to insert
	 */
	insert(key, value) {
		const index = this._hash(key, this.tableSize)
		this._storage[index] = value
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
	retrieve() {}
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
const myHT = new HashTable()

console.log(myHT)

myHT.insert('a', 1)
myHT.insert('b', 2)

// console.log(myHT)

// HashTable { _storage: [0,0,0['a', 1],0,0,0] }