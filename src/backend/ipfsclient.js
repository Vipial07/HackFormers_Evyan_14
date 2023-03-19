import { create } from 'ipfs-http-client';

// Create an instance of IPFS client
const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });

// Add a file to IPFS
const file = 'Hello World!';
const fileBuffer = Buffer.from(file);

ipfs.id()
  .then((id) => {
    console.log('Connected to IPFS:', id);
    return ipfs.add(fileBuffer);
  })
  .then((result) => {
    console.log('File added to IPFS:', result.path);
  })
  .catch((error) => {
    console.error('Error adding file to IPFS:', error);
  });
