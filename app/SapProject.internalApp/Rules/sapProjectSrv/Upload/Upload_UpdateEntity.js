export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Upload')) {
        return clientAPI.executeAction({
            'Name': '/internalApp/Actions/sapProjectSrv/Upload/Upload_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/internalApp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Upload'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Upload/Upload_UpdateEntity.action');
    }
}