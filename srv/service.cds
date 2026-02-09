using { SapProject as my } from '../db/schema.cds';

@path: '/service/sapProject'
@requires: 'authenticated-user'
service sapProjectSrv {
  @odata.draft.enabled
  entity Docs as projection on my.Docs;
}