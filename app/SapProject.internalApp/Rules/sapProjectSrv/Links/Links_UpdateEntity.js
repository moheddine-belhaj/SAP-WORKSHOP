export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Links')) {
        return clientAPI.executeAction({
            'Name': '/internalApp/Actions/sapProjectSrv/Links/Links_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/internalApp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Links'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Links/Links_UpdateEntity.action');
    }
}