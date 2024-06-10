const fs = require('fs');
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encrypt = (text) => {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
};

const decrypt = (text) => {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
};

const encryptFile = (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const encrypted = encrypt(fileContent);
    fs.writeFileSync(filePath, JSON.stringify(encrypted));
};

const decryptFile = (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const decrypted = decrypt(JSON.parse(fileContent));
    fs.writeFileSync(filePath, decrypted);
};

const command = process.argv[2];
const keyName = process.argv[3];

if (command === 'encrypt') {
    console.log('Encrypting all items...');
    // Add logic to encrypt all items
} else if (command === 'decrypt') {
    console.log('Decrypting all items...');
    // Add logic to decrypt all items
} else if (command === 'encrypt-item') {
    console.log(`Encrypting item: ${keyName}`);
    encryptFile(keyName);
} else if (command === 'decrypt-item') {
    console.log(`Decrypting item: ${keyName}`);
    decryptFile(keyName);
} else {
    console.log('Invalid command');
}
