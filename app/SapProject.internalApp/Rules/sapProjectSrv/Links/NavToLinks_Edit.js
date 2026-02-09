export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Links')) {
        return clientAPI.executeAction({
            'Name': '/internalApp/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Links'
                },
                'OnSuccess': '/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Edit.action');
    }
}