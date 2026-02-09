export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Docs')) {
        return clientAPI.executeAction({
            'Name': '/internalApp/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Docs'
                },
                'OnSuccess': '/internalApp/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/internalApp/Actions/CloseModalPage_Cancel.action');
    }
}