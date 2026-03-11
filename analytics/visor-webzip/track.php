<?php
require_once dirname(__FILE__) . '/lib.php';
analytics_init_timezone();

$callback = isset($_GET['callback']) ? $_GET['callback'] : '';
$referrer = isset($_GET['referrer']) ? analytics_safe_value($_GET['referrer']) : '';
$utm_source = isset($_GET['utm_source']) ? analytics_safe_value($_GET['utm_source']) : '';
$utm_medium = isset($_GET['utm_medium']) ? analytics_safe_value($_GET['utm_medium']) : '';
$utm_campaign = isset($_GET['utm_campaign']) ? analytics_safe_value($_GET['utm_campaign']) : '';

if (!analytics_is_bot()) {
  $ts = time();
  $date_key = date('Y-m-d', $ts);
  analytics_append_event(array($ts, $date_key, date('H', $ts), analytics_classify_source($referrer, $utm_source, $utm_medium, $utm_campaign), analytics_safe_value(analytics_parse_url_host($referrer)), $referrer, $utm_source, $utm_medium, $utm_campaign));
  analytics_increment_counters($date_key);
}

$summary = analytics_summary_counts();
analytics_output_jsonp(array('ok' => true, 'site' => analytics_config('site_id', 'visor-webzip'), 'total' => intval($summary['total']), 'today' => intval($summary['today'])), $callback);
?>
