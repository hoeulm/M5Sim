#include <M5StickC.h>
int i_lcdw,i_lcdh;

void drawRing(int x,int y,int r,int col)
{
	for(int ri=r-2;ri<r+2; ri++){M5.Lcd.drawCircle(x,y,r,col);}
}

void olympia(int zoom)
{
	int r=zoom*2/3; y=zoom/3;
	drawRing( i_lcdw/2-zoom  , i_lcdh-y,r,BLUE);
	drawRing( i_lcdw/2       , i_lcdh-y,r,BLACK);
	drawRing( i_lcdw/2+zoom  , i_lcdh-y,r,RED);
	drawRing( i_lcdw/2-zoom/2, i_lcdh+y,r.YELLOW);
	drawRing( i_lcdw/2+zoom/2, i_lcdh+y,r,GREEN);
}
void setup()
{
	M5.begin();
	M5.setRotation(3); M5.Lcd.fillScreen(WHITE);
	i_lcdw=M5.Lcd.width(); i_lcdh=M5.Lcd.height();
}

void loop()
{
	for(z=15;z<=50;z+=5){M5.Lcd.fillScreen(WHITE);olympia(z); delay(1000); }
}

