namespace SapProject;
using { cuid } from '@sap/cds/common';

@assert.unique: { docsID: [docsID] }
entity Docs : cuid {
  docsID: String(36);
  internalUserId: String(255);
  fileName: String(500);
  filePath: String(1000);
  fileHash: String(64);
  uploadedAt: Timestamp;
  isDeleted: Boolean;
  content: LargeBinary @Core.MediaType: mediaType;
  mediaType: String(100) @Core.IsMediaType;
  fileSize: Integer;
}

entity Links : cuid {
  link_id: UUID;
  document_id: UUID;
  token: String(128);
  recipient_email: String(255);
  created_at: Timestamp;
  expires_at: Timestamp;
  status: String(20);
  access_count: Integer;
  max_access: Integer;
  ip_whitelist: array of String;
  password_hash: String(255);
  metadata: LargeString;
}