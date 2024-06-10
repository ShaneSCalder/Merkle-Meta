
# Merkle-Proof

## Description
The Merkle-Proof repository deploys a comprehensive Merkle tree that includes built-in security features and is optimized for web forms. As long as the input data is formatted correctly in JSON, it can process hundreds of inputs per Merkle tree. The tool generates a Merkle root and allows for the creation of customizable Merkle proofs based on the data shared. Combined with public data, this tool can mimic zero-knowledge (ZK) proofs and is particularly robust for larger data sets, such as medical data, training records, educational records, HR documents, and more.

## Installation

### Clone the Repository
To use the scripts, clone the repository and install the dependencies:

```sh
git clone https://github.com/ShaneSCalder/Merkle-Meta.git
cd Merkle-Meta/Merkle-Proof
npm install
```

## Usage

### Linux Version
To generate the Merkle tree on Linux, run:

```sh
node linux/runMerkleProofL.js
```

### Windows Version
To generate the Merkle tree on Windows, run:

```sh
node windows/runMerkleProof.js
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
The output includes two JSON files: `merkleleaves.json` and `merkleroot.json`.

#### Merkle Leaves Output Example
```json
{
  "leaves": [
    "981761fb91534136e7422bb992a1e399f0f785b5feee96ec18f8c08c51fe4008",
    "cc76dd413f059de057fff396113f535a37640aa3f3bd0525da683a200a3f6b0e",
    "0f503cf7d5c63cb57d865d8150b1a8a16ab7cbdea0d1adaf99d208a4f6b1cb35",
    "172b890fc91a5e9c45802eb9981af0d603be2754e134bbd268de13a4d219f892",
    "4151c9bef18ac69d58d453a9f25ce1bbf7c3e934cb0d0685a531daaefa2dafef",
    "2111f12c5b7f5ae0d954eb16f5c92e14d5363dabe433c082753e29ec3302f6a0",
    "507c18916d4da9d9003e55620d2e1cf1fcaadc9be7ac6db5a98432fc4dc9b408",
    "58fb35c95280cb5ea3110e411b169727ba86dbb953eedb0bddd853c23eef7144",
    "a1fddb27bd78a2dd5bfae197743ddf591337437bf0dfb28eb7844ebb22883d91",
    "135835b7b83f8ebd84c880c9834b9dcc61bfc983f94b1b8e0475f78864c77056"
  ]
}
```

#### Merkle Root Output Example
```json
{
  "merkleRoot": "d831b65b52e10b012be9cf46e319b3887c9b1d30cd3562ebcd516ade7ded32fe"
}
```

## License
The Merkle-Proof software is licensed under a custom license. See the [LICENSE.md](LICENSE.md) file for more information.

Small business startups and nonprofits can use the software for free, but a commercial license is required for more robust commercial use. No reselling of the software is allowed. For commercial licensing information, please contact info@merklemeta.com.

## Contributing
We welcome contributions to improve the Merkle-Proof project. Here are some ways you can contribute:

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
