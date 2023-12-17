/** load translations **/

class EXT_Translations {
  constructor () {
    console.log("[GA] EXT_Translations Ready")
  }

  Load_EXT_Translation(that) {
    return new Promise(resolve => {
      var Tr = {}
      Tr.Rotate_Msg = that.translate("GW_Rotate_Msg")
      Tr.Rotate_Continue = that.translate("GW_Rotate_Continue")

      Tr.Login_Welcome = that.translate("GW_Login_Welcome")
      Tr.Login_Username = that.translate("GW_Login_Username")
      Tr.Login_Password = that.translate("GW_Login_Password")
      Tr.Login_Error = that.translate("GW_Login_Error")
      Tr.Login_Login = that.translate("GW_Login_Login")

      Tr.Home = that.translate("GW_Home")
      Tr.Home_Welcome= that.translate("GW_Home_Welcome")

      Tr.Plugins = that.translate("GW_Plugins")
      Tr.Plugins_Welcome = that.translate("GW_Plugins_Welcome")
      Tr.Plugins_Table_Reset= that.translate("GW_Plugins_Table_Reset")
      Tr.Plugins_Table_Showing= that.translate("GW_Plugins_Table_Showing")
      Tr.Plugins_Table_Plugins= that.translate("GW_Plugins_Table_Plugins")
      Tr.Plugins_Table_Name= that.translate("GW_Plugins_Table_Name")
      Tr.Plugins_Table_Description= that.translate("GW_Plugins_Table_Description")
      Tr.Plugins_Table_Actions= that.translate("GW_Plugins_Table_Actions")
      Tr.Plugins_Table_Configuration= that.translate("GW_Plugins_Table_Configuration")
      Tr.Plugins_Table_Search= that.translate("GW_Plugins_Table_Search")
      Tr.Plugins_Table_Wiki = that.translate("GW_Plugins_Table_Wiki")
      Tr.Plugins_Table_Install = that.translate("GW_Plugins_Table_Install")
      Tr.Plugins_Table_Delete = that.translate("GW_Plugins_Table_Delete")
      Tr.Plugins_Table_Modify = that.translate("GW_Plugins_Table_Modify")
      Tr.Plugins_Table_Configure = that.translate("GW_Plugins_Table_Configure")
      Tr.Plugins_Table_DeleteConfig = that.translate("GW_Plugins_Table_DeleteConfig")
      Tr.Plugins_Delete_TerminalHeader = that.translate("GW_Plugins_Delete_TerminalHeader")
      Tr.Plugins_Delete_Message = that.translate("GW_Plugins_Delete_Message")
      Tr.Plugins_Delete_Progress = that.translate("GW_Plugins_Delete_Progress")
      Tr.Plugins_Delete_Confirmed = that.translate("GW_Plugins_Delete_Confirmed")
      Tr.Plugins_Install_TerminalHeader = that.translate("GW_Plugins_Install_TerminalHeader")
      Tr.Plugins_Install_Message = that.translate("GW_Plugins_Install_Message")
      Tr.Plugins_Install_Progress = that.translate("GW_Plugins_Install_Progress")
      Tr.Plugins_Install_Confirmed = that.translate("GW_Plugins_Install_Confirmed")
      Tr.Plugins_Initial_Title = that.translate("GW_Plugins_Initial_Title")
      Tr.Plugins_DeleteConfig_Title = that.translate("GW_Plugins_DeleteConfig_Title")
      Tr.Plugins_DeleteConfig_Confirmed = that.translate("GW_Plugins_DeleteConfig_Confirmed")
      Tr.Plugins_Modify_Title = that.translate("GW_Plugins_Modify_Title")
      Tr.Plugins_Error_Snowboy = that.translate("GW_Plugins_Error_Snowboy")
      Tr.Plugins_Error_Porcupine = that.translate("GW_Plugins_Error_Porcupine")

      Tr.Terminal = that.translate("GW_Terminal")
      Tr.TerminalOpen = that.translate("GW_TerminalOpen")
      Tr.TerminalGW = that.translate("GW_TerminalGW")

      Tr.Configuration = that.translate("GW_Configuration")
      Tr.Configuration_Welcome = that.translate("GW_Configuration_Welcome")
      Tr.Configuration_EditLoad = that.translate("GW_Configuration_EditLoad")
      Tr.Configuration_Edit_Title = that.translate("GW_Configuration_Edit_Title")
      Tr.Configuration_Edit_AcualConfig = that.translate("GW_Configuration_Edit_AcualConfig")

      Tr.Tools = that.translate("GW_Tools")
      Tr.Tools_Welcome = that.translate("GW_Tools_Welcome")
      Tr.Tools_subTitle = that.translate("GW_Tools_subTitle")
      Tr.Tools_Restart = that.translate("GW_Tools_Restart")
      Tr.Tools_Restart_Text1 = that.translate("GW_Tools_Restart_Text1")
      Tr.Tools_Restart_Text2 = that.translate("GW_Tools_Restart_Text2")
      Tr.Tools_Die = that.translate("GW_Tools_Die")
      Tr.Tools_Die_Text1 = that.translate("GW_Tools_Die_Text1")
      Tr.Tools_Die_Text2 = that.translate("GW_Tools_Die_Text2")
      Tr.Tools_Die_Text3 = that.translate("GW_Tools_Die_Text3")
      Tr.Tools_Webview_Header = that.translate("GW_Tools_Webview_Header")
      Tr.Tools_Webview_Needed = that.translate("GW_Tools_Webview_Needed")
      Tr.Tools_Backup_Found = that.translate("GW_Tools_Backup_Found")
      Tr.Tools_Backup_Text = that.translate("GW_Tools_Backup_Text")
      Tr.Tools_Backup_Deleted = that.translate("GW_Tools_Backup_Deleted")
      Tr.Tools_Screen_Text = that.translate("GW_Tools_Screen_Text")
      Tr.Tools_GoogleAssistant_Text = that.translate("GW_Tools_GoogleAssistant_Text")
      Tr.Tools_GoogleAssistant_Query = that.translate("GW_Tools_GoogleAssistant_Query")
      Tr.Tools_Alert_Text = that.translate("GW_Tools_Alert_Text")
      Tr.Tools_Alert_Query = that.translate("GW_Tools_Alert_Query")
      Tr.Tools_Volume_Text_Record = that.translate("GW_Tools_Volume_Text_Record")
      Tr.Tools_Volume_Text = that.translate("GW_Tools_Volume_Text")
      Tr.Tools_Volume_Text2 = that.translate("GW_Tools_Volume_Text2")
      Tr.Tools_Volume_Text3 = that.translate("GW_Tools_Volume_Text3")
      Tr.Tools_Spotify_Text = that.translate("GW_Tools_Spotify_Text")
      Tr.Tools_Spotify_Text2 = that.translate("GW_Tools_Spotify_Text2")
      Tr.Tools_Spotify_Query = that.translate("GW_Tools_Spotify_Query")
      Tr.Tools_Spotify_Artist = that.translate("GW_Tools_Spotify_Artist")
      Tr.Tools_Spotify_Track = that.translate("GW_Tools_Spotify_Track")
      Tr.Tools_Spotify_Album = that.translate("GW_Tools_Spotify_Album")
      Tr.Tools_Spotify_Playlist = that.translate("GW_Tools_Spotify_Playlist")
      Tr.Tools_Update_Header = that.translate("GW_Tools_Update_Header")
      Tr.Tools_Update_Text = that.translate("GW_Tools_Update_Text")
      Tr.Tools_Update_Text2 = that.translate("GW_Tools_Update_Text2")
      Tr.Tools_YouTube_Text = that.translate("GW_Tools_YouTube_Text")
      Tr.Tools_YouTube_Query = that.translate("GW_Tools_YouTube_Query")
      Tr.Tools_Stop_Text = that.translate("GW_Tools_Stop_Text")
      Tr.Tools_Radio_Text = that.translate("GW_Tools_Radio_Text")
      Tr.Tools_Radio_Text2 = that.translate("GW_Tools_Radio_Text2")

      Tr.Setting = that.translate("GW_Setting")
      Tr.Setting_Title = that.translate("GW_Setting_Title")
      Tr.Setting_Credentials = that.translate("GW_Setting_Credentials")
      Tr.Setting_Credentials_username = that.translate("GW_Setting_Credentials_username")
      Tr.Setting_Credentials_password = that.translate("GW_Setting_Credentials_password")
      Tr.Setting_Credentials_confirmpwd = that.translate("GW_Setting_Credentials_confirmpwd")
      Tr.Setting_Credentials_clientID = that.translate("GW_Setting_Credentials_clientID")
      Tr.Setting_Credentials_username_placeholder = that.translate("GW_Setting_Credentials_username_placeholder")
      Tr.Setting_Credentials_password_placeholder = that.translate("GW_Setting_Credentials_password_placeholder")
      Tr.Setting_Credentials_confirmpwd_placeholder = that.translate("GW_Setting_Credentials_confirmpwd_placeholder")
      Tr.Setting_Credentials_clientID_placeholder = that.translate("GW_Setting_Credentials_clientID_placeholder")
      Tr.Setting_Options = that.translate("GW_Setting_Options")
      Tr.Setting_Options_debug = that.translate("GW_Setting_Options_debug")
      Tr.Setting_Info_by = that.translate("GW_Setting_Info_by")
      Tr.Setting_Info_Support = that.translate("GW_Setting_Info_Support")
      Tr.Setting_Info_Donate = that.translate("GW_Setting_Info_Donate")
      Tr.Setting_Info_Donate_Text = that.translate("GW_Setting_Info_Donate_Text")
      Tr.Setting_Info_About = that.translate("GW_Setting_Info_About")
      Tr.Setting_Info_Translator = that.translate("GW_Setting_Info_Translator")
      Tr.Setting_Info_Translator1 = that.translate("GW_Setting_Info_Translator1")
      Tr.Setting_Info_Translator2 = that.translate("GW_Setting_Info_Translator2")
      Tr.Setting_Info_Translator3 = that.translate("GW_Setting_Info_Translator3")
      Tr.Setting_Info_Translator4 = that.translate("GW_Setting_Info_Translator4")
      Tr.Setting_Info_Translator5 = that.translate("GW_Setting_Info_Translator5")
      Tr.Setting_Info_Translator6 = that.translate("GW_Setting_Info_Translator6")
      Tr.Setting_Info_Translator7 = that.translate("GW_Setting_Info_Translator7")
      Tr.Setting_Info_Translator8 = that.translate("GW_Setting_Info_Translator8")
      Tr.Setting_Info_Translator9 = that.translate("GW_Setting_Info_Translator9")
      Tr.Setting_Info_Translator10 = that.translate("GW_Setting_Info_Translator10")

      Tr.System = that.translate("GW_System")
      Tr.System_Box_Shutdown = that.translate("GW_System_Box_Shutdown")
      Tr.System_Shutdown = that.translate("GW_System_Shutdown")
      Tr.System_Box_Restart = that.translate("GW_System_Box_Restart")
      Tr.System_Restart = that.translate("GW_System_Restart")
      Tr.System_Box_Version = that.translate("GW_System_Box_Version")
      Tr.System_NodeVersion = that.translate("GW_System_NodeVersion")
      Tr.System_NPMVersion = that.translate("GW_System_NPMVersion")
      Tr.System_OSVersion = that.translate("GW_System_OSVersion")
      Tr.System_KernelVersion = that.translate("GW_System_KernelVersion")
      Tr.System_CPUSystem = that.translate("GW_System_CPUSystem")
      Tr.System_TypeCPU = that.translate("GW_System_TypeCPU")
      Tr.System_SpeedCPU = that.translate("GW_System_SpeedCPU")
      Tr.System_CurrentLoadCPU = that.translate("GW_System_CurrentLoadCPU")
      Tr.System_GovernorCPU = that.translate("GW_System_GovernorCPU")
      Tr.System_TempCPU = that.translate("GW_System_TempCPU")
      Tr.System_MemorySystem = that.translate("GW_System_MemorySystem")
      Tr.System_TypeMemory = that.translate("GW_System_TypeMemory")
      Tr.System_SwapMemory = that.translate("GW_System_SwapMemory")
      Tr.System_NetworkSystem = that.translate("GW_System_NetworkSystem")
      Tr.System_IPNetwork = that.translate("GW_System_IPNetwork")
      Tr.System_InterfaceNetwork = that.translate("GW_System_InterfaceNetwork")
      Tr.System_SpeedNetwork = that.translate("GW_System_SpeedNetwork")
      Tr.System_DuplexNetwork = that.translate("GW_System_DuplexNetwork")
      Tr.System_WirelessInfo = that.translate("GW_System_WirelessInfo")
      Tr.System_SSIDNetwork = that.translate("GW_System_SSIDNetwork")
      Tr.System_RateNetwork = that.translate("GW_System_RateNetwork")
      Tr.System_FrequencyNetwork = that.translate("GW_System_FrequencyNetwork")
      Tr.System_SignalNetwork = that.translate("GW_System_SignalNetwork")
      Tr.System_QualityNetwork = that.translate("GW_System_QualityNetwork")
      Tr.System_StorageSystem = that.translate("GW_System_StorageSystem")
      Tr.System_MountStorage = that.translate("GW_System_MountStorage")
      Tr.System_UsedStorage = that.translate("GW_System_UsedStorage")
      Tr.System_PercentStorage = that.translate("GW_System_PercentStorage")
      Tr.System_TotalStorage = that.translate("GW_System_TotalStorage")
      Tr.System_UptimeSystem = that.translate("GW_System_UptimeSystem")
      Tr.System_CurrentUptime = that.translate("GW_System_CurrentUptime")
      Tr.System_System = that.translate("GW_System_System")
      Tr.System_RecordUptime = that.translate("GW_System_RecordUptime")
      Tr.System_DAY = that.translate("GW_System_DAY")
      Tr.System_DAYS = that.translate("GW_System_DAYS")
      Tr.System_HOUR = that.translate("GW_System_HOUR")
      Tr.System_HOURS = that.translate("GW_System_HOURS")
      Tr.System_MINUTE = that.translate("GW_System_MINUTE")
      Tr.System_MINUTES = that.translate("GW_System_MINUTES")
      Tr.System_ProcessSystem = that.translate("GW_System_ProcessSystem")
      Tr.System_CPU = that.translate("GW_System_CPU")
      Tr.System_Memory = that.translate("GW_System_Memory")
      Tr.System_GoogleAssistant = that.translate("GW_System_GoogleAssistant")
      Tr.System_CurrentlyRunning = that.translate("GW_System_CurrentlyRunning")
      Tr.System_NamePlugin = that.translate("GW_System_NamePlugin")
      Tr.System_VersionPlugin = that.translate("GW_System_VersionPlugin")
      Tr.System_RevPlugin = that.translate("GW_System_RevPlugin")

      Tr.Logout = that.translate("GW_Logout")

      Tr.Delete = that.translate("GW_Delete"),
      Tr.Install = that.translate("GW_Install"),
      Tr.Configure = that.translate("GW_Configure"),
      Tr.Modify = that.translate("GW_Modify")
      Tr.Save = that.translate("GW_Save")
      Tr.Wait = that.translate("GW_Wait")
      Tr.Done = that.translate("GW_Done")
      Tr.Error = that.translate("GW_Error")
      Tr.Cancel = that.translate("GW_Cancel")
      Tr.Confirm = that.translate("GW_Confirm")
      Tr.Load = that.translate("GW_Load")
      Tr.Restart = that.translate("GW_Restart")
      Tr.ErrModule = that.translate("GW_ErrModule")
      Tr.Warn_Error = that.translate("GW_Warn_Error")
      Tr.LoadDefault = that.translate("GW_LoadDefault"),
      Tr.MergeDefault = that.translate("GW_MergeDefault")
      Tr.Send = that.translate("GW_Send")
      Tr.TurnOn = that.translate("GW_TurnOn")
      Tr.TurnOff = that.translate("GW_TurnOff")
      Tr.RequestDone = that.translate("GW_RequestDone")
      Tr.Listen = that.translate("GW_Listen")
      Tr.Update = that.translate("GW_Update")
      Tr.Start = that.translate("GW_Start")

      resolve(Tr)
    })
  }

  /** load descriptions **/
  Load_EXT_Description(that) {
    return new Promise(resolve => {
      var desc = {}
      desc["EXT-Alert"] = that.translate("EXT-Alert")
      desc["EXT-Background"] = that.translate("EXT-Background")
      desc["EXT-Bard"] = that.translate("EXT-Bard")
      desc["EXT-Bring"] = that.translate("EXT-Bring")
      desc["EXT-Browser"] = that.translate("EXT-Browser")
      desc["EXT-Detector"] = that.translate("EXT-Detector")
      desc["EXT-FreeboxTV"] = that.translate("EXT-FreeboxTV")
      desc["EXT-GooglePhotos"] = that.translate("EXT-GooglePhotos")
      desc["EXT-Governor"] = that.translate("EXT-Governor")
      desc["EXT-Internet"] = that.translate("EXT-Internet")
      desc["EXT-Keyboard"] = that.translate("EXT-Keyboard")
      desc["EXT-Librespot"] = that.translate("EXT-Librespot")
      desc["EXT-Motion"] = that.translate("EXT-Motion")
      desc["EXT-MusicPlayer"] = that.translate("EXT-MusicPlayer")
      desc["EXT-Pages"] = that.translate("EXT-Pages")
      desc["EXT-Photos"] = that.translate("EXT-Photos")
      desc["EXT-Pir"] = that.translate("EXT-Pir")
      desc["EXT-RadioPlayer"] = that.translate("EXT-RadioPlayer")
      desc["EXT-Selfies"] = that.translate("EXT-Selfies")
      desc["EXT-SelfiesFlash"] = that.translate("EXT-SelfiesFlash")
      desc["EXT-SelfiesSender"] = that.translate("EXT-SelfiesSender")
      desc["EXT-SelfiesViewer"] = that.translate("EXT-SelfiesViewer")
      desc["EXT-Screen"] = that.translate("EXT-Screen")
      desc["EXT-ScreenManager"] = that.translate("EXT-ScreenManager")
      desc["EXT-ScreenTouch"] = that.translate("EXT-ScreenTouch")
      desc["EXT-Spotify"] = that.translate("EXT-Spotify")
      desc["EXT-SpotifyCanvasLyrics"] = that.translate("EXT-SpotifyCanvasLyrics")
      desc["EXT-StreamDeck"] = that.translate("EXT-StreamDeck")
      desc["EXT-TelegramBot"] = that.translate("EXT-TelegramBot")
      desc["EXT-Updates"] = that.translate("EXT-Updates")
      desc["EXT-Volume"] = that.translate("EXT-Volume")
      desc["EXT-Welcome"] = that.translate("EXT-Welcome")
      desc["EXT-YouTube"] = that.translate("EXT-YouTube")
      desc["EXT-YouTubeCast"] = that.translate("EXT-YouTubeCast")
      resolve(desc)
    })
  }

  /** load schema validation translations **/
  Load_EXT_TrSchemaValidation(that) {
    return new Promise(resolve => {
      var Tr = {}
      Tr.PluginDescription = that.translate("VAL_PluginDescription")
      Tr.PluginName = that.translate("VAL_PluginName")
      Tr.PluginAnimateIn = that.translate("VAL_PluginAnimateIn")
      Tr.PluginAnimateOut = that.translate("VAL_PluginAnimateOut")
      Tr.PluginDisable = that.translate("VAL_PluginDisable")
      Tr.PluginPosition = that.translate("VAL_PluginPosition")
      Tr.PluginConfigDeepMerge = that.translate("VAL_PluginConfigDeepMerge")
      Tr.PluginConfiguration = that.translate("VAL_PluginConfiguration")
      Tr.PluginDebug = that.translate("VAL_PluginDebug")
      Tr["EXT-Alert_ignore"] = that.translate("VAL_EXT-Alert_ignore")
      Tr["EXT-Background_Model"] = that.translate("VAL_EXT-Background_Model")
      Tr["EXT-Background_Image"] = that.translate("VAL_EXT-Background_Image")
      Tr["EXT-Bring_List"] = that.translate("VAL_EXT-Bring_List")
      Tr["EXT-Bring_Email"] = that.translate("VAL_EXT-Bring_Email")
      Tr["EXT-Bring_Password"] = that.translate("VAL_EXT-Bring_Password")
      Tr["EXT-Bring_Language"] = that.translate("VAL_EXT-Bring_Language")
      Tr["EXT-Bring_Colums"] = that.translate("VAL_EXT-Bring_Colums")
      Tr["EXT-Bring_Rows"] = that.translate("VAL_EXT-Bring_Rows")
      Tr["EXT-Bring_Update"] = that.translate("VAL_EXT-Bring_Update")
      Tr["EXT-Bring_Background"] = that.translate("VAL_EXT-Bring_Background")
      Tr["EXT-Bring_Box"] = that.translate("VAL_EXT-Bring_Box")
      Tr["EXT-Bring_Header"] = that.translate("VAL_EXT-Bring_Header")
      Tr["EXT-Browser_Delay"] = that.translate("VAL_EXT-Browser_Delay")
      Tr["EXT-Browser_Scroll"] = that.translate("VAL_EXT-Browser_Scroll")
      Tr["EXT-Browser_Step"] = that.translate("VAL_EXT-Browser_Step")
      Tr["EXT-Browser_Interval"] = that.translate("VAL_EXT-Browser_Interval")
      Tr["EXT-Browser_Start"] = that.translate("VAL_EXT-Browser_Start")
      Tr["EXT-Detector_Icon"] = that.translate("VAL_EXT-Detector_Icon")
      Tr["EXT-Detector_Touch"] = that.translate("VAL_EXT-Detector_Touch")
      Tr["EXT-Detector_Detector"] = that.translate("VAL_EXT-Detector_Detector")
      Tr["EXT-Detector_Engine"] = that.translate("VAL_EXT-Detector_Engine")
      Tr["EXT-Detector_Keyword"] = that.translate("VAL_EXT-Detector_Keyword")
      Tr["EXT-Detector_Sensitivity"] = that.translate("VAL_EXT-Detector_Sensitivity")
      Tr["EXT-Detector_AccessKey"] = that.translate("VAL_EXT-Detector_AccessKey")
      Tr["EXT-Detector_CustomModel"] = that.translate("VAL_EXT-Detector_CustomModel")
      Tr["EXT-GooglePhotos_Type"] = that.translate("VAL_EXT-GooglePhotos_Type")
      Tr["EXT-GooglePhotos_Delay"] = that.translate("VAL_EXT-GooglePhotos_Delay")
      Tr["EXT-GooglePhotos_Infos"] = that.translate("VAL_EXT-GooglePhotos_Infos")
      Tr["EXT-GooglePhotos_Albums"] = that.translate("VAL_EXT-GooglePhotos_Albums")
      Tr["EXT-GooglePhotos_Background"] = that.translate("VAL_EXT-GooglePhotos_Background")
      Tr["EXT-GooglePhotos_Sort"] = that.translate("VAL_EXT-GooglePhotos_Sort")
      Tr["EXT-GooglePhotos_HD"] = that.translate("VAL_EXT-GooglePhotos_HD")
      Tr["EXT-GooglePhotos_Format"] = that.translate("VAL_EXT-GooglePhotos_Format")
      Tr["EXT-GooglePhotos_Height"] = that.translate("VAL_EXT-GooglePhotos_Height")
      Tr["EXT-GooglePhotos_Width"] = that.translate("VAL_EXT-GooglePhotos_Width")
      Tr["EXT-GooglePhotos_uploadAlbum"] = that.translate("VAL_EXT-GooglePhotos_uploadAlbum")
      Tr["EXT-Governor_Sleep"] = that.translate("VAL_EXT-Governor_Sleep")
      Tr["EXT-Governor_Work"] = that.translate("VAL_EXT-Governor_Work")
      Tr["EXT-Internet_Ping"] = that.translate("VAL_EXT-Internet_Ping")
      Tr["EXT-Internet_Delay"] = that.translate("VAL_EXT-Internet_Delay")
      Tr["EXT-Internet_Scan"] = that.translate("VAL_EXT-Internet_Scan")
      Tr["EXT-Internet_Alert"] = that.translate("VAL_EXT-Internet_Alert")
      Tr["EXT-Internet_Restart"] = that.translate("VAL_EXT-Internet_Restart")
      Tr["EXT-Keyboard_keyFinder"] =  that.translate("VAL_EXT-Keyboard_keyFinder")
      Tr["EXT-Keyboard_keys"] =  that.translate("VAL_EXT-Keyboard_keys")
      Tr["EXT-Keyboard_keycode"] =  that.translate("VAL_EXT-Keyboard_keycode")
      Tr["EXT-Keyboard_notification"] =  that.translate("VAL_EXT-Keyboard_notification")
      Tr["EXT-Keyboard_payload"] =  that.translate("VAL_EXT-Keyboard_payload")
      Tr["EXT-Keyboard_command"] =  that.translate("VAL_EXT-Keyboard_command")
      Tr["EXT-Keyboard_sound"] =  that.translate("VAL_EXT-Keyboard_sound")
      Tr["EXT-Librespot_Email"] = that.translate("VAL_EXT-Librespot_Email")
      Tr["EXT-Librespot_Password"] = that.translate("VAL_EXT-Librespot_Password")
      Tr["EXT-Librespot_Name"] = that.translate("VAL_EXT-Librespot_Name")
      Tr["EXT-Librespot_Min"] = that.translate("VAL_EXT-Librespot_Min")
      Tr["EXT-Librespot_Max"] = that.translate("VAL_EXT-Librespot_Max")
      Tr["EXT-Motion_captureIntervalTime"] = that.translate("VAL_EXT-Motion_captureIntervalTime")
      Tr["EXT-Motion_scoreThreshold"] = that.translate("VAL_EXT-Motion_scoreThreshold")
      Tr["EXT-Motion_deviceId"] = that.translate("VAL_EXT-Motion_deviceId")
      Tr["EXT-MusicPlayer_USB"] = that.translate("VAL_EXT-MusicPlayer_USB")
      Tr["EXT-MusicPlayer_Path"] = that.translate("VAL_EXT-MusicPlayer_Path")
      Tr["EXT-MusicPlayer_Check"] = that.translate("VAL_EXT-MusicPlayer_Check")
      Tr["EXT-MusicPlayer_Start"] = that.translate("VAL_EXT-MusicPlayer_Start")
      Tr["EXT-MusicPlayer_Min"] = that.translate("VAL_EXT-MusicPlayer_Min")
      Tr["EXT-MusicPlayer_Max"] = that.translate("VAL_EXT-MusicPlayer_Max")
      Tr["EXT-Pages_pages"] = that.translate("VAL_EXT-Pages_pages")
      Tr["EXT-Pages_fixed"] = that.translate("VAL_EXT-Pages_fixed")
      Tr["EXT-Pages_hiddenPages"] = that.translate("VAL_EXT-Pages_hiddenPages")
      Tr["EXT-Pages_animateIn"] = that.translate("VAL_EXT-Pages_animateIn")
      Tr["EXT-Pages_rotationTime"] = that.translate("VAL_EXT-Pages_rotationTime")
      Tr["EXT-Pages_rotationTimes"] = that.translate("VAL_EXT-Pages_rotationTimes")
      Tr["EXT-Pages_homePage"] = that.translate("VAL_EXT-Pages_homePage")
      Tr["EXT-Pages_indicator"] = that.translate("VAL_EXT-Pages_indicator")
      Tr["EXT-Pages_hideBeforeRotation"] = that.translate("VAL_EXT-Pages_hideBeforeRotation")
      Tr["EXT-Pages_Gateway"] = that.translate("VAL_EXT-Pages_Gateway")
      Tr["EXT-Pages_loading"] = that.translate("VAL_EXT-Pages_loading")
      Tr["EXT-Photos_Delay"] = that.translate("VAL_EXT-Photos_Delay")
      Tr["EXT-Photos_Loop"] = that.translate("VAL_EXT-Photos_Loop")
      Tr["EXT-Pir_GPIO"] = that.translate("VAL_EXT-Pir_GPIO")
      Tr["EXT-Pir_Reverse"] = that.translate("VAL_EXT-Pir_Reverse")
      Tr["EXT-RadioPlayer_Min"] = that.translate("VAL_EXT-RadioPlayer_Min")
      Tr["EXT-RadioPlayer_Max"] = that.translate("VAL_EXT-RadioPlayer_Max")
      Tr["EXT-Selfies_captureWidth"] = that.translate("VAL_EXT-Selfies_captureWidth")
      Tr["EXT-Selfies_captureHeight"] = that.translate("VAL_EXT-Selfies_captureHeight")
      Tr["EXT-Selfies_device"] = that.translate("VAL_EXT-Selfies_device")
      Tr["EXT-Selfies_usePreview"] = that.translate("VAL_EXT-Selfies_usePreview")
      Tr["EXT-Selfies_previewWidth"] = that.translate("VAL_EXT-Selfies_previewWidth")
      Tr["EXT-Selfies_previewHeight"] = that.translate("VAL_EXT-Selfies_previewHeight")
      Tr["EXT-Selfies_displayButton"] = that.translate("VAL_EXT-Selfies_displayButton")
      Tr["EXT-Selfies_buttonStyle"] = that.translate("VAL_EXT-Selfies_buttonStyle")
      Tr["EXT-Selfies_buttons"] = that.translate("VAL_EXT-Selfies_buttons")
      Tr["EXT-Selfies_blinkButton"] = that.translate("VAL_EXT-Selfies_blinkButton")
      Tr["EXT-Selfies_playShutter"] = that.translate("VAL_EXT-Selfies_playShutter")
      Tr["EXT-Selfies_resultDuration"] = that.translate("VAL_EXT-Selfies_resultDuration")
      Tr["EXT-Selfies_autoValidate"] = that.translate("VAL_EXT-Selfies_autoValidate")
      Tr["EXT-Selfies_counterStyle"] = that.translate("VAL_EXT-Selfies_counterStyle")
      Tr["EXT-Selfies_showResult"] = that.translate("VAL_EXT-Selfies_showResult")
      Tr["EXT-SelfiesFlash_gpio"] = that.translate("VAL_EXT-SelfiesFlash_gpio")
      Tr["EXT-SelfiesSender_sendTelegramBotAuto"] = that.translate("VAL_EXT-SelfiesSender_sendTelegramBotAuto")
      Tr["EXT-SelfiesSender_sendGooglePhotos"] = that.translate("VAL_EXT-SelfiesSender_sendGooglePhotos")
      Tr["EXT-SelfiesSender_sendGooglePhotosAuto"] = that.translate("VAL_EXT-SelfiesSender_sendGooglePhotosAuto")
      Tr["EXT-SelfiesSender_sendMail"] = that.translate("VAL_EXT-SelfiesSender_sendMail")
      Tr["EXT-SelfiesSender_sendMailAuto"] = that.translate("VAL_EXT-SelfiesSender_sendMailAuto")
      Tr["EXT-SelfiesSender_sendMailConfig"] = that.translate("VAL_EXT-SelfiesSender_sendMailConfig")
      Tr["EXT-SelfiesSender_transport"] = that.translate("VAL_EXT-SelfiesSender_transport")
      Tr["EXT-SelfiesSender_host"] = that.translate("VAL_EXT-SelfiesSender_host")
      Tr["EXT-SelfiesSender_port"] = that.translate("VAL_EXT-SelfiesSender_port")
      Tr["EXT-SelfiesSender_secure"] = that.translate("VAL_EXT-SelfiesSender_secure")
      Tr["EXT-SelfiesSender_auth"] = that.translate("VAL_EXT-SelfiesSender_auth")
      Tr["EXT-SelfiesSender_user"] = that.translate("VAL_EXT-SelfiesSender_user")
      Tr["EXT-SelfiesSender_pass"] = that.translate("VAL_EXT-SelfiesSender_pass")
      Tr["EXT-SelfiesSender_message"] = that.translate("VAL_EXT-SelfiesSender_message")
      Tr["EXT-SelfiesSender_from"] = that.translate("VAL_EXT-SelfiesSender_from")
      Tr["EXT-SelfiesSender_to"] = that.translate("VAL_EXT-SelfiesSender_to")
      Tr["EXT-SelfiesSender_subject"] = that.translate("VAL_EXT-SelfiesSender_subject")
      Tr["EXT-SelfiesSender_text"] = that.translate("VAL_EXT-SelfiesSender_text")
      Tr["EXT-SelfiesViewer_moduleWidth"] = that.translate("VAL_EXT-SelfiesViewer_moduleWidth")
      Tr["EXT-SelfiesViewer_moduleHeight"] = that.translate("VAL_EXT-SelfiesViewer_moduleHeight")
      Tr["EXT-SelfiesViewer_displayDelay"] = that.translate("VAL_EXT-SelfiesViewer_displayDelay")
      Tr["EXT-SelfiesViewer_displayBackground"] = that.translate("VAL_EXT-SelfiesViewer_displayBackground")
      Tr["EXT-SelfiesViewer_sortBy"] = that.translate("VAL_EXT-SelfiesViewer_sortBy")
      Tr["EXT-Screen_Body"] = that.translate("VAL_EXT-Screen_Body")
      Tr["EXT-Screen_Dimmer"] = that.translate("VAL_EXT-Screen_Dimmer")
      Tr["EXT-Screen_Delay"] = that.translate("VAL_EXT-Screen_Delay")
      Tr["EXT-Screen_Mode"] = that.translate("VAL_EXT-Screen_Mode")
      Tr["EXT-Screen_xrandrForceRotation"] = that.translate("VAL_EXT-Screen_xrandrForceRotation")
      Tr["EXT-Screen_Counter"] = that.translate("VAL_EXT-Screen_Counter")
      Tr["EXT-Screen_Bar"] = that.translate("VAL_EXT-Screen_Bar")
      Tr["EXT-Screen_Style"] = that.translate("VAL_EXT-Screen_Style")
      Tr["EXT-Screen_Presence"] = that.translate("VAL_EXT-Screen_Presence")
      Tr["EXT-Screen_Date"] = that.translate("VAL_EXT-Screen_Date")
      Tr["EXT-Screen_Availability"] = that.translate("VAL_EXT-Screen_Availability")
      Tr["EXT-Screen_Sleeping"] = that.translate("VAL_EXT-Screen_Sleeping")
      Tr["EXT-Screen_GPIO"] = that.translate("VAL_EXT-Screen_GPIO")
      Tr["EXT-Screen_Reset"] = that.translate("VAL_EXT-Screen_Reset")
      Tr["EXT-Screen_Sound"] = that.translate("VAL_EXT-Screen_Sound")
      Tr["EXT-Screen_TouchMode"] = that.translate("VAL_EXT-Screen_TouchMode")
      Tr["EXT-Screen_ON"] = that.translate("VAL_EXT-Screen_ON")
      Tr["EXT-Screen_OFF"] = that.translate("VAL_EXT-Screen_OFF")
      Tr["EXT-Screen_Days"] = that.translate("VAL_EXT-Screen_Days")
      Tr["EXT-Screen_Hour"] = that.translate("VAL_EXT-Screen_Hour")
      Tr["EXT-Screen_Minute"] = that.translate("VAL_EXT-Screen_Minute")
      Tr["EXT-ScreenManager_Lock"] = that.translate("VAL_EXT-ScreenManager_Lock")
      Tr["EXT-ScreenManager_On"] = that.translate("VAL_EXT-ScreenManager_On")
      Tr["EXT-ScreenManager_Off"] = that.translate("VAL_EXT-ScreenManager_Off")
      Tr["EXT-Spotify_Interval"] = that.translate("VAL_EXT-Spotify_Interval")
      Tr["EXT-Spotify_Idle"] = that.translate("VAL_EXT-Spotify_Idle")
      Tr["EXT-Spotify_BottomBar"] = that.translate("VAL_EXT-Spotify_BottomBar")
      Tr["EXT-Spotify_ID"] = that.translate("VAL_EXT-Spotify_ID")
      Tr["EXT-Spotify_Secret"] = that.translate("VAL_EXT-Spotify_Secret")
      Tr["EXT-StreamDeck_device"] = that.translate("VAL_EXT-StreamDeck_device")
      Tr["EXT-StreamDeck_brightness"] = that.translate("VAL_EXT-StreamDeck_brightness")
      Tr["EXT-StreamDeck_ecobrightness"] = that.translate("VAL_EXT-StreamDeck_ecobrightness")
      Tr["EXT-StreamDeck_ecotime"] = that.translate("VAL_EXT-StreamDeck_ecotime")
      Tr["EXT-StreamDeck_logo"] = that.translate("VAL_EXT-StreamDeck_logo")
      Tr["EXT-TelegramBot_telegramAPIKey"] = that.translate("VAL_EXT-TelegramBot_telegramAPIKey")
      Tr["EXT-TelegramBot_adminChatId"] = that.translate("VAL_EXT-TelegramBot_adminChatId")
      Tr["EXT-TelegramBot_allowedUser"] = that.translate("VAL_EXT-TelegramBot_allowedUser")
      Tr["EXT-TelegramBot_commandAllowed"] = that.translate("VAL_EXT-TelegramBot_commandAllowed")
      Tr["EXT-TelegramBot_useWelcomeMessage"] = that.translate("VAL_EXT-TelegramBot_useWelcomeMessage")
      Tr["EXT-TelegramBot_useSoundNotification"] = that.translate("VAL_EXT-TelegramBot_useSoundNotification")
      Tr["EXT-TelegramBot_TelegramBotServiceAlerte"] = that.translate("VAL_EXT-TelegramBot_TelegramBotServiceAlerte")
      Tr["EXT-TelegramBot_favourites"] = that.translate("VAL_EXT-TelegramBot_favourites")
      Tr["EXT-TelegramBot_telecast"] = that.translate("VAL_EXT-TelegramBot_telecast")
      Tr["EXT-TelegramBot_telecastLife"] = that.translate("VAL_EXT-TelegramBot_telecastLife")
      Tr["EXT-TelegramBot_telecastLimit"] = that.translate("VAL_EXT-TelegramBot_telecastLimit")
      Tr["EXT-TelegramBot_telecastHideOverflow"] = that.translate("VAL_EXT-TelegramBot_telecastHideOverflow")
      Tr["EXT-TelegramBot_telecastContainer"] = that.translate("VAL_EXT-TelegramBot_telecastContainer")
      Tr["EXT-TelegramBot_dateFormat"] = that.translate("VAL_EXT-TelegramBot_dateFormat")
      Tr["EXT-Updates_AutoUpdate"] = that.translate("VAL_EXT-Updates_AutoUpdate")
      Tr["EXT-Updates_AutoRestart"] = that.translate("VAL_EXT-Updates_AutoRestart")
      Tr["EXT-Updates_Log"] = that.translate("VAL_EXT-Updates_Log")
      Tr["EXT-Updates_Timeout"] = that.translate("VAL_EXT-Updates_Timeout")
      Tr["EXT-Volume_Start"] = that.translate("VAL_EXT-Volume_Start")
      Tr["EXT-Volume_Sync"] = that.translate("VAL_EXT-Volume_Sync")
      Tr["EXT-Welcome_Welcome"] = that.translate("VAL_EXT-Welcome_Welcome")
      Tr["EXT-YouTube_Fullscreen"] = that.translate("VAL_EXT-YouTube_Fullscreen")
      Tr["EXT-YouTube_Width"] = that.translate("VAL_EXT-YouTube_Width")
      Tr["EXT-YouTube_Height"] = that.translate("VAL_EXT-YouTube_Height")
      Tr["EXT-YouTube_Search"] = that.translate("VAL_EXT-YouTube_Search")
      Tr["EXT-YouTube_Display"] = that.translate("VAL_EXT-YouTube_Display")
      Tr["EXT-YouTube_Header"] = that.translate("VAL_EXT-YouTube_Header")
      Tr["EXT-YouTube_Username"] = that.translate("VAL_EXT-YouTube_Username")
      Tr["EXT-YouTube_Password"] = that.translate("VAL_EXT-YouTube_Password")
      Tr["EXT-YouTubeCast_Name"] = that.translate("VAL_EXT-YouTubeCast_Name")
      Tr["EXT-YouTubeCast_Port"] = that.translate("VAL_EXT-YouTubeCast_Port")
      resolve(Tr)
    })
  }
}

