export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Docs')) {
        return clientAPI.executeAction({
            'Name': '/internalApp/Actions/sapProjectSrv/Docs/Docs_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/internalApp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Docs'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Docs/Docs_UpdateEntity.action');
    }
}