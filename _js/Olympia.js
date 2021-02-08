function drawRing(x,y,r,col)
{
	for(ri=r-2;ri<r+2;ri++)
	{
		svg+="<circle cx='"+x+"' cy='"+y+"' r='"+ri+"' stroke='"+col+"' fill='none' />";
	}
}

function olympia(zoom)
{
	r=zoom*2/3; y=zoom/3;
	drawRing(i_lcdw/2-zoom  ,i_lcdh/2-y,r,"blue");
	drawRing(i_lcdw/2       ,i_lcdh/2-y,r,"black");
	drawRing(i_lcdw/2+zoom,  i_lcdh/2-y,r,"red");
	drawRing(i_lcdw/2-zoom/2,i_lcdh/2+y,r,"yellow");
	drawRing(i_lcdw/2+zoom/2,i_lcdh/2+y,r,"lime");
}
z=15;

function fillScreen(colf)
{ svg="<rect x='0' y='0' width='"+i_lcdw+"' height='"+i_lcdh+"' fill='"+colf+"'/>";}

z=15;
function M5()
{
	fillScreen("white"); olympia(z);
	console.log(svg);
	document.getElementById('Lcd').innerHTML=svg;
	z+=5; if(z<=60){setTimeout(M5,1000);}
}
