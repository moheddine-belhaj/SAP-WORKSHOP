namespace SapProject;
using { cuid } from '@sap/cds/common';

@assert.unique: { docsID: [docsID] }
entity Docs : cuid {
  docsID: String(36) @mandatory;
  internalUserId: String(255);
  fileName: String(500);
  filePath: String(1000);
  fileHash: String(64);
  uploadedAt: Timestamp;
  isDeleted: Boolean;
}

