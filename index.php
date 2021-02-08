<!DOCTYPE html>
<!-- https://codepen.io/NiVZ/pen/WqXPbZ -->
<html>
<head>
<meta charset='utf-8'>
<style>
html{background:rgb(0,105,170); color:white;} h1{display:inline; font-size:4vw;}
</style>
<title>M5 ESP32 Simulator</title>
</head>
<body>
<?php
	error_reporting(E_ALL-E_NOTICE);
	include("_modules/highlightjs_ino.php"); 
	//foreach($_POST as $k=>$v){print("$k=<b>$v</b><br/>");}
	$m5hw =$_POST['m5hw'];  if($m5hw =="") {$m5hw= "M5StickC";}
	$m5src=$_POST['m5src']; if($m5src=="") {$m5src="HelloWorld";}
	if($m5hw=="M5StackBase") {$m5fn="M5_StaB_".$m5src;}
	if($m5hw=="M5StickC")    {$m5fn="M5_StiC_".$m5src;}
	if($m5hw=="M5StickCPlus"){$m5fn="M5_StiP_".$m5src;}
?>
<script>
x=0;
y=0;
i_lcdw=<?php if($m5hw=="M5StickC"){print("160");} if($m5hw=="M5StickCPlus"){print("240");} if($m5hw=="M5StackBase"){print("320");} ?>;
i_lcdh=<?php if($m5hw=="M5StickC"){print(" 80");} if($m5hw=="M5StickCPlus"){print("135");} if($m5hw=="M5StackBase"){print("240");} ?>;
function delay(ms)
{
	ms0=Date.now(); while(Date.now()-ms0<ms){};
}
function updateLcd()
{
	Lcd="<text x='"+x+"' y='"+y+"' fontsize='24'>Hello World</text>";
	console.log("x="+x+" y="+y+" Lcd="+Lcd);
	var M5_Lcd=document.getElementById('Lcd');
	M5_Lcd.innerHTML=Lcd;
	y+=10; if(y>i_lcdh){x+=10; y=0;}
	if(x<i_lcdw){setTimeout(updateLcd,100);}
}
<?php 
	if($m5src=="Olympia")
			{$src=file_get_contents("_js/Olympia.js"); print($src);}
		else{print("function M5(){setTimeout(updateLcd,100);}");}
?>
</script>
<form name='m5sel' method='POST'>
<h1>M5 ESP32 Simulator</h1><br/>
<table>
<tr><td>Hardware:</td><td><select id='m5hw' name='m5hw' onChange='document.m5sel.submit();'><
<option value='M5StackBase' <?php if($m5hw=="M5StackBase") {print("selected");} ?>>M5 Stack Base</option>
<option value='M5StickC'    <?php if($m5hw=="M5StickC")    {print("selected");} ?>>M5 Stick C</option>
<option value='M5StickCPlus'<?php if($m5hw=="M5StickCPlus"){print("selected");} ?>>M5 Stick C PLUS</option>
</option>
</select></td></tr>
<tr><td algin='right'>Source:</td><td>
<select id='m5src' name='m5src' onChange='document.m5sel.submit();'>
<option value='HelloWorld' <?php if($m5src=="HelloWorld") {print("selected");} ?> >HelloWorld</option>
<option value='Olympia'    <?php if($m5src=="Olympia")    {print("selected");} ?> >Olympia</option>
</select></td></tr>
<table>
<tr><td>
</td><td>Result</td></tr>
<tr valign='top'><td>
<?php
	highlightjs("_src/$m5fn".".ino");
?> 
</td>
<td>
<?php $hwsvg=file_get_contents("_img/$m5hw".".svg"); print($hwsvg); ?>
<br/>Console:<br/><textarea id='Console' rows='12'>
</textarea>
</td>

</tr>
</table>
</form>
<button onClick=M5();>RUN</button>
</script>
</body></html>

