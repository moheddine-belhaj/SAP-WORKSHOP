using { sapProjectSrv } from '../srv/service.cds';

annotate sapProjectSrv.Docs with @UI.HeaderInfo: { TypeName: 'Doc', TypeNamePlural: 'Docs', Title: { Value: docsID } };
annotate sapProjectSrv.Docs with {
  ID @UI.Hidden @Common.Text: { $value: docsID, ![@UI.TextArrangement]: #TextOnly }
};
annotate sapProjectSrv.Docs with @UI.Identification: [{ Value: docsID }];
annotate sapProjectSrv.Docs with {
  docsID @title: 'ID';
  internalUserId @title: 'Internal User ID';
  fileName @title: 'File Name';
  filePath @title: 'File Path';
  fileHash @title: 'File Hash';
  uploadedAt @title: 'Uploaded At';
  isDeleted @title: 'Is Deleted'
};

annotate sapProjectSrv.Docs with @UI.LineItem: [
 { $Type: 'UI.DataField', Value: docsID },
 { $Type: 'UI.DataField', Value: internalUserId },
 { $Type: 'UI.DataField', Value: fileName },
 { $Type: 'UI.DataField', Value: filePath },
 { $Type: 'UI.DataField', Value: fileHash },
 { $Type: 'UI.DataField', Value: uploadedAt },
 { $Type: 'UI.DataField', Value: isDeleted }
];

annotate sapProjectSrv.Docs with @UI.FieldGroup #Main: {
  $Type: 'UI.FieldGroupType', Data: [
 { $Type: 'UI.DataField', Value: docsID },
 { $Type: 'UI.DataField', Value: internalUserId },
 { $Type: 'UI.DataField', Value: fileName },
 { $Type: 'UI.DataField', Value: filePath },
 { $Type: 'UI.DataField', Value: fileHash },
 { $Type: 'UI.DataField', Value: uploadedAt },
 { $Type: 'UI.DataField', Value: isDeleted }
  ]
};

annotate sapProjectSrv.Docs with @UI.Facets: [
  { $Type: 'UI.ReferenceFacet', ID: 'Main', Label: 'General Information', Target: '@UI.FieldGroup#Main' }
];

annotate sapProjectSrv.Docs with @UI.SelectionFields: [
  docsID
];

