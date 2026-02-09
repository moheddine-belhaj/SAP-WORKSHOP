const cds = require('@sap/cds');
const { generateFileHash, generateDocId, getCurrentTimestamp } = require('./lib/file-utils');

module.exports = cds.service.impl(async function() {
  const { Docs, Links, Upload } = this.entities;

  // Filter out soft-deleted documents
  this.before('READ', 'Docs', async (req) => {
    req.query.where({ isDeleted: false });
  });

  // Handle READ for Docs
  this.on('READ', 'Docs', async (req) => {
    const db = await cds.connect.to('db');
    return db.run(req.query);
  });

  // Handle CREATE for Docs
  this.on('CREATE', 'Docs', async (req) => {
    const db = await cds.connect.to('db');
    console.log('Creating document:', req.data);
    return db.run(req.query);
  });

  // Handle READ for Links
  this.on('READ', 'Links', async (req) => {
    const db = await cds.connect.to('db');
    return db.run(req.query);
  });

  // Handle CREATE for Links
  this.on('CREATE', 'Links', async (req) => {
    const db = await cds.connect.to('db');
    console.log('Creating link:', req.data);
    return db.run(req.query);
  });

  // Handle Upload entity - before CREATE to auto-generate fields
  this.before('CREATE', 'Upload', async (req) => {
    const data = req.data;
    
    // Generate docsID if not provided
    if (!data.docsID) {
      data.docsID = generateDocId();
    }
    
    // Set uploadedAt to current timestamp
    if (!data.uploadedAt) {
      data.uploadedAt = getCurrentTimestamp();
    }
    
    // Generate file hash if content is provided
    if (data.content) {
      // Content might be a stream or buffer, read it if needed
      let contentBuffer = data.content;
      
      // If it's a stream, we need to read it
      if (contentBuffer && typeof contentBuffer.pipe === 'function') {
        const chunks = [];
        for await (const chunk of contentBuffer) {
          chunks.push(chunk);
        }
        contentBuffer = Buffer.concat(chunks);
        data.content = contentBuffer; // Replace stream with buffer
      } else if (typeof contentBuffer === 'string') {
        contentBuffer = Buffer.from(contentBuffer, 'base64');
      }
      
      data.fileHash = generateFileHash(contentBuffer);
      data.fileSize = contentBuffer.length;
    }
    
    // Set isDeleted to false by default
    if (data.isDeleted === undefined) {
      data.isDeleted = false;
    }
    
    console.log('Upload entity - auto-generated fields:', {
      docsID: data.docsID,
      uploadedAt: data.uploadedAt,
      fileHash: data.fileHash,
      fileSize: data.fileSize
    });
  });

  // Handle READ for Upload entity
  this.on('READ', 'Upload', async (req) => {
    const db = await cds.connect.to('db');
    return db.run(req.query);
  });

  // Handle uploadDocument action
  this.on('uploadDocument', async (req) => {
    const { fileName, mediaType, content } = req.data;
    
    if (!fileName || !content) {
      req.error(400, 'fileName and content are required');
      return;
    }

    const db = await cds.connect.to('db');
    
    // Handle content - might be stream or buffer
    let contentBuffer = content;
    if (contentBuffer && typeof contentBuffer.pipe === 'function') {
      const chunks = [];
      for await (const chunk of contentBuffer) {
        chunks.push(chunk);
      }
      contentBuffer = Buffer.concat(chunks);
    } else if (typeof contentBuffer === 'string') {
      contentBuffer = Buffer.from(contentBuffer, 'base64');
    }
    
    // Generate document metadata
    const docsID = generateDocId();
    const fileHash = generateFileHash(contentBuffer);
    const uploadedAt = getCurrentTimestamp();
    const fileSize = contentBuffer.length;
    
    // Create document record
    const doc = {
      docsID: docsID,
      fileName: fileName,
      mediaType: mediaType,
      content: contentBuffer,
      fileHash: fileHash,
      uploadedAt: uploadedAt,
      fileSize: fileSize,
      isDeleted: false
    };
    
    console.log('Uploading document:', {
      docsID: doc.docsID,
      fileName: doc.fileName,
      mediaType: doc.mediaType,
      fileSize: doc.fileSize,
      fileHash: doc.fileHash
    });
    
    try {
      // Insert into Docs entity
      const result = await db.run(
        INSERT.into(Docs).entries(doc)
      );
      
      console.log('Document uploaded successfully:', docsID);
      
      // Return the created document (without content to avoid large response)
      const created = await db.run(
        SELECT.from(Docs).where({ docsID: docsID })
      );
      
      return created[0];
    } catch (error) {
      console.error('Error uploading document:', error);
      req.error(500, 'Failed to upload document: ' + error.message);
    }
  });
});
