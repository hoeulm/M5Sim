<script type='text/javascript' src='_js/shCore.js'></script>
<link   type='text/css'        rel='stylesheet' href='_css/shCoreMidnight.css' />
<script type='text/javascript'>SyntaxHighlighter.all();</script>
<?php
function highlightjs($file,$brush="ino")
{
	print("<script type='text/javascript' src='_js/shBrush_$brush.js'></script>\n");

	$hl_lines = file($file); $hl_cnt=count($hl_lines); $hl_zlen=strlen($ht_cnt);
	$fnbase=basename($file);
	$ico=$brush.".gif";
	print("<a href='raw.php?src=$fnbase' target='raw'><img src='_img/ico/$ico' /></a>Quellcode von <b>$fnbase</b><br/>");
	print("<pre class='brush: $brush;'>");
	foreach($hl_lines as $line)
	{$linex=str_replace("<","&lt;",$line); print($linex); } 
	print("</pre>");
}
?>