const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const generateMerkleTree = () => {
  const inputFilePath = path.join(__dirname, 'data/merkleInput.json');
  const merkleRootOutputPath = path.join(__dirname, 'data/merkleroot.json');
  const merkleLeavesOutputPath = path.join(__dirname, 'data/merkleleaves.json');
  const goExecutablePath = path.join(__dirname, 'KYCMerkleTree/KYCMerkleTree');

  const command = `${goExecutablePath} -input="${inputFilePath}" -rootOut="${merkleRootOutputPath}" -leavesOut="${merkleLeavesOutputPath}"`;

  console.log(`Executing command: ${command}`);

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        console.error(`stderr: ${stderr}`);
        reject(error);
        return;
      }
      if (stdout) console.log(`stdout: ${stdout}`);
      if (stderr) console.error(`stderr: ${stderr}`);

      // Check if the output files are created
      if (fs.existsSync(merkleRootOutputPath) && fs.existsSync(merkleLeavesOutputPath)) {
        console.log('Merkle tree JSON files generated successfully.');
        resolve();
      } else {
        console.error('Merkle tree JSON files were not created.');
        reject(new Error('Merkle tree JSON files were not created.'));
      }
    });
  });
};

module.exports = generateMerkleTree;

