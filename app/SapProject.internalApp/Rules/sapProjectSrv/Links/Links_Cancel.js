export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Links')) {
        return clientAPI.executeAction({
            'Name': '/internalApp/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Links'
                },
                'OnSuccess': '/internalApp/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/internalApp/Actions/CloseModalPage_Cancel.action');
    }
}