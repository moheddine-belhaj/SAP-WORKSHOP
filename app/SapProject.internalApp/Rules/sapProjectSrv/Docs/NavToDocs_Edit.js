export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Docs')) {
        return clientAPI.executeAction({
            'Name': '/internalApp/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Docs'
                },
                'OnSuccess': '/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Edit.action');
    }
}