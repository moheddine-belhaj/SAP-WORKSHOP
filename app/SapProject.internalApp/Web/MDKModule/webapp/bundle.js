(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/internalApp/i18n/i18n.properties":
/*!************************************************************!*\
  !*** ./build.definitions/internalApp/i18n/i18n.properties ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "Draft_DraftAdministrativeData=Draft_DraftAdministrativeData\nDraft_DraftUUID=Draft_DraftUUID\nDraft_CreationDateTime=Draft_CreationDateTime\nDraft_CreatedByUser=Draft_CreatedByUser\nDraft_DraftIsCreatedByMe=Draft_DraftIsCreatedByMe\nDraft_LastChangeDateTime=Draft_LastChangeDateTime\nDraft_LastChangedByUser=Draft_LastChangedByUser\nDraft_InProcessByUser=Draft_InProcessByUser\nDraft_DraftIsProcessedByMe=Draft_DraftIsProcessedByMe\nDocs=Docs\nDocs_Detail=Docs Detail\nCreate_Docs_Detail=Create Docs Detail\nUpdate_Docs_Detail=Update Docs Detail\nLinks=Links\nLinks_Detail=Links Detail\nCreate_Links_Detail=Create Links Detail\nUpdate_Links_Detail=Update Links Detail\nUpload=Upload\nUpload_Detail=Upload Detail\nCreate_Upload_Detail=Create Upload Detail\nUpdate_Upload_Detail=Update Upload Detail"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let internalapp_actions_application_appupdate_action = __webpack_require__(/*! ./internalApp/Actions/Application/AppUpdate.action */ "./build.definitions/internalApp/Actions/Application/AppUpdate.action")
let internalapp_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./internalApp/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/internalApp/Actions/Application/AppUpdateFailureMessage.action")
let internalapp_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./internalApp/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/internalApp/Actions/Application/AppUpdateProgressBanner.action")
let internalapp_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./internalApp/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/internalApp/Actions/Application/AppUpdateSuccessMessage.action")
let internalapp_actions_application_logout_action = __webpack_require__(/*! ./internalApp/Actions/Application/Logout.action */ "./build.definitions/internalApp/Actions/Application/Logout.action")
let internalapp_actions_application_navtoabout_action = __webpack_require__(/*! ./internalApp/Actions/Application/NavToAbout.action */ "./build.definitions/internalApp/Actions/Application/NavToAbout.action")
let internalapp_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./internalApp/Actions/Application/NavToActivityLog.action */ "./build.definitions/internalApp/Actions/Application/NavToActivityLog.action")
let internalapp_actions_application_navtosupport_action = __webpack_require__(/*! ./internalApp/Actions/Application/NavToSupport.action */ "./build.definitions/internalApp/Actions/Application/NavToSupport.action")
let internalapp_actions_application_onwillupdate_action = __webpack_require__(/*! ./internalApp/Actions/Application/OnWillUpdate.action */ "./build.definitions/internalApp/Actions/Application/OnWillUpdate.action")
let internalapp_actions_application_reset_action = __webpack_require__(/*! ./internalApp/Actions/Application/Reset.action */ "./build.definitions/internalApp/Actions/Application/Reset.action")
let internalapp_actions_application_resetmessage_action = __webpack_require__(/*! ./internalApp/Actions/Application/ResetMessage.action */ "./build.definitions/internalApp/Actions/Application/ResetMessage.action")
let internalapp_actions_application_usermenupopover_action = __webpack_require__(/*! ./internalApp/Actions/Application/UserMenuPopover.action */ "./build.definitions/internalApp/Actions/Application/UserMenuPopover.action")
let internalapp_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./internalApp/Actions/CloseModalPage_Cancel.action */ "./build.definitions/internalApp/Actions/CloseModalPage_Cancel.action")
let internalapp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./internalApp/Actions/CloseModalPage_Complete.action */ "./build.definitions/internalApp/Actions/CloseModalPage_Complete.action")
let internalapp_actions_closepage_action = __webpack_require__(/*! ./internalApp/Actions/ClosePage.action */ "./build.definitions/internalApp/Actions/ClosePage.action")
let internalapp_actions_createentityfailuremessage_action = __webpack_require__(/*! ./internalApp/Actions/CreateEntityFailureMessage.action */ "./build.definitions/internalApp/Actions/CreateEntityFailureMessage.action")
let internalapp_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./internalApp/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/internalApp/Actions/CreateEntitySuccessMessage.action")
let internalapp_actions_deleteconfirmation_action = __webpack_require__(/*! ./internalApp/Actions/DeleteConfirmation.action */ "./build.definitions/internalApp/Actions/DeleteConfirmation.action")
let internalapp_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./internalApp/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/internalApp/Actions/DeleteEntityFailureMessage.action")
let internalapp_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./internalApp/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/internalApp/Actions/DeleteEntitySuccessMessage.action")
let internalapp_actions_draftdiscardentity_action = __webpack_require__(/*! ./internalApp/Actions/DraftDiscardEntity.action */ "./build.definitions/internalApp/Actions/DraftDiscardEntity.action")
let internalapp_actions_drafteditentity_action = __webpack_require__(/*! ./internalApp/Actions/DraftEditEntity.action */ "./build.definitions/internalApp/Actions/DraftEditEntity.action")
let internalapp_actions_draftsaveentity_action = __webpack_require__(/*! ./internalApp/Actions/DraftSaveEntity.action */ "./build.definitions/internalApp/Actions/DraftSaveEntity.action")
let internalapp_actions_genericbannermessage_action = __webpack_require__(/*! ./internalApp/Actions/GenericBannerMessage.action */ "./build.definitions/internalApp/Actions/GenericBannerMessage.action")
let internalapp_actions_genericmessagebox_action = __webpack_require__(/*! ./internalApp/Actions/GenericMessageBox.action */ "./build.definitions/internalApp/Actions/GenericMessageBox.action")
let internalapp_actions_genericnavigation_action = __webpack_require__(/*! ./internalApp/Actions/GenericNavigation.action */ "./build.definitions/internalApp/Actions/GenericNavigation.action")
let internalapp_actions_generictoastmessage_action = __webpack_require__(/*! ./internalApp/Actions/GenericToastMessage.action */ "./build.definitions/internalApp/Actions/GenericToastMessage.action")
let internalapp_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./internalApp/Actions/Logging/LogUploadFailure.action */ "./build.definitions/internalApp/Actions/Logging/LogUploadFailure.action")
let internalapp_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./internalApp/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/internalApp/Actions/Logging/LogUploadSuccessful.action")
let internalapp_actions_logging_uploadlog_action = __webpack_require__(/*! ./internalApp/Actions/Logging/UploadLog.action */ "./build.definitions/internalApp/Actions/Logging/UploadLog.action")
let internalapp_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./internalApp/Actions/Logging/UploadLogProgress.action */ "./build.definitions/internalApp/Actions/Logging/UploadLogProgress.action")
let internalapp_actions_sapprojectsrv_docs_docs_createentity_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Docs/Docs_CreateEntity.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/Docs_CreateEntity.action")
let internalapp_actions_sapprojectsrv_docs_docs_deleteentity_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Docs/Docs_DeleteEntity.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/Docs_DeleteEntity.action")
let internalapp_actions_sapprojectsrv_docs_docs_updateentity_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Docs/Docs_UpdateEntity.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/Docs_UpdateEntity.action")
let internalapp_actions_sapprojectsrv_docs_navtodocs_create_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Create.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Create.action")
let internalapp_actions_sapprojectsrv_docs_navtodocs_detail_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Detail.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Detail.action")
let internalapp_actions_sapprojectsrv_docs_navtodocs_edit_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Edit.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Edit.action")
let internalapp_actions_sapprojectsrv_docs_navtodocs_list_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Docs/NavToDocs_List.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_List.action")
let internalapp_actions_sapprojectsrv_links_links_createentity_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Links/Links_CreateEntity.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/Links_CreateEntity.action")
let internalapp_actions_sapprojectsrv_links_links_deleteentity_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Links/Links_DeleteEntity.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/Links_DeleteEntity.action")
let internalapp_actions_sapprojectsrv_links_links_updateentity_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Links/Links_UpdateEntity.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/Links_UpdateEntity.action")
let internalapp_actions_sapprojectsrv_links_navtolinks_create_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Links/NavToLinks_Create.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Create.action")
let internalapp_actions_sapprojectsrv_links_navtolinks_detail_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Links/NavToLinks_Detail.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Detail.action")
let internalapp_actions_sapprojectsrv_links_navtolinks_edit_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Links/NavToLinks_Edit.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Edit.action")
let internalapp_actions_sapprojectsrv_links_navtolinks_list_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Links/NavToLinks_List.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_List.action")
let internalapp_actions_sapprojectsrv_service_initializeonline_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Service/InitializeOnline.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Service/InitializeOnline.action")
let internalapp_actions_sapprojectsrv_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Service/InitializeOnlineFailureMessage.action")
let internalapp_actions_sapprojectsrv_upload_navtoupload_create_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Create.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Create.action")
let internalapp_actions_sapprojectsrv_upload_navtoupload_detail_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Detail.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Detail.action")
let internalapp_actions_sapprojectsrv_upload_navtoupload_edit_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Edit.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Edit.action")
let internalapp_actions_sapprojectsrv_upload_navtoupload_list_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Upload/NavToUpload_List.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_List.action")
let internalapp_actions_sapprojectsrv_upload_upload_createentity_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Upload/Upload_CreateEntity.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/Upload_CreateEntity.action")
let internalapp_actions_sapprojectsrv_upload_upload_deleteentity_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Upload/Upload_DeleteEntity.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/Upload_DeleteEntity.action")
let internalapp_actions_sapprojectsrv_upload_upload_updateentity_action = __webpack_require__(/*! ./internalApp/Actions/sapProjectSrv/Upload/Upload_UpdateEntity.action */ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/Upload_UpdateEntity.action")
let internalapp_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./internalApp/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/internalApp/Actions/UpdateEntityFailureMessage.action")
let internalapp_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./internalApp/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/internalApp/Actions/UpdateEntitySuccessMessage.action")
let internalapp_globals_application_appdefinition_version_global = __webpack_require__(/*! ./internalApp/Globals/Application/AppDefinition_Version.global */ "./build.definitions/internalApp/Globals/Application/AppDefinition_Version.global")
let internalapp_globals_application_applicationname_global = __webpack_require__(/*! ./internalApp/Globals/Application/ApplicationName.global */ "./build.definitions/internalApp/Globals/Application/ApplicationName.global")
let internalapp_globals_application_supportemail_global = __webpack_require__(/*! ./internalApp/Globals/Application/SupportEmail.global */ "./build.definitions/internalApp/Globals/Application/SupportEmail.global")
let internalapp_globals_application_supportphone_global = __webpack_require__(/*! ./internalApp/Globals/Application/SupportPhone.global */ "./build.definitions/internalApp/Globals/Application/SupportPhone.global")
let internalapp_i18n_i18n_properties = __webpack_require__(/*! ./internalApp/i18n/i18n.properties */ "./build.definitions/internalApp/i18n/i18n.properties")
let internalapp_jsconfig_json = __webpack_require__(/*! ./internalApp/jsconfig.json */ "./build.definitions/internalApp/jsconfig.json")
let internalapp_pages_application_about_page = __webpack_require__(/*! ./internalApp/Pages/Application/About.page */ "./build.definitions/internalApp/Pages/Application/About.page")
let internalapp_pages_application_support_page = __webpack_require__(/*! ./internalApp/Pages/Application/Support.page */ "./build.definitions/internalApp/Pages/Application/Support.page")
let internalapp_pages_application_useractivitylog_page = __webpack_require__(/*! ./internalApp/Pages/Application/UserActivityLog.page */ "./build.definitions/internalApp/Pages/Application/UserActivityLog.page")
let internalapp_pages_main_page = __webpack_require__(/*! ./internalApp/Pages/Main.page */ "./build.definitions/internalApp/Pages/Main.page")
let internalapp_pages_sapprojectsrv_docs_docs_create_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Docs/Docs_Create.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_Create.page")
let internalapp_pages_sapprojectsrv_docs_docs_detail_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Docs/Docs_Detail.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_Detail.page")
let internalapp_pages_sapprojectsrv_docs_docs_edit_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Docs/Docs_Edit.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_Edit.page")
let internalapp_pages_sapprojectsrv_docs_docs_list_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Docs/Docs_List.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_List.page")
let internalapp_pages_sapprojectsrv_links_links_create_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Links/Links_Create.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_Create.page")
let internalapp_pages_sapprojectsrv_links_links_detail_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Links/Links_Detail.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_Detail.page")
let internalapp_pages_sapprojectsrv_links_links_edit_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Links/Links_Edit.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_Edit.page")
let internalapp_pages_sapprojectsrv_links_links_list_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Links/Links_List.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_List.page")
let internalapp_pages_sapprojectsrv_upload_upload_create_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Upload/Upload_Create.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_Create.page")
let internalapp_pages_sapprojectsrv_upload_upload_detail_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Upload/Upload_Detail.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_Detail.page")
let internalapp_pages_sapprojectsrv_upload_upload_edit_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Upload/Upload_Edit.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_Edit.page")
let internalapp_pages_sapprojectsrv_upload_upload_list_page = __webpack_require__(/*! ./internalApp/Pages/sapProjectSrv_Upload/Upload_List.page */ "./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_List.page")
let internalapp_rules_application_appupdatefailure_js = __webpack_require__(/*! ./internalApp/Rules/Application/AppUpdateFailure.js */ "./build.definitions/internalApp/Rules/Application/AppUpdateFailure.js")
let internalapp_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./internalApp/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/internalApp/Rules/Application/AppUpdateSuccess.js")
let internalapp_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./internalApp/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/internalApp/Rules/Application/ClientIsMultiUserMode.js")
let internalapp_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./internalApp/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/internalApp/Rules/Application/GetClientSupportVersions.js")
let internalapp_rules_application_getclientversion_js = __webpack_require__(/*! ./internalApp/Rules/Application/GetClientVersion.js */ "./build.definitions/internalApp/Rules/Application/GetClientVersion.js")
let internalapp_rules_application_onwillupdate_js = __webpack_require__(/*! ./internalApp/Rules/Application/OnWillUpdate.js */ "./build.definitions/internalApp/Rules/Application/OnWillUpdate.js")
let internalapp_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./internalApp/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/internalApp/Rules/Application/ResetAppSettingsAndLogout.js")
let internalapp_rules_logging_loglevels_js = __webpack_require__(/*! ./internalApp/Rules/Logging/LogLevels.js */ "./build.definitions/internalApp/Rules/Logging/LogLevels.js")
let internalapp_rules_logging_settracecategories_js = __webpack_require__(/*! ./internalApp/Rules/Logging/SetTraceCategories.js */ "./build.definitions/internalApp/Rules/Logging/SetTraceCategories.js")
let internalapp_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./internalApp/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/internalApp/Rules/Logging/SetUserLogLevel.js")
let internalapp_rules_logging_togglelogging_js = __webpack_require__(/*! ./internalApp/Rules/Logging/ToggleLogging.js */ "./build.definitions/internalApp/Rules/Logging/ToggleLogging.js")
let internalapp_rules_logging_tracecategories_js = __webpack_require__(/*! ./internalApp/Rules/Logging/TraceCategories.js */ "./build.definitions/internalApp/Rules/Logging/TraceCategories.js")
let internalapp_rules_logging_userlogsetting_js = __webpack_require__(/*! ./internalApp/Rules/Logging/UserLogSetting.js */ "./build.definitions/internalApp/Rules/Logging/UserLogSetting.js")
let internalapp_rules_sapprojectsrv_docs_docs_cancel_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Docs/Docs_Cancel.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_Cancel.js")
let internalapp_rules_sapprojectsrv_docs_docs_createentity_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Docs/Docs_CreateEntity.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_CreateEntity.js")
let internalapp_rules_sapprojectsrv_docs_docs_deleteconfirmation_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Docs/Docs_DeleteConfirmation.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_DeleteConfirmation.js")
let internalapp_rules_sapprojectsrv_docs_docs_updateentity_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Docs/Docs_UpdateEntity.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_UpdateEntity.js")
let internalapp_rules_sapprojectsrv_docs_navtodocs_edit_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Docs/NavToDocs_Edit.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Docs/NavToDocs_Edit.js")
let internalapp_rules_sapprojectsrv_links_links_cancel_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Links/Links_Cancel.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_Cancel.js")
let internalapp_rules_sapprojectsrv_links_links_createentity_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Links/Links_CreateEntity.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_CreateEntity.js")
let internalapp_rules_sapprojectsrv_links_links_deleteconfirmation_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Links/Links_DeleteConfirmation.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_DeleteConfirmation.js")
let internalapp_rules_sapprojectsrv_links_links_updateentity_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Links/Links_UpdateEntity.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_UpdateEntity.js")
let internalapp_rules_sapprojectsrv_links_navtolinks_edit_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Links/NavToLinks_Edit.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Links/NavToLinks_Edit.js")
let internalapp_rules_sapprojectsrv_upload_navtoupload_edit_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Upload/NavToUpload_Edit.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Upload/NavToUpload_Edit.js")
let internalapp_rules_sapprojectsrv_upload_upload_cancel_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Upload/Upload_Cancel.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_Cancel.js")
let internalapp_rules_sapprojectsrv_upload_upload_createentity_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Upload/Upload_CreateEntity.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_CreateEntity.js")
let internalapp_rules_sapprojectsrv_upload_upload_deleteconfirmation_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Upload/Upload_DeleteConfirmation.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_DeleteConfirmation.js")
let internalapp_rules_sapprojectsrv_upload_upload_updateentity_js = __webpack_require__(/*! ./internalApp/Rules/sapProjectSrv/Upload/Upload_UpdateEntity.js */ "./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_UpdateEntity.js")
let internalapp_rules_service_initialize_js = __webpack_require__(/*! ./internalApp/Rules/Service/Initialize.js */ "./build.definitions/internalApp/Rules/Service/Initialize.js")
let internalapp_services_sapprojectsrv_service = __webpack_require__(/*! ./internalApp/Services/sapProjectSrv.service */ "./build.definitions/internalApp/Services/sapProjectSrv.service")
let internalapp_styles_styles_css = __webpack_require__(/*! ./internalApp/Styles/Styles.css */ "./build.definitions/internalApp/Styles/Styles.css")
let internalapp_styles_styles_json = __webpack_require__(/*! ./internalApp/Styles/Styles.json */ "./build.definitions/internalApp/Styles/Styles.json")
let internalapp_styles_styles_less = __webpack_require__(/*! ./internalApp/Styles/Styles.less */ "./build.definitions/internalApp/Styles/Styles.less")
let internalapp_styles_styles_nss = __webpack_require__(/*! ./internalApp/Styles/Styles.nss */ "./build.definitions/internalApp/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	internalapp_actions_application_appupdate_action : internalapp_actions_application_appupdate_action,
	internalapp_actions_application_appupdatefailuremessage_action : internalapp_actions_application_appupdatefailuremessage_action,
	internalapp_actions_application_appupdateprogressbanner_action : internalapp_actions_application_appupdateprogressbanner_action,
	internalapp_actions_application_appupdatesuccessmessage_action : internalapp_actions_application_appupdatesuccessmessage_action,
	internalapp_actions_application_logout_action : internalapp_actions_application_logout_action,
	internalapp_actions_application_navtoabout_action : internalapp_actions_application_navtoabout_action,
	internalapp_actions_application_navtoactivitylog_action : internalapp_actions_application_navtoactivitylog_action,
	internalapp_actions_application_navtosupport_action : internalapp_actions_application_navtosupport_action,
	internalapp_actions_application_onwillupdate_action : internalapp_actions_application_onwillupdate_action,
	internalapp_actions_application_reset_action : internalapp_actions_application_reset_action,
	internalapp_actions_application_resetmessage_action : internalapp_actions_application_resetmessage_action,
	internalapp_actions_application_usermenupopover_action : internalapp_actions_application_usermenupopover_action,
	internalapp_actions_closemodalpage_cancel_action : internalapp_actions_closemodalpage_cancel_action,
	internalapp_actions_closemodalpage_complete_action : internalapp_actions_closemodalpage_complete_action,
	internalapp_actions_closepage_action : internalapp_actions_closepage_action,
	internalapp_actions_createentityfailuremessage_action : internalapp_actions_createentityfailuremessage_action,
	internalapp_actions_createentitysuccessmessage_action : internalapp_actions_createentitysuccessmessage_action,
	internalapp_actions_deleteconfirmation_action : internalapp_actions_deleteconfirmation_action,
	internalapp_actions_deleteentityfailuremessage_action : internalapp_actions_deleteentityfailuremessage_action,
	internalapp_actions_deleteentitysuccessmessage_action : internalapp_actions_deleteentitysuccessmessage_action,
	internalapp_actions_draftdiscardentity_action : internalapp_actions_draftdiscardentity_action,
	internalapp_actions_drafteditentity_action : internalapp_actions_drafteditentity_action,
	internalapp_actions_draftsaveentity_action : internalapp_actions_draftsaveentity_action,
	internalapp_actions_genericbannermessage_action : internalapp_actions_genericbannermessage_action,
	internalapp_actions_genericmessagebox_action : internalapp_actions_genericmessagebox_action,
	internalapp_actions_genericnavigation_action : internalapp_actions_genericnavigation_action,
	internalapp_actions_generictoastmessage_action : internalapp_actions_generictoastmessage_action,
	internalapp_actions_logging_loguploadfailure_action : internalapp_actions_logging_loguploadfailure_action,
	internalapp_actions_logging_loguploadsuccessful_action : internalapp_actions_logging_loguploadsuccessful_action,
	internalapp_actions_logging_uploadlog_action : internalapp_actions_logging_uploadlog_action,
	internalapp_actions_logging_uploadlogprogress_action : internalapp_actions_logging_uploadlogprogress_action,
	internalapp_actions_sapprojectsrv_docs_docs_createentity_action : internalapp_actions_sapprojectsrv_docs_docs_createentity_action,
	internalapp_actions_sapprojectsrv_docs_docs_deleteentity_action : internalapp_actions_sapprojectsrv_docs_docs_deleteentity_action,
	internalapp_actions_sapprojectsrv_docs_docs_updateentity_action : internalapp_actions_sapprojectsrv_docs_docs_updateentity_action,
	internalapp_actions_sapprojectsrv_docs_navtodocs_create_action : internalapp_actions_sapprojectsrv_docs_navtodocs_create_action,
	internalapp_actions_sapprojectsrv_docs_navtodocs_detail_action : internalapp_actions_sapprojectsrv_docs_navtodocs_detail_action,
	internalapp_actions_sapprojectsrv_docs_navtodocs_edit_action : internalapp_actions_sapprojectsrv_docs_navtodocs_edit_action,
	internalapp_actions_sapprojectsrv_docs_navtodocs_list_action : internalapp_actions_sapprojectsrv_docs_navtodocs_list_action,
	internalapp_actions_sapprojectsrv_links_links_createentity_action : internalapp_actions_sapprojectsrv_links_links_createentity_action,
	internalapp_actions_sapprojectsrv_links_links_deleteentity_action : internalapp_actions_sapprojectsrv_links_links_deleteentity_action,
	internalapp_actions_sapprojectsrv_links_links_updateentity_action : internalapp_actions_sapprojectsrv_links_links_updateentity_action,
	internalapp_actions_sapprojectsrv_links_navtolinks_create_action : internalapp_actions_sapprojectsrv_links_navtolinks_create_action,
	internalapp_actions_sapprojectsrv_links_navtolinks_detail_action : internalapp_actions_sapprojectsrv_links_navtolinks_detail_action,
	internalapp_actions_sapprojectsrv_links_navtolinks_edit_action : internalapp_actions_sapprojectsrv_links_navtolinks_edit_action,
	internalapp_actions_sapprojectsrv_links_navtolinks_list_action : internalapp_actions_sapprojectsrv_links_navtolinks_list_action,
	internalapp_actions_sapprojectsrv_service_initializeonline_action : internalapp_actions_sapprojectsrv_service_initializeonline_action,
	internalapp_actions_sapprojectsrv_service_initializeonlinefailuremessage_action : internalapp_actions_sapprojectsrv_service_initializeonlinefailuremessage_action,
	internalapp_actions_sapprojectsrv_upload_navtoupload_create_action : internalapp_actions_sapprojectsrv_upload_navtoupload_create_action,
	internalapp_actions_sapprojectsrv_upload_navtoupload_detail_action : internalapp_actions_sapprojectsrv_upload_navtoupload_detail_action,
	internalapp_actions_sapprojectsrv_upload_navtoupload_edit_action : internalapp_actions_sapprojectsrv_upload_navtoupload_edit_action,
	internalapp_actions_sapprojectsrv_upload_navtoupload_list_action : internalapp_actions_sapprojectsrv_upload_navtoupload_list_action,
	internalapp_actions_sapprojectsrv_upload_upload_createentity_action : internalapp_actions_sapprojectsrv_upload_upload_createentity_action,
	internalapp_actions_sapprojectsrv_upload_upload_deleteentity_action : internalapp_actions_sapprojectsrv_upload_upload_deleteentity_action,
	internalapp_actions_sapprojectsrv_upload_upload_updateentity_action : internalapp_actions_sapprojectsrv_upload_upload_updateentity_action,
	internalapp_actions_updateentityfailuremessage_action : internalapp_actions_updateentityfailuremessage_action,
	internalapp_actions_updateentitysuccessmessage_action : internalapp_actions_updateentitysuccessmessage_action,
	internalapp_globals_application_appdefinition_version_global : internalapp_globals_application_appdefinition_version_global,
	internalapp_globals_application_applicationname_global : internalapp_globals_application_applicationname_global,
	internalapp_globals_application_supportemail_global : internalapp_globals_application_supportemail_global,
	internalapp_globals_application_supportphone_global : internalapp_globals_application_supportphone_global,
	internalapp_i18n_i18n_properties : internalapp_i18n_i18n_properties,
	internalapp_jsconfig_json : internalapp_jsconfig_json,
	internalapp_pages_application_about_page : internalapp_pages_application_about_page,
	internalapp_pages_application_support_page : internalapp_pages_application_support_page,
	internalapp_pages_application_useractivitylog_page : internalapp_pages_application_useractivitylog_page,
	internalapp_pages_main_page : internalapp_pages_main_page,
	internalapp_pages_sapprojectsrv_docs_docs_create_page : internalapp_pages_sapprojectsrv_docs_docs_create_page,
	internalapp_pages_sapprojectsrv_docs_docs_detail_page : internalapp_pages_sapprojectsrv_docs_docs_detail_page,
	internalapp_pages_sapprojectsrv_docs_docs_edit_page : internalapp_pages_sapprojectsrv_docs_docs_edit_page,
	internalapp_pages_sapprojectsrv_docs_docs_list_page : internalapp_pages_sapprojectsrv_docs_docs_list_page,
	internalapp_pages_sapprojectsrv_links_links_create_page : internalapp_pages_sapprojectsrv_links_links_create_page,
	internalapp_pages_sapprojectsrv_links_links_detail_page : internalapp_pages_sapprojectsrv_links_links_detail_page,
	internalapp_pages_sapprojectsrv_links_links_edit_page : internalapp_pages_sapprojectsrv_links_links_edit_page,
	internalapp_pages_sapprojectsrv_links_links_list_page : internalapp_pages_sapprojectsrv_links_links_list_page,
	internalapp_pages_sapprojectsrv_upload_upload_create_page : internalapp_pages_sapprojectsrv_upload_upload_create_page,
	internalapp_pages_sapprojectsrv_upload_upload_detail_page : internalapp_pages_sapprojectsrv_upload_upload_detail_page,
	internalapp_pages_sapprojectsrv_upload_upload_edit_page : internalapp_pages_sapprojectsrv_upload_upload_edit_page,
	internalapp_pages_sapprojectsrv_upload_upload_list_page : internalapp_pages_sapprojectsrv_upload_upload_list_page,
	internalapp_rules_application_appupdatefailure_js : internalapp_rules_application_appupdatefailure_js,
	internalapp_rules_application_appupdatesuccess_js : internalapp_rules_application_appupdatesuccess_js,
	internalapp_rules_application_clientismultiusermode_js : internalapp_rules_application_clientismultiusermode_js,
	internalapp_rules_application_getclientsupportversions_js : internalapp_rules_application_getclientsupportversions_js,
	internalapp_rules_application_getclientversion_js : internalapp_rules_application_getclientversion_js,
	internalapp_rules_application_onwillupdate_js : internalapp_rules_application_onwillupdate_js,
	internalapp_rules_application_resetappsettingsandlogout_js : internalapp_rules_application_resetappsettingsandlogout_js,
	internalapp_rules_logging_loglevels_js : internalapp_rules_logging_loglevels_js,
	internalapp_rules_logging_settracecategories_js : internalapp_rules_logging_settracecategories_js,
	internalapp_rules_logging_setuserloglevel_js : internalapp_rules_logging_setuserloglevel_js,
	internalapp_rules_logging_togglelogging_js : internalapp_rules_logging_togglelogging_js,
	internalapp_rules_logging_tracecategories_js : internalapp_rules_logging_tracecategories_js,
	internalapp_rules_logging_userlogsetting_js : internalapp_rules_logging_userlogsetting_js,
	internalapp_rules_sapprojectsrv_docs_docs_cancel_js : internalapp_rules_sapprojectsrv_docs_docs_cancel_js,
	internalapp_rules_sapprojectsrv_docs_docs_createentity_js : internalapp_rules_sapprojectsrv_docs_docs_createentity_js,
	internalapp_rules_sapprojectsrv_docs_docs_deleteconfirmation_js : internalapp_rules_sapprojectsrv_docs_docs_deleteconfirmation_js,
	internalapp_rules_sapprojectsrv_docs_docs_updateentity_js : internalapp_rules_sapprojectsrv_docs_docs_updateentity_js,
	internalapp_rules_sapprojectsrv_docs_navtodocs_edit_js : internalapp_rules_sapprojectsrv_docs_navtodocs_edit_js,
	internalapp_rules_sapprojectsrv_links_links_cancel_js : internalapp_rules_sapprojectsrv_links_links_cancel_js,
	internalapp_rules_sapprojectsrv_links_links_createentity_js : internalapp_rules_sapprojectsrv_links_links_createentity_js,
	internalapp_rules_sapprojectsrv_links_links_deleteconfirmation_js : internalapp_rules_sapprojectsrv_links_links_deleteconfirmation_js,
	internalapp_rules_sapprojectsrv_links_links_updateentity_js : internalapp_rules_sapprojectsrv_links_links_updateentity_js,
	internalapp_rules_sapprojectsrv_links_navtolinks_edit_js : internalapp_rules_sapprojectsrv_links_navtolinks_edit_js,
	internalapp_rules_sapprojectsrv_upload_navtoupload_edit_js : internalapp_rules_sapprojectsrv_upload_navtoupload_edit_js,
	internalapp_rules_sapprojectsrv_upload_upload_cancel_js : internalapp_rules_sapprojectsrv_upload_upload_cancel_js,
	internalapp_rules_sapprojectsrv_upload_upload_createentity_js : internalapp_rules_sapprojectsrv_upload_upload_createentity_js,
	internalapp_rules_sapprojectsrv_upload_upload_deleteconfirmation_js : internalapp_rules_sapprojectsrv_upload_upload_deleteconfirmation_js,
	internalapp_rules_sapprojectsrv_upload_upload_updateentity_js : internalapp_rules_sapprojectsrv_upload_upload_updateentity_js,
	internalapp_rules_service_initialize_js : internalapp_rules_service_initialize_js,
	internalapp_services_sapprojectsrv_service : internalapp_services_sapprojectsrv_service,
	internalapp_styles_styles_css : internalapp_styles_styles_css,
	internalapp_styles_styles_json : internalapp_styles_styles_json,
	internalapp_styles_styles_less : internalapp_styles_styles_less,
	internalapp_styles_styles_nss : internalapp_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Application/AppUpdateFailure.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Application/AppUpdateFailure.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/internalApp/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Application/AppUpdateSuccess.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Application/AppUpdateSuccess.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/internalApp/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/internalApp/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Application/ClientIsMultiUserMode.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Application/ClientIsMultiUserMode.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Application/GetClientSupportVersions.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Application/GetClientSupportVersions.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Application/GetClientVersion.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Application/GetClientVersion.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Application/OnWillUpdate.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Application/OnWillUpdate.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/internalApp/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Application/ResetAppSettingsAndLogout.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/internalApp/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Logging/LogLevels.js":
/*!******************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Logging/LogLevels.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Logging/SetTraceCategories.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Logging/SetTraceCategories.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Logging/SetUserLogLevel.js":
/*!************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Logging/SetUserLogLevel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Logging/ToggleLogging.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Logging/ToggleLogging.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Logging/TraceCategories.js":
/*!************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Logging/TraceCategories.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Logging/UserLogSetting.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Logging/UserLogSetting.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/Service/Initialize.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/Service/Initialize.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _sapProjectSrv = context.executeAction('/internalApp/Actions/sapProjectSrv/Service/InitializeOnline.action');

  //You can add more service initialize actions here

  return Promise.all([_sapProjectSrv]).then(() => {
    // After Initializing the DB connections

    // Display successful initialization  message to the user
    return context.executeAction({
      "Name": "/internalApp/Actions/GenericToastMessage.action",
      "Properties": {
        "Message": "Application Services Initialized",
        "Animated": true,
        "Duration": 1,
        "IsIconHidden": true,
        "NumberOfLines": 1
      }
    });
  }).catch(() => {
    return false;
  });
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_Cancel.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_Cancel.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_CreateEntity.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_CreateEntity.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Docs')) {
    return clientAPI.executeAction({
      'Name': '/internalApp/Actions/sapProjectSrv/Docs/Docs_CreateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
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

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_DeleteConfirmation.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_DeleteConfirmation.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/internalApp/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Docs/Docs_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_UpdateEntity.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Docs/Docs_UpdateEntity.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Docs')) {
    return clientAPI.executeAction({
      'Name': '/internalApp/Actions/sapProjectSrv/Docs/Docs_UpdateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
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

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Docs/NavToDocs_Edit.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Docs/NavToDocs_Edit.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_Cancel.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_Cancel.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_CreateEntity.js":
/*!***************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_CreateEntity.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Links')) {
    return clientAPI.executeAction({
      'Name': '/internalApp/Actions/sapProjectSrv/Links/Links_CreateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
      let newEntity = JSON.parse(result.data);
      return clientAPI.executeAction({
        'Name': '/internalApp/Actions/DraftSaveEntity.action',
        'Properties': {
          'Target': {
            'EntitySet': 'Links',
            'ReadLink': newEntity['@odata.readLink']
          }
        }
      });
    });
  } else {
    return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Links/Links_CreateEntity.action');
  }
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_DeleteConfirmation.js":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_DeleteConfirmation.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/internalApp/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Links/Links_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_UpdateEntity.js":
/*!***************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Links/Links_UpdateEntity.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Links')) {
    return clientAPI.executeAction({
      'Name': '/internalApp/Actions/sapProjectSrv/Links/Links_UpdateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
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

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Links/NavToLinks_Edit.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Links/NavToLinks_Edit.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Upload/NavToUpload_Edit.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Upload/NavToUpload_Edit.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_Cancel.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_Cancel.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_CreateEntity.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_CreateEntity.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Upload')) {
    return clientAPI.executeAction({
      'Name': '/internalApp/Actions/sapProjectSrv/Upload/Upload_CreateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
      let newEntity = JSON.parse(result.data);
      return clientAPI.executeAction({
        'Name': '/internalApp/Actions/DraftSaveEntity.action',
        'Properties': {
          'Target': {
            'EntitySet': 'Upload',
            'ReadLink': newEntity['@odata.readLink']
          }
        }
      });
    });
  } else {
    return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Upload/Upload_CreateEntity.action');
  }
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_DeleteConfirmation.js":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_DeleteConfirmation.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/internalApp/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/internalApp/Actions/sapProjectSrv/Upload/Upload_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_UpdateEntity.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/internalApp/Rules/sapProjectSrv/Upload/Upload_UpdateEntity.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/internalApp/Services/sapProjectSrv.service').isDraftEnabled('Upload')) {
    return clientAPI.executeAction({
      'Name': '/internalApp/Actions/sapProjectSrv/Upload/Upload_UpdateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
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

/***/ }),

/***/ "./build.definitions/internalApp/Styles/Styles.css":
/*!*********************************************************!*\
  !*** ./build.definitions/internalApp/Styles/Styles.css ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/internalApp/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/internalApp/Styles/Styles.less":
/*!**********************************************************!*\
  !*** ./build.definitions/internalApp/Styles/Styles.less ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/internalApp/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/internalApp/Styles/Styles.nss":
/*!*********************************************************!*\
  !*** ./build.definitions/internalApp/Styles/Styles.nss ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/internalApp/Pages/Application/About.page":
/*!********************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/Application/About.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/internalApp/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/internalApp/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/internalApp/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/internalApp/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/internalApp/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/Application/Support.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/Application/Support.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/internalApp/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/internalApp/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/internalApp/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/internalApp/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/internalApp/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/Application/UserActivityLog.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/Application/UserActivityLog.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/internalApp/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/internalApp/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/internalApp/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/internalApp/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/internalApp/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/internalApp/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/internalApp/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"},"OnLoaded":"/internalApp/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/Main.page":
/*!*******************************************************!*\
  !*** ./build.definitions/internalApp/Pages/Main.page ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader_sapProjectSrv","AccessoryType":"None","UseTopPadding":true,"Caption":"sapProjectSrv","_Type":"SectionCommon.Type.Header"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"OnPress":"/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_List.action","Alignment":"Center","Title":"Docs","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/internalApp/Actions/sapProjectSrv/Links/NavToLinks_List.action","Alignment":"Center","Title":"Links","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"},{"OnPress":"/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_List.action","Alignment":"Center","Title":"Upload","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"}],"_Name":"SectionButtonTable_sapProjectSrv","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/internalApp/Actions/Application/UserMenuPopover.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Main","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_Create.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_Create.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/internalApp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/internalApp/Rules/sapProjectSrv/Docs/Docs_CreateEntity.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Docs_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"docsID","_Name":"docsID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"internalUserId","_Name":"internalUserId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"filePath","_Name":"filePath","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileHash","_Name":"fileHash","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Datetime","_Name":"uploadedAt","Caption":"uploadedAt","_Type":"Control.Type.FormCell.DatePicker"},{"_Name":"isDeleted","Caption":"isDeleted","Value":false,"_Type":"Control.Type.FormCell.Switch"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Docs_Create"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_Detail.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_Detail.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/internalApp/Services/sapProjectSrv.service","EntitySet":"Docs","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/internalApp/Rules/sapProjectSrv/Docs/NavToDocs_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/internalApp/Rules/sapProjectSrv/Docs/Docs_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Docs_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{fileName}","Subhead":"{docsID}","BodyText":"","Footnote":"{filePath}","Description":"{internalUserId}","StatusText":"{fileHash}","StatusImage":"","SubstatusImage":"","SubstatusText":"{uploadedAt}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"docsID","Value":"{docsID}","_Type":"KeyValue.Type.Item"},{"KeyName":"internalUserId","Value":"{internalUserId}","_Type":"KeyValue.Type.Item"},{"KeyName":"fileName","Value":"{fileName}","_Type":"KeyValue.Type.Item"},{"KeyName":"filePath","Value":"{filePath}","_Type":"KeyValue.Type.Item"},{"KeyName":"fileHash","Value":"{fileHash}","_Type":"KeyValue.Type.Item"},{"KeyName":"uploadedAt","Value":"{uploadedAt}","_Type":"KeyValue.Type.Item"},{"KeyName":"isDeleted","Value":"{isDeleted}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Docs_Detail"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_Edit.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_Edit.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/internalApp/Services/sapProjectSrv.service","EntitySet":"Docs","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/internalApp/Rules/sapProjectSrv/Docs/Docs_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/internalApp/Rules/sapProjectSrv/Docs/Docs_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Docs_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"docsID","_Name":"docsID","Value":"{docsID}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"internalUserId","_Name":"internalUserId","Value":"{internalUserId}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","Value":"{fileName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"filePath","_Name":"filePath","Value":"{filePath}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileHash","_Name":"fileHash","Value":"{fileHash}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Datetime","_Name":"uploadedAt","Value":"{uploadedAt}","Caption":"uploadedAt","_Type":"Control.Type.FormCell.DatePicker"},{"_Name":"isDeleted","Caption":"isDeleted","Value":"{isDeleted}","_Type":"Control.Type.FormCell.Switch"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Docs_Edit"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_List.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Docs/Docs_List.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Docs)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{internalUserId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Detail.action","StatusImage":"","Title":"{fileName}","Footnote":"{filePath}","PreserveIconStackSpacing":false,"StatusText":"{fileHash}","Subhead":"{docsID}","SubstatusText":"{uploadedAt}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Docs","Service":"/internalApp/Services/sapProjectSrv.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Docs_List"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_Create.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_Create.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/internalApp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/internalApp/Rules/sapProjectSrv/Links/Links_CreateEntity.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Links_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"token","_Name":"token","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"recipient_email","_Name":"recipient_email","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Datetime","_Name":"created_at","Caption":"created_at","_Type":"Control.Type.FormCell.DatePicker"},{"Mode":"Datetime","_Name":"expires_at","Caption":"expires_at","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"access_count","KeyboardType":"Number","_Name":"access_count","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"max_access","KeyboardType":"Number","_Name":"max_access","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"password_hash","_Name":"password_hash","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"metadata","_Name":"metadata","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Links_Create"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_Detail.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_Detail.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/internalApp/Services/sapProjectSrv.service","EntitySet":"Links","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/internalApp/Rules/sapProjectSrv/Links/NavToLinks_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/internalApp/Rules/sapProjectSrv/Links/Links_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Links_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ID}","Subhead":"{token}","BodyText":"","Footnote":"{created_at}","Description":"{recipient_email}","StatusText":"{expires_at}","StatusImage":"","SubstatusImage":"","SubstatusText":"{status}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"token","Value":"{token}","_Type":"KeyValue.Type.Item"},{"KeyName":"recipient_email","Value":"{recipient_email}","_Type":"KeyValue.Type.Item"},{"KeyName":"created_at","Value":"{created_at}","_Type":"KeyValue.Type.Item"},{"KeyName":"expires_at","Value":"{expires_at}","_Type":"KeyValue.Type.Item"},{"KeyName":"status","Value":"{status}","_Type":"KeyValue.Type.Item"},{"KeyName":"access_count","Value":"{access_count}","_Type":"KeyValue.Type.Item"},{"KeyName":"max_access","Value":"{max_access}","_Type":"KeyValue.Type.Item"},{"KeyName":"password_hash","Value":"{password_hash}","_Type":"KeyValue.Type.Item"},{"KeyName":"metadata","Value":"{metadata}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Links_Detail"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_Edit.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_Edit.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/internalApp/Services/sapProjectSrv.service","EntitySet":"Links","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/internalApp/Rules/sapProjectSrv/Links/Links_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/internalApp/Rules/sapProjectSrv/Links/Links_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Links_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"token","_Name":"token","Value":"{token}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"recipient_email","_Name":"recipient_email","Value":"{recipient_email}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Datetime","_Name":"created_at","Value":"{created_at}","Caption":"created_at","_Type":"Control.Type.FormCell.DatePicker"},{"Mode":"Datetime","_Name":"expires_at","Value":"{expires_at}","Caption":"expires_at","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"access_count","_Name":"access_count","Value":"{access_count}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"max_access","_Name":"max_access","Value":"{max_access}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"password_hash","_Name":"password_hash","Value":"{password_hash}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"metadata","_Name":"metadata","Value":"{metadata}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Links_Edit"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_List.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Links/Links_List.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Links)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{recipient_email}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Detail.action","StatusImage":"","Title":"{ID}","Footnote":"{created_at}","PreserveIconStackSpacing":false,"StatusText":"{expires_at}","Subhead":"{token}","SubstatusText":"{status}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Links","Service":"/internalApp/Services/sapProjectSrv.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Links_List"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_Create.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_Create.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/internalApp/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/internalApp/Rules/sapProjectSrv/Upload/Upload_CreateEntity.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Upload_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"docsID","_Name":"docsID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"internalUserId","_Name":"internalUserId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"filePath","_Name":"filePath","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileHash","_Name":"fileHash","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Datetime","_Name":"uploadedAt","Caption":"uploadedAt","_Type":"Control.Type.FormCell.DatePicker"},{"_Name":"isDeleted","Caption":"isDeleted","Value":false,"_Type":"Control.Type.FormCell.Switch"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Upload_Create"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_Detail.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_Detail.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/internalApp/Services/sapProjectSrv.service","EntitySet":"Upload","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/internalApp/Rules/sapProjectSrv/Upload/NavToUpload_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/internalApp/Rules/sapProjectSrv/Upload/Upload_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Upload_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{fileName}","Subhead":"{docsID}","BodyText":"","Footnote":"{filePath}","Description":"{internalUserId}","StatusText":"{fileHash}","StatusImage":"","SubstatusImage":"","SubstatusText":"{uploadedAt}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"docsID","Value":"{docsID}","_Type":"KeyValue.Type.Item"},{"KeyName":"internalUserId","Value":"{internalUserId}","_Type":"KeyValue.Type.Item"},{"KeyName":"fileName","Value":"{fileName}","_Type":"KeyValue.Type.Item"},{"KeyName":"filePath","Value":"{filePath}","_Type":"KeyValue.Type.Item"},{"KeyName":"fileHash","Value":"{fileHash}","_Type":"KeyValue.Type.Item"},{"KeyName":"uploadedAt","Value":"{uploadedAt}","_Type":"KeyValue.Type.Item"},{"KeyName":"isDeleted","Value":"{isDeleted}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Upload_Detail"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_Edit.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_Edit.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/internalApp/Services/sapProjectSrv.service","EntitySet":"Upload","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/internalApp/Rules/sapProjectSrv/Upload/Upload_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/internalApp/Rules/sapProjectSrv/Upload/Upload_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Upload_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"docsID","_Name":"docsID","Value":"{docsID}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"internalUserId","_Name":"internalUserId","Value":"{internalUserId}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileName","_Name":"fileName","Value":"{fileName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"filePath","_Name":"filePath","Value":"{filePath}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"fileHash","_Name":"fileHash","Value":"{fileHash}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Datetime","_Name":"uploadedAt","Value":"{uploadedAt}","Caption":"uploadedAt","_Type":"Control.Type.FormCell.DatePicker"},{"_Name":"isDeleted","Caption":"isDeleted","Value":"{isDeleted}","_Type":"Control.Type.FormCell.Switch"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Upload_Edit"}

/***/ }),

/***/ "./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_List.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/internalApp/Pages/sapProjectSrv_Upload/Upload_List.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Upload)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{internalUserId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Detail.action","StatusImage":"","Title":"{fileName}","Footnote":"{filePath}","PreserveIconStackSpacing":false,"StatusText":"{fileHash}","Subhead":"{docsID}","SubstatusText":"{uploadedAt}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Upload","Service":"/internalApp/Services/sapProjectSrv.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Upload_List"}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"internalApp","Version":"/internalApp/Globals/Application/AppDefinition_Version.global","MainPage":"/internalApp/Pages/Main.page","OnLaunch":"/internalApp/Rules/Service/Initialize.js","OnWillUpdate":"/internalApp/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/internalApp/Rules/Service/Initialize.js","Styles":"/internalApp/Styles/Styles.less","Localization":"/internalApp/i18n/i18n.properties","_SchemaVersion":"25.9","StyleSheets":{"Styles":{"css":"/internalApp/Styles/Styles.css","ios":"/internalApp/Styles/Styles.nss","android":"/internalApp/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/AppUpdate.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/AppUpdate.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/internalApp/Rules/Application/AppUpdateFailure.js","OnSuccess":"/internalApp/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/AppUpdateFailureMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/AppUpdateFailureMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/AppUpdateProgressBanner.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/AppUpdateProgressBanner.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/internalApp/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/AppUpdateSuccessMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/AppUpdateSuccessMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/Logout.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/Logout.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/NavToAbout.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/NavToAbout.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/internalApp/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/NavToActivityLog.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/NavToActivityLog.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/internalApp/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/NavToSupport.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/NavToSupport.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/internalApp/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/OnWillUpdate.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/OnWillUpdate.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/Reset.action":
/*!************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/Reset.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/ResetMessage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/ResetMessage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/internalApp/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Application/UserMenuPopover.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Application/UserMenuPopover.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/internalApp/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/internalApp/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/internalApp/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/internalApp/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/internalApp/Actions/Application/Logout.action","Title":"Logout","Visible":"/internalApp/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/CloseModalPage_Cancel.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/CloseModalPage_Cancel.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/CloseModalPage_Complete.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/CloseModalPage_Complete.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/ClosePage.action":
/*!****************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/ClosePage.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/CreateEntityFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/CreateEntityFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/CreateEntitySuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/CreateEntitySuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/internalApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/DeleteConfirmation.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/DeleteConfirmation.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/DeleteEntityFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/DeleteEntityFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/DeleteEntitySuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/DeleteEntitySuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/internalApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/DraftDiscardEntity.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/DraftDiscardEntity.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Discard","Target":{"Service":"/internalApp/Services/sapProjectSrv.service","EntitySet":"Docs","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/internalApp/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Discarded"}},"OnFailure":"/internalApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/DraftEditEntity.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/DraftEditEntity.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Edit","Target":{"Service":"/internalApp/Services/sapProjectSrv.service","EntitySet":"Docs","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/internalApp/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Edit"}},"OnFailure":"/internalApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/DraftSaveEntity.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/DraftSaveEntity.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Save","Target":{"Service":"/internalApp/Services/sapProjectSrv.service","EntitySet":"Docs","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/internalApp/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Saved"}},"OnFailure":"/internalApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/GenericBannerMessage.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/GenericBannerMessage.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/GenericMessageBox.action":
/*!************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/GenericMessageBox.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/GenericNavigation.action":
/*!************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/GenericNavigation.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/internalApp/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/GenericToastMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/GenericToastMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Logging/LogUploadFailure.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Logging/LogUploadFailure.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Logging/LogUploadSuccessful.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Logging/LogUploadSuccessful.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Logging/UploadLog.action":
/*!************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Logging/UploadLog.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/internalApp/Actions/Logging/LogUploadFailure.action","OnSuccess":"/internalApp/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/Logging/UploadLogProgress.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/Logging/UploadLogProgress.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/internalApp/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/UpdateEntityFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/UpdateEntityFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/UpdateEntitySuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/UpdateEntitySuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/internalApp/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/Docs_CreateEntity.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Docs/Docs_CreateEntity.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/internalApp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/internalApp/Actions/CreateEntitySuccessMessage.action","Properties":{"docsID":"#Page:Docs_Create/#Control:docsID/#Value","internalUserId":"#Page:Docs_Create/#Control:internalUserId/#Value","fileName":"#Page:Docs_Create/#Control:fileName/#Value","filePath":"#Page:Docs_Create/#Control:filePath/#Value","fileHash":"#Page:Docs_Create/#Control:fileHash/#Value","uploadedAt":"#Page:Docs_Create/#Control:uploadedAt/#Value","isDeleted":"#Page:Docs_Create/#Control:isDeleted/#Value"},"Target":{"EntitySet":"Docs","Service":"/internalApp/Services/sapProjectSrv.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/Docs_DeleteEntity.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Docs/Docs_DeleteEntity.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Docs","Service":"/internalApp/Services/sapProjectSrv.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/internalApp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/internalApp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/Docs_UpdateEntity.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Docs/Docs_UpdateEntity.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Docs","Service":"/internalApp/Services/sapProjectSrv.service","ReadLink":"{@odata.readLink}"},"Properties":{"docsID":"#Page:Docs_Edit/#Control:docsID/#Value","internalUserId":"#Page:Docs_Edit/#Control:internalUserId/#Value","fileName":"#Page:Docs_Edit/#Control:fileName/#Value","filePath":"#Page:Docs_Edit/#Control:filePath/#Value","fileHash":"#Page:Docs_Edit/#Control:fileHash/#Value","uploadedAt":"#Page:Docs_Edit/#Control:uploadedAt/#Value","isDeleted":"#Page:Docs_Edit/#Control:isDeleted/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/internalApp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/internalApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Create.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Create.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/internalApp/Pages/sapProjectSrv_Docs/Docs_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Detail.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Detail.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/internalApp/Pages/sapProjectSrv_Docs/Docs_Detail.page"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Edit.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_Edit.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/internalApp/Pages/sapProjectSrv_Docs/Docs_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_List.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Docs/NavToDocs_List.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/internalApp/Pages/sapProjectSrv_Docs/Docs_List.page"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/Links_CreateEntity.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Links/Links_CreateEntity.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/internalApp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/internalApp/Actions/CreateEntitySuccessMessage.action","Properties":{"token":"#Page:Links_Create/#Control:token/#Value","recipient_email":"#Page:Links_Create/#Control:recipient_email/#Value","created_at":"#Page:Links_Create/#Control:created_at/#Value","expires_at":"#Page:Links_Create/#Control:expires_at/#Value","status":"#Page:Links_Create/#Control:status/#Value","access_count":"#Page:Links_Create/#Control:access_count/#Value","max_access":"#Page:Links_Create/#Control:max_access/#Value","password_hash":"#Page:Links_Create/#Control:password_hash/#Value","metadata":"#Page:Links_Create/#Control:metadata/#Value"},"Target":{"EntitySet":"Links","Service":"/internalApp/Services/sapProjectSrv.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/Links_DeleteEntity.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Links/Links_DeleteEntity.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Links","Service":"/internalApp/Services/sapProjectSrv.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/internalApp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/internalApp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/Links_UpdateEntity.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Links/Links_UpdateEntity.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Links","Service":"/internalApp/Services/sapProjectSrv.service","ReadLink":"{@odata.readLink}"},"Properties":{"token":"#Page:Links_Edit/#Control:token/#Value","recipient_email":"#Page:Links_Edit/#Control:recipient_email/#Value","created_at":"#Page:Links_Edit/#Control:created_at/#Value","expires_at":"#Page:Links_Edit/#Control:expires_at/#Value","status":"#Page:Links_Edit/#Control:status/#Value","access_count":"#Page:Links_Edit/#Control:access_count/#Value","max_access":"#Page:Links_Edit/#Control:max_access/#Value","password_hash":"#Page:Links_Edit/#Control:password_hash/#Value","metadata":"#Page:Links_Edit/#Control:metadata/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/internalApp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/internalApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Create.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Create.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/internalApp/Pages/sapProjectSrv_Links/Links_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Detail.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Detail.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/internalApp/Pages/sapProjectSrv_Links/Links_Detail.page"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Edit.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_Edit.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/internalApp/Pages/sapProjectSrv_Links/Links_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_List.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Links/NavToLinks_List.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/internalApp/Pages/sapProjectSrv_Links/Links_List.page"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Service/InitializeOnline.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Service/InitializeOnline.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/internalApp/Services/sapProjectSrv.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnFailure":"/internalApp/Actions/sapProjectSrv/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Service/InitializeOnlineFailureMessage.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Service/InitializeOnlineFailureMessage.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Create.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Create.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/internalApp/Pages/sapProjectSrv_Upload/Upload_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Detail.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Detail.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/internalApp/Pages/sapProjectSrv_Upload/Upload_Detail.page"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Edit.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_Edit.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/internalApp/Pages/sapProjectSrv_Upload/Upload_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_List.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Upload/NavToUpload_List.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/internalApp/Pages/sapProjectSrv_Upload/Upload_List.page"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/Upload_CreateEntity.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Upload/Upload_CreateEntity.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/internalApp/Actions/CreateEntityFailureMessage.action","OnSuccess":"/internalApp/Actions/CreateEntitySuccessMessage.action","Properties":{"docsID":"#Page:Upload_Create/#Control:docsID/#Value","internalUserId":"#Page:Upload_Create/#Control:internalUserId/#Value","fileName":"#Page:Upload_Create/#Control:fileName/#Value","filePath":"#Page:Upload_Create/#Control:filePath/#Value","fileHash":"#Page:Upload_Create/#Control:fileHash/#Value","uploadedAt":"#Page:Upload_Create/#Control:uploadedAt/#Value","isDeleted":"#Page:Upload_Create/#Control:isDeleted/#Value"},"Target":{"EntitySet":"Upload","Service":"/internalApp/Services/sapProjectSrv.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/Upload_DeleteEntity.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Upload/Upload_DeleteEntity.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Upload","Service":"/internalApp/Services/sapProjectSrv.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/internalApp/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/internalApp/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/internalApp/Actions/sapProjectSrv/Upload/Upload_UpdateEntity.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/internalApp/Actions/sapProjectSrv/Upload/Upload_UpdateEntity.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Upload","Service":"/internalApp/Services/sapProjectSrv.service","ReadLink":"{@odata.readLink}"},"Properties":{"docsID":"#Page:Upload_Edit/#Control:docsID/#Value","internalUserId":"#Page:Upload_Edit/#Control:internalUserId/#Value","fileName":"#Page:Upload_Edit/#Control:fileName/#Value","filePath":"#Page:Upload_Edit/#Control:filePath/#Value","fileHash":"#Page:Upload_Edit/#Control:fileHash/#Value","uploadedAt":"#Page:Upload_Edit/#Control:uploadedAt/#Value","isDeleted":"#Page:Upload_Edit/#Control:isDeleted/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/internalApp/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/internalApp/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/internalApp/Globals/Application/AppDefinition_Version.global":
/*!****************************************************************************************!*\
  !*** ./build.definitions/internalApp/Globals/Application/AppDefinition_Version.global ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/internalApp/Globals/Application/ApplicationName.global":
/*!**********************************************************************************!*\
  !*** ./build.definitions/internalApp/Globals/Application/ApplicationName.global ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/internalApp/Globals/Application/SupportEmail.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/internalApp/Globals/Application/SupportEmail.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/internalApp/Globals/Application/SupportPhone.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/internalApp/Globals/Application/SupportPhone.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/internalApp/Services/sapProjectSrv.service":
/*!**********************************************************************!*\
  !*** ./build.definitions/internalApp/Services/sapProjectSrv.service ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../service/sapProject/","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/internalApp/Styles/Styles.json":
/*!**********************************************************!*\
  !*** ./build.definitions/internalApp/Styles/Styles.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/internalApp/jsconfig.json":
/*!*****************************************************!*\
  !*** ./build.definitions/internalApp/jsconfig.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map