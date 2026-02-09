export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Docs')) {
        return clientAPI.executeAction({
            'Name': '/internalApp/Actions/sapProjectSrv/Docs/Docs_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/internalApp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Docs',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Docs/Docs_CreateEntity.action');
    }
}