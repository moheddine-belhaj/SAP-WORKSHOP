export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Upload')) {
        return clientAPI.executeAction({
            'Name': '/internalApp/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Upload'
                },
                'OnSuccess': '/internalApp/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/internalApp/Actions/CloseModalPage_Cancel.action');
    }
}