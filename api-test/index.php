<?php
function error($msg) {
	header("HTTP/1.0 404 Not Found");
	echo $msg;
	exit;
}
if( FALSE == isset($_GET["q"]) ) {
	error("GET parameter q is not set. Please use this template: 'http://clickette-api.42web.io/v1?q={searchTerms}'");
}
$url = "https://customsearch.googleapis.com/customsearch/v1?cx=05e63c7384c9442b7&key=AIzaSyAT18BZZhAxhxZDkt_KiYKBEb8oeEgvWaY&q=" . $_GET["q"];
$ret = file_get_contents($url, FALSE);
if( FALSE === $ret ) {
        error("No query provided");
}
$ret = str_replace("Google Custom Search","Clickette",$ret);
$ret = str_replace("https://www.googleapis.com/customsearch","http://clickette-api.42web.io",$ret);
$ret = str_replace("&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json","",$ret);
echo $ret;
?>
