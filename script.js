class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size= 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            (hash += key.charCodeAt(i)) % this.table.length;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.size++;
    }

    get(key) {
        const target = this._hash(key);
        if (this.table[target]) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[target][i][0] === key) {
                    return this.table[target][i][1];
                }
            }
        }
        return undefined;
    }

    has(key) {
        const target = this._hash(key);
        if (this.table[target]) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[target][i][0] === key) {
                    return true;
                }
            }
        }
        return false;
    }

    remove(key) {
        const index = this._hash(key);
      
        if (this.table[index] && this.table[index].length) {
          delete this.table[index];
          this.size--;
          return true;
        } else {
          return false;
        }

      }

    length() {
        let counter = 0;
        this.table.forEach((values, index) => {
            counter++;
        });
        return counter
    }

    clear() {
        this.table = [];
    }

    keys() {
        this.table.forEach((values, index) => {
            const listedKey = values.map(
                ([key, value]) => `${key}`
            );
            console.log(`${listedKey}`);
        });
    }

    values() {
        this.table.forEach((values, index) => {
            const listedValue = values.map(
                ([key, value]) => `${value}`
            );
            console.log(`${listedValue}`);
        });
    }

    entries() {
        this.table.forEach((values, index) => {
            const chainedValues = values.map(
                ([key, value]) => `[ ${key}: ${value} ]`
            );
            console.log(`${index}: ${chainedValues}`);
        });
    }
}


const test = new HashTable();

test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')

 test.set('moon', 'silver');

//test.clear();
 //console.log(test.keys());
 console.log(test.length());
 test.remove('kite');
 console.log(test.length());
console.log(test.has('kite'));

 