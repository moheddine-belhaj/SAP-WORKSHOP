export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Upload')) {
        return clientAPI.executeAction({
            'Name': '/internalApp/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Upload'
                },
                'OnSuccess': '/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Edit.action');
    }
}