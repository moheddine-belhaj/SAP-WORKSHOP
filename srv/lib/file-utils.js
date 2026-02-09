const crypto = require('crypto');

/**
 * Generate SHA-256 hash of file content
 * @param {Buffer|Readable} content - File content as buffer or stream
 * @returns {string|Promise<string>} - SHA-256 hash in hex format
 */
function generateFileHash(content) {
  if (!content) {
    return null;
  }
  
  // Handle Buffer directly
  if (Buffer.isBuffer(content)) {
    return crypto.createHash('sha256').update(content).digest('hex');
  }
  
  // Handle string (convert to buffer)
  if (typeof content === 'string') {
    return crypto.createHash('sha256').update(Buffer.from(content)).digest('hex');
  }
  
  // Handle stream - return promise
  if (content && typeof content.pipe === 'function') {
    return new Promise((resolve, reject) => {
      const hash = crypto.createHash('sha256');
      content.on('data', chunk => hash.update(chunk));
      content.on('end', () => resolve(hash.digest('hex')));
      content.on('error', reject);
    });
  }
  
  return null;
}

/**
 * Generate a new UUID for document ID
 * @returns {string} - New UUID
 */
function generateDocId() {
  return crypto.randomUUID();
}

/**
 * Get current timestamp in ISO format
 * @returns {string} - Current timestamp
 */
function getCurrentTimestamp() {
  return new Date().toISOString();
}

module.exports = {
  generateFileHash,
  generateDocId,
  getCurrentTimestamp
};
