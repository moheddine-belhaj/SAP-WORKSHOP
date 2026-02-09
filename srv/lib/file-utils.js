const crypto = require('crypto');

/**
 * Generate SHA-256 hash of file content
 * @param {Buffer} content - File content as buffer
 * @returns {string} - SHA-256 hash in hex format
 */
function generateFileHash(content) {
  if (!content) {
    return null;
  }
  return crypto.createHash('sha256').update(content).digest('hex');
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
