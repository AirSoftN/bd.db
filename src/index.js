const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

class bddb {
    constructor(filename, options = {}) {
        if (path.extname(filename) !== '.json') {
            throw new Error('The file must be a JSON file.');
        }
        this.filename = filename;
        this.data = {};
        this.options = options;

        this.loadData();
    }

    async loadData() {
        try {
            const fileContents = await fs.readFile(this.filename, 'utf8');
            if (this.options.encrypt) {
                const decipher = crypto.createDecipher(this.options.algorithm, this.options.password);
                let decrypted = decipher.update(fileContents, 'hex', 'utf8');
                decrypted += decipher.final('utf8');
                this.data = JSON.parse(decrypted);
            } else {
                this.data = JSON.parse(fileContents);
            }
        } catch (err) {
            if (err.code !== 'ENOENT') {
                console.error('Error reading the file:', err);
                throw err;
            }
        }
    }

    async saveData() {
        try {
            let dataToSave = JSON.stringify(this.data, null, 2);
            if (this.options.encrypt) {
                const cipher = crypto.createCipher(this.options.algorithm, this.options.password);
                let encrypted = cipher.update(dataToSave, 'utf8', 'hex');
                encrypted += cipher.final('hex');
                dataToSave = encrypted;
            }
            await fs.writeFile(this.filename, dataToSave, 'utf8');
        } catch (err) {
            console.error('Error writing to file:', err);
            throw err;
        }
    }

    ensureKeyValidity(key) {
        if (!key) {
            throw new Error('Key must not be empty.');
        }
    }

    set(key, value = null) {
        this.ensureKeyValidity(key);
        this.data[key] = value;
        this.saveData();
    }

    get(key) {
        this.ensureKeyValidity(key);
        return this.data[key];
    }

    push(key, value) {
        this.ensureKeyValidity(key);
        if (!Array.isArray(this.data[key])) {
            this.data[key] = [];
        }
        this.data[key].push(value);
        this.saveData();
    }

    add(key, number) {
        this.ensureKeyValidity(key);
        if (typeof this.data[key] !== 'number') {
            this.data[key] = 0;
        }
        this.data[key] += number;
        this.saveData();
    }

    subtract(key, number) {
        this.ensureKeyValidity(key);
        if (typeof this.data[key] !== 'number') {
            this.data[key] = 0;
        }
        this.data[key] -= number;
        this.saveData();
    }

    delete(key) {
        this.ensureKeyValidity(key);
        delete this.data[key];
        this.saveData();
    }

    getAll() {
        return { ...this.data };
    }

    clearAll() {
        this.data = {};
        this.saveData();
    }

    async hasKey(key) {
        return Object.prototype.hasOwnProperty.call(this.data, key);
    }

    async keys() {
        return Object.keys(this.data);
    }

    async values() {
        return Object.values(this.data);
    }

    async entries() {
        return Object.entries(this.data);
    }

    async forEach(callback) {
        for (const [key, value] of Object.entries(this.data)) {
            await callback(key, value);
        }
    }

    async size() {
        return Object.keys(this.data).length;
    }

    async isEmpty() {
        return Object.keys(this.data).length === 0;
    }

    async setTempData(key, value, expirationTime) {
        this.ensureKeyValidity(key);
        this.data[key] = value;
        setTimeout(() => {
            delete this.data[key];
            this.saveData();
        }, expirationTime);
    }

    async getTempData(key) {
        this.ensureKeyValidity(key);
        return this.data[key];
    }

    async search(query) {
        const results = [];
        for (const [key, value] of Object.entries(this.data)) {
            if (typeof value === 'string' && value.includes(query)) {
                results.push({ [key]: value });
            }
        }
        return results;
    }

    async storeFile(key, fileData) {
        this.ensureKeyValidity(key);
        this.data[key] = fileData;
        this.saveData();
    }

    async getFile(key) {
        this.ensureKeyValidity(key);
        return this.data[key];
    }

    async query(queryFunc) {
        return queryFunc(this.data);
    }

    async multiFileStore(files) {
        files.forEach(file => {
            const { key, data } = file;
            this.ensureKeyValidity(key);
            this.data[key] = data;
        });
        this.saveData();
    }
}

module.exports = bddb;
              
