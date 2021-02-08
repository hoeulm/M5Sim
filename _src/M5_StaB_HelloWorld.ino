#include <M5Stack.h>

void setup()
{
	M5.begin();
	M5.setRotation(3); M5.Lcd.fillScreen(BLACK);
}

void loop()
{
	for(x=0;x<M5.Lcd.width();x+=10)
	{
		for(y=0;y<M5.Lcd.height();y+=10)
		{
			M5.Lcd.drawString("HelloWorld,x,y,1);
		}
	}
	delay(100);
	M5.Lcd.fillScreen(BLACK);
}
