const { exec } = require('child_process');
const path = require('path');

// Assuming the kycData.json is in the same directory as your Node script for simplicity
const inputFilePath = path.join(__dirname, 'kycData.json');

// Define where you want the output JSON files to be saved
const merkleRootOutputPath = path.join(__dirname, 'merkleroot.json');
const merkleLeavesOutputPath = path.join(__dirname, 'merkleleaves.json');

// Update the path to where your KYCMerkleTree executable is located
const goExecutablePath = path.join(__dirname, 'KYCMerkleTree');

// Construct the command with arguments
const command = `${goExecutablePath} -input="${inputFilePath}" -rootOut="${merkleRootOutputPath}" -leavesOut="${merkleLeavesOutputPath}"`;

// Execute the command
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    if (stdout) console.log(`stdout: ${stdout}`);
    if (stderr) console.error(`stderr: ${stderr}`);

    console.log('Merkle tree JSON files generated successfully.');
});

