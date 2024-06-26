
# AES256-Encryption-LayerOne

## Description
AES256-Encryption-LayerOne is a robust tool for AES256 encryption and decryption, compatible with both Linux and Windows platforms. It is specifically designed to handle JSON data generated by web forms, encrypting each individual input with a unique key and generating a nonce to prevent collisions.

This tool utilizes symmetric encryption, making it ideal for storing data on decentralized storage systems like IPFS and Filecoin. For secure content sharing, we recommend using asymmetric encryption to share the encryption keys. We plan to develop a repository for this functionality in the future. The encryption system is highly capable, managing hundreds of inputs efficiently.

## Installation

### Clone the Repository
To use the scripts, clone the repository and install the dependencies:

```sh
git clone https://github.com/ShaneSCalder/Merkle-Meta.git
cd Merkle-Meta/AES256-Encryption-LayerOne
npm install
```

## Usage

### Linux Version

#### Encrypt All
To encrypt all items on Linux, run:
```sh
npm run encrypt-linux
```

#### Decrypt All
To decrypt all items on Linux, run:
```sh
npm run decrypt-linux
```

#### Encrypt Single Item
To encrypt a single item on Linux, run:
```sh
npm run encrypt-item-linux -- keyName
```

#### Decrypt Single Item
To decrypt a single item on Linux, run:
```sh
npm run decrypt-item-linux -- keyName
```

### Windows Version

#### Encrypt All
To encrypt all items on Windows, run:
```sh
npm run encrypt-windows
```

#### Decrypt All
To decrypt all items on Windows, run:
```sh
npm run decrypt-windows
```

#### Encrypt Single Item
To encrypt a single item on Windows, run:
```sh
npm run encrypt-item-windows -- keyName
```

#### Decrypt Single Item
To decrypt a single item on Windows, run:
```sh
npm run decrypt-item-windows -- keyName
```
## Input and Output Data Formats

### Input Data
The tool expects JSON data as input. Here is an example of the input data format:
```json
{
  "firstName": "mike",
  "lastName": "smith",
  "age": "49",
  "address": "53 mill road",
  "postalCode": "123567",
  "country": "cryptopia",
  "id": "jjjj",
  "bio": "crypto hacker",
  "walletAddress": "rUQK4Hy5rqJSK2PMXG1NNDFAhMy8i5WKWr",
  "idImage": "1717937759779-fu7rjj8rp.png"
}
```

### Output Data
The encrypted output data will include the encrypted data, keys, and nonces for each input field:
```json
{
  "data": {
    "address": "ab55600d7081c2ba1b46737f46f0b4a6c77e71bb0d9460d9c7b4757b",
    "age": "293d865d983d54aa69fdc3cee2dfd65cae9e",
    "bio": "96decbd59a7a580e18ddcf81955108b30437c250f34826a76034bd78d5",
    "country": "60823c2d65a34a76c8f455de1be2cea1e30b9daa6dcd7f4d1a",
    "firstName": "61fb617b14a98a316af46afc76f63a0d87165273",
    "id": "21ea4c7a1b7b4a9b7264476a51b5080e904217e8",
    "idImage": "bf4e056900f148372b14570bfd248d2daa51654aa3317823cfa45990b74bdfc5fb670ee04321d84cc23851",
    "lastName": "f44ea0ada890cedeb18c06894c69dfe02c6b5c057e",
    "postalCode": "c9f1a9b21bee0b9e7ca486759562db5f90996037e4ec",
    "walletAddress": "f771b580f73737784cec2d3241d7d0a8cf34219201faff015318e17f7397ce343f88eb6df2b3e89312e0992537cf6ca25384"
  },
  "keys": {
    "address": "e5b42082d612f9ef00853f64058f2d8341c19e31acd0cf9c3cfbd6ab2a4f2f87",
    "age": "80a4832f4358f85c097c4b0702439c8a96ee7b8fda477c472607797a57b14eec",
    "bio": "cb671c41f27b7bfa946843d9f5fb0db35ed8c97cae6684411859cbf49c7c7d3d",
    "country": "9d2cbe9852ca5d4e25eea46d00d2d12f0d1f3c5d95b44457d1b66de82c41057e",
    "firstName": "98825c25f89230f37c32b5ab2a58e8227932c89be7955df3df7c90707bf898df",
    "id": "de899dae3bcd53a454cb397b7cb59d1619ac0edf1527b95ea413876507457b00",
    "idImage": "bdf12ef8b0b739954a37e2ef4a5e3fe83c4c88be75b1ea2b89b09d7f9af991fe",
    "lastName": "e0ebfaf499a8c8ac08fe22a1bf08a5277e333cf962ce749f97f439d1fd071542",
    "postalCode": "79302bf9fbaad3f9691a4b174d4043ff6b22231e0f86ef9ce3164f3ad060c8d8",
    "walletAddress": "8c19f0f152617430e0814ae038622ee559a89f76262d9dbcf28c4f426fdf0d03"
  },
  "nonce": {
    "address": "814ebe76a1cd6017926c3eea",
    "age": "d762b95848b569b41f4a838d",
    "bio": "519e79365fa75bc9f34394c5",
    "country": "2a0bfd1f370d6999bd4b000f",
    "firstName": "d9ca6f3b2b29ce083b9714c3",
    "id": "f5229a03d050679a70b02661",
    "idImage": "34960c10a0d1cb3262e0aadf",
    "lastName": "4ecacc5b0105b15443212f40",
    "postalCode": "8e2ef89b994d4f3be49d277b",
    "walletAddress": "df1b08e168571b4ac382c6b9"
  }
}
```

## License
The AES256-Encryption-LayerOne software is licensed under a custom license. See the [LICENSE.md](LICENSE.md) file for more information contact info@merklemeta.com.

Small business startups and nonprofits can use the software for free, but a commercial license is required for more robust commercial use. No reselling of the software is allowed. For commercial licensing information, please contact info@merklemeta.com.

## Contributing
We welcome contributions to improve the AES256-Encryption-LayerOne project. Here are some ways you can contribute:

1. **Report Bugs:** If you find a bug, please report it using the issue tracker on GitHub.
2. **Fix Bugs:** If you fix a bug, please send a pull request.
3. **Write Documentation:** If you add functionality, please document it in the README.

### Steps to Contribute
1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Submit a pull request.

## Contact
For more information about this License or to obtain a commercial license, please contact info@merklemeta.com.


# NPM packge 
# AES256-Encryption-LayerOne

## Description
AES256-Encryption-LayerOne is a robust tool for AES256 encryption and decryption, compatible with both Linux and Windows platforms. This tool is designed to handle JSON data generated by web forms, encrypting each individual input with a unique key and generating a nonce to prevent collisions. It is suitable for storing data on decentralized storage systems like IPFS and Filecoin. For secure content sharing, we recommend using asymmetric encryption to share the encryption keys. We plan to develop a repository for this functionality in the future. The encryption system is highly capable, managing hundreds of inputs efficiently.

## Installation

### Clone the Repository
To use the scripts, clone the repository and install the dependencies:

```sh
git clone https://github.com/ShaneSCalder/Merkle-Meta.git
cd Merkle-Meta/AES256-Encryption-LayerOne
npm install
```

### Install via npm
You can also install the package directly from npm:

```sh
npm install @shanescalder/aes256-encryption-layerone
```

[Link to npm package](https://www.npmjs.com/package/@shanescalder/aes256-encryption-layerone)

## Usage

### Linux Version

#### Encrypt All
To encrypt all items on Linux, run:
```sh
npm run encrypt-linux
```

#### Decrypt All
To decrypt all items on Linux, run:
```sh
npm run decrypt-linux
```

#### Encrypt Single Item
To encrypt a single item on Linux, run:
```sh
npm run encrypt-item-linux -- keyName
```

#### Decrypt Single Item
To decrypt a single item on Linux, run:
```sh
npm run decrypt-item-linux -- keyName
```

### Windows Version

#### Encrypt All
To encrypt all items on Windows, run:
```sh
npm run encrypt-windows
```

#### Decrypt All
To decrypt all items on Windows, run:
```sh
npm run decrypt-windows
```

#### Encrypt Single Item
To encrypt a single item on Windows, run:
```sh
npm run encrypt-item-windows -- keyName
```

#### Decrypt Single Item
To decrypt a single item on Windows, run:
```sh
npm run decrypt-item-windows -- keyName
```

## Input and Output Data Formats

### Input Data
The tool expects JSON data as input. Here is an example of the input data format:

```json
{
  "firstName": "mike",
  "lastName": "smith",
  "age": "49",
  "address": "53 mill road",
  "postalCode": "123567",
  "country": "cryptopia",
  "id": "jjjj",
  "bio": "crypto hacker",
  "walletAddress": "rUQK4Hy5rqJSK2PMXG1NNDFAhMy8i5WKWr",
  "idImage": "1717937759779-fu7rjj8rp.png"
}
```

### Output Data
The encrypted output data will include the encrypted data, keys, and nonces for each input field:

```json
{
  "data": {
    "address": "ab55600d7081c2ba1b46737f46f0b4a6c77e71bb0d9460d9c7b4757b",
    "age": "293d865d983d54aa69fdc3cee2dfd65cae9e",
    "bio": "96decbd59a7a580e18ddcf81955108b30437c250f34826a76034bd78d5",
    "country": "60823c2d65a34a76c8f455de1be2cea1e30b9daa6dcd7f4d1a",
    "firstName": "61fb617b14a98a316af46afc76f63a0d87165273",
    "id": "21ea4c7a1b7b4a9b7264476a51b5080e904217e8",
    "idImage": "bf4e056900f148372b14570bfd248d2daa51654aa3317823cfa45990b74bdfc5fb670ee04321d84cc23851",
    "lastName": "f44ea0ada890cedeb18c06894c69dfe02c6b5c057e",
    "postalCode": "c9f1a9b21bee0b9e7ca486759562db5f90996037e4ec",
    "walletAddress": "f771b580f73737784cec2d3241d7d0a8cf34219201faff015318e17f7397ce343f88eb6df2b3e89312e0992537cf6ca25384"
  },
  "keys": {
    "address": "e5b42082d612f9ef00853f64058f2d8341c19e31acd0cf9c3cfbd6ab2a4f2f87",
    "age": "80a4832f4358f85c097c4b0702439c8a96ee7b8fda477c472607797a57b14eec",
    "bio": "cb671c41f27b7bfa946843d9f5fb0db35ed8c97cae6684411859cbf49c7c7d3d",
    "country": "9d2cbe9852ca5d4e25eea46d00d2d12f0d1f3c5d95b44457d1b66de82c41057e",
    "firstName": "98825c25f89230f37c32b5ab2a58e8227932c89be7955df3df7c90707bf898df",
    "id": "de899dae3bcd53a454cb397b7cb59d1619ac0edf1527b95ea413876507457b00",
    "idImage": "bdf12ef8b0b739954a37e2ef4a5e3fe83c4c88be75b1ea2b89b09d7f9af991fe",
    "lastName": "e0ebfaf499a8c8ac08fe22a1bf08a5277e333cf962ce749f97f439d1fd071542",
    "postalCode": "79302bf9fbaad3f9691a4b174d4043ff6b22231e0f86ef9ce3164f3ad060c8d8",
    "walletAddress": "8c19f0f152617430e0814ae038622ee559a89f76262d9dbcf28c4f426fdf0d03"
  },
  "nonce": {
    "address": "814ebe76a1cd6017926c3eea",
    "age": "d762b95848b569b41f4a838d",
    "bio": "519e79365fa75bc9f34394c5",
    "country": "2a0bfd1f370d6999bd4b000f",
    "firstName": "d9ca6f3b2b29ce083b9714c3",
    "id": "f5229a03d050679a70b02661",
    "idImage": "34960c10a0d1cb3262e0aadf",
    "lastName": "4ecacc5b0105b15443212f40",
    "postalCode": "8e2ef89b994d4f3be49d277b",
    "walletAddress": "df1b08e168571b4ac382c6b9"
  }
}
```

## License
The AES256-Encryption-LayerOne software is licensed under a custom license. See the [LICENSE.md](LICENSE.md) file for more information.

## Contact
For more information or to obtain a commercial license, please contact info@merklemeta.com.
```

### Steps to Add the Section

1. Open your `README.md` file for `AES256-Encryption-LayerOne`.
2. Copy the updated content above.
3. Paste it into your `README.md` file.
4. Save and commit the changes.

### Commit the Changes

```sh
git add README.md
git commit -m "Add npm package location to README.md"
git push origin main













