pref("extensions.jondoswitcher.current_network", "jondo");
pref("extensions.jondoswitcher.update_status", 0);
pref("extensions.jondoswitcher.is_first_launch", 1);
pref("extensions.jondoswitcher.switched_once", 0);

// These prefs set the about:preferences values when jondo is on
pref("extensions.jondoswitcher.jondobutton.autoconfig_retry_interval_max", 300);
pref("extensions.jondoswitcher.jondobutton.autoconfig_retry_interval_min", 5);
pref("extensions.jondoswitcher.jondobutton.autoconfig_url", "");
pref("extensions.jondoswitcher.jondobutton.autoconfig_url.include_path", false);
pref("extensions.jondoswitcher.jondobutton.failover_timeout", 1800);
pref("extensions.jondoswitcher.jondobutton.ftp", "127.0.0.1");
pref("extensions.jondoswitcher.jondobutton.ftp_port", 4001);
pref("extensions.jondoswitcher.jondobutton.http", "127.0.0.1");
pref("extensions.jondoswitcher.jondobutton.http_port", 4001);
pref("extensions.jondoswitcher.jondobutton.no_proxies_on", "localhost, 127.0.0.1, jondobrowser.jondos.de");
pref("extensions.jondoswitcher.jondobutton.proxy_over_tls", true);
pref("extensions.jondoswitcher.jondobutton.share_proxy_settings", false);
pref("extensions.jondoswitcher.jondobutton.socks", "127.0.0.1");
pref("extensions.jondoswitcher.jondobutton.socks_port", 4001);
pref("extensions.jondoswitcher.jondobutton.socks_remote_dns", false);
pref("extensions.jondoswitcher.jondobutton.socks_version", 5);
pref("extensions.jondoswitcher.jondobutton.ssl", "127.0.0.1");
pref("extensions.jondoswitcher.jondobutton.ssl_port", 4001);
pref("extensions.jondoswitcher.jondobutton.type", 1);
// These prefs set the about:preferences values when tor is on
pref("extensions.jondoswitcher.torbutton.autoconfig_retry_interval_max", 300);
pref("extensions.jondoswitcher.torbutton.autoconfig_retry_interval_min", 5);
pref("extensions.jondoswitcher.torbutton.autoconfig_url", "");
pref("extensions.jondoswitcher.torbutton.autoconfig_url.include_path", false);
pref("extensions.jondoswitcher.torbutton.failover_timeout", 1800);
pref("extensions.jondoswitcher.torbutton.ftp", "");
pref("extensions.jondoswitcher.torbutton.ftp_port", 0);
pref("extensions.jondoswitcher.torbutton.http", "");
pref("extensions.jondoswitcher.torbutton.http_port", 0);
pref("extensions.jondoswitcher.torbutton.no_proxies_on", "");
pref("extensions.jondoswitcher.torbutton.proxy_over_tls", true);
pref("extensions.jondoswitcher.torbutton.share_proxy_settings", false);
pref("extensions.jondoswitcher.torbutton.socks", "127.0.0.1");
pref("extensions.jondoswitcher.torbutton.socks_port", 9150);
pref("extensions.jondoswitcher.torbutton.socks_remote_dns", true);
pref("extensions.jondoswitcher.torbutton.socks_version", 5);
pref("extensions.jondoswitcher.torbutton.ssl", "");
pref("extensions.jondoswitcher.torbutton.ssl_port", 0);
pref("extensions.jondoswitcher.torbutton.type", 1);
// These prefs set the about:preferences values when both jondo and tor are off
pref("extensions.jondoswitcher.direct.autoconfig_retry_interval_max", 300);
pref("extensions.jondoswitcher.direct.autoconfig_retry_interval_min", 5);
pref("extensions.jondoswitcher.direct.autoconfig_url", "");
pref("extensions.jondoswitcher.direct.autoconfig_url.include_path", false);
pref("extensions.jondoswitcher.direct.failover_timeout", 1800);
pref("extensions.jondoswitcher.direct.ftp", "");
pref("extensions.jondoswitcher.direct.ftp_port", 0);
pref("extensions.jondoswitcher.direct.http", "");
pref("extensions.jondoswitcher.direct.http_port", 0);
pref("extensions.jondoswitcher.direct.no_proxies_on", "");
pref("extensions.jondoswitcher.direct.proxy_over_tls", true);
pref("extensions.jondoswitcher.direct.share_proxy_settings", false);
pref("extensions.jondoswitcher.direct.socks", "");
pref("extensions.jondoswitcher.direct.socks_port", 0);
pref("extensions.jondoswitcher.direct.socks_remote_dns", false);
pref("extensions.jondoswitcher.direct.socks_version", 5);
pref("extensions.jondoswitcher.direct.ssl", "");
pref("extensions.jondoswitcher.direct.ssl_port", 0);
pref("extensions.jondoswitcher.direct.type", 0);
// survey info
//pref("extensions.jondoswitcher.show_survey_info", true);
// restart jondo
pref("extensions.JonDo.automatic_shutdown", true);