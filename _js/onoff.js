function onoff(id)
{
	var onoff=document.getElementById(id+'10');
	if(id=='notaus')
	{
		if(onoff.getAttribute('values')!='#800000;#FF0000;#800000;#800000')
			{onoff.setAttribute('values','#800000;#FF0000;#800000;#800000');}
		else{onoff.setAttribute('values','#FF0000');}
	}
	if(id=="r")
	{
		var c1=document.getElementById('cr1');
		var c2=document.getElementById('cr2');
		if(onoff.getAttribute('transform')=='scale(1,-1)')
			{onoff.setAttribute('transform','scale(1,1)');  c1.setAttribute('fill','red'); c2.setAttribute('fill','red');}
		else{onoff.setAttribute('transform','scale(1,-1)'); c1.setAttribute('fill','darkred');c2.setAttribute('fill','darkred');}
	}
	if(id=="g")
	{
		var c1=document.getElementById('cg1');
		var c2=document.getElementById('cg2');
		if(onoff.getAttribute('transform')=='scale(1,-1)')
			{onoff.setAttribute('transform','scale(1,1)');  c1.setAttribute('fill','lime'); c2.setAttribute('fill','lime');}
		else{onoff.setAttribute('transform','scale(1,-1)'); c1.setAttribute('fill','darkgreen');c2.setAttribute('fill','darkgreen');}
	}
	if(id=="b")
	{
		var c1=document.getElementById('cb1');
		var c2=document.getElementById('cb2');
		if(onoff.getAttribute('transform')=='scale(1,-1)')
			{onoff.setAttribute('transform','scale(1,1)');  c1.setAttribute('fill','#4040FF'); c2.setAttribute('fill','blue');}
		else{onoff.setAttribute('transform','scale(1,-1)'); c1.setAttribute('fill','darkblue');c2.setAttribute('fill','darkblue');}
	}
	if(id=='swa')
	{ 
		if(onoff.getAttribute('fill')=='lime'){onoff.setAttribute('fill','red');} else {onoff.setAttribute('fill','lime');}
	}
	if(id=='swb')
	{
		var sh=document.getElementById('shadow');
		if(onoff.getAttribute('fill')=='lime')
				{sh.setAttribute('transform','scale(1,1)');  onoff.setAttribute('fill','red');}
		else{sh.setAttribute('transform','scale(1,-1)'); onoff.setAttribute('fill','lime');}
	}
	if(id=='swc')
	{
		if(onoff.getAttribute('transform')=='scale(1,-1)')
			{onoff.setAttribute('transform','scale(1,1)');}
		else{onoff.setAttribute('transform','scale(1,-1)');}
	}
	if(id=='swd')
	{
		var sw=document.getElementById('sw4');
		if(onoff.getAttribute('fill')=='lime')
			{sw.setAttribute('transform','scale(1,-1)'); onoff.setAttribute('fill','red');}
		else{sw.setAttribute('transform','scale(1,1)');  onoff.setAttribute('fill','lime');}
	}
	if(id=='swe')
	{
		var ton=document.getElementById('sweton');
		var tof=document.getElementById('swetof');
		if(onoff.getAttribute('transform')!='scale(1,-1)')
			{onoff.setAttribute('transform','scale(1,-1)');  ton.setAttribute('fill','gray');  tof.setAttribute('fill','red');}
		else{onoff.setAttribute('transform','scale(1,1)'); ton.setAttribute('fill','lime');  tof.setAttribute('fill','gray');}
	}
	if(id=='bulb')
	{
		if(onoff.getAttribute('fill')=='none')
			{ onoff.setAttribute('fill','yellow');}
		else{ onoff.setAttribute('fill','none');}
	}
	if(id=='toast')
	{
		var tbr=document.getElementById('toastbr');
		if(onoff.getAttribute('fill')=='lime')
			{ onoff.setAttribute('fill','red');  tbr.setAttribute('fill','yellow');}
		else{ onoff.setAttribute('fill','lime'); tbr.setAttribute('fill','orange');}
	}
	if(id=='coffee')
	{
		var cbm=document.getElementById('coffeebeam');
		if(onoff.getAttribute('fill')=='lime')
			{ onoff.setAttribute('fill','red');  cbm.setAttribute('stroke','none');}
		else{ onoff.setAttribute('fill','lime'); cbm.setAttribute('stroke','darkorange');}
	}
	if(id=='xmastree')
	{
		var zoom=new Date().getSeconds()/20.0;
		var scale='scale('+zoom+' '+zoom+' )';
		var xmstar=document.getElementById('xmasstar');
		if(onoff.getAttribute('fill')=='none')
			{ onoff.setAttribute('fill','white'); xmstar.setAttribute('transform',scale);}
		else{ onoff.setAttribute('fill','none');  xmstar.setAttribute('transform',scale);}
	}
	if(id=='lamp')
	{
	if( onoff.getAttribute('fill')=='none')
			{ onoff.setAttribute('fill','yellow');}
		else{ onoff.setAttribute('fill','none');}
	}
	if(id=='slamp')
	{
		if( onoff.getAttribute('fill')=='none')
			{ onoff.setAttribute('fill','yellow');}
		else{ onoff.setAttribute('fill','none');}
	}
	if(id=='tlamp')
	{
		if( onoff.getAttribute('fill')=='none')
			{ onoff.setAttribute('fill','yellow');}
		else{ onoff.setAttribute('fill','none');}
	}
	if(id=='ecar')
	{
		if( onoff.getAttribute('fill')=='red')
			{ onoff.setAttribute('fill','lime');}
		else{ onoff.setAttribute('fill','red');}
	}
	if(id=='mixer')
	{
		if( onoff.getAttribute('fill')=='red')
			{ onoff.setAttribute('fill','lime');}
		else{ onoff.setAttribute('fill','red');}
	}
	if(id=='wash')
	{
		var wa=document.getElementById('washwa');
		if(onoff.getAttribute('fill')=='red')
			{ onoff.setAttribute('fill','lime'); wa.setAttribute('fill','aqua');}
		else{ onoff.setAttribute('fill','red');  wa.setAttribute('fill','none'); }
	}
	if(id=='washani')
	{
		var wa=document.getElementById('washanirot');
		var a=document.getElementById('wani');
		if(onoff.getAttribute('fill')=='red')
			{ onoff.setAttribute('fill','lime'); wa.setAttribute('fill','aqua'); a.setAttribute('dur','5');}
		else{ onoff.setAttribute('fill','red');  wa.setAttribute('fill','none'); a.setAttribute('dur','1000');}
	}
	if(id=='eherd')
	{
		var ehpl=document.getElementById('eherdpl');
		var ehwi=document.getElementById('eherdwi');
		if(onoff.getAttribute('fill')=='red')
			{ onoff.setAttribute('fill','lime'); ehpl.setAttribute('fill','red');   ehwi.setAttribute('fill','yellow');}
		else{ onoff.setAttribute('fill','red');  ehpl.setAttribute('fill','black'); ehwi.setAttribute('fill','none');}
	}
	if(id=='heizer')
	{
		var hot=document.getElementById('heizhot');
		if(onoff.getAttribute('fill')=='red')
			{ onoff.setAttribute('fill','lime'); hot.setAttribute('fill','darkorange');}
		else{ onoff.setAttribute('fill','red');  hot.setAttribute('fill','none'); }
	}
	if(id=='sound')
	{
		if(onoff.getAttribute('fill')!='none')
			{ onoff.setAttribute('fill','none'); }
		else{ onoff.setAttribute('fill','lime'); }
	}
	if(id=='sock')
	{
		if(onoff.getAttribute('fill')!='none')
			{ onoff.setAttribute('fill','none'); }
		else{ onoff.setAttribute('fill','lime'); }
	}
	if(id=='sockrc')
	{
		if(onoff.getAttribute('fill')!='red')
			{ onoff.setAttribute('fill','red'); }
		else{ onoff.setAttribute('fill','lime'); }
	}
	if(id=='mwave')
	{
		var mwavewi=document.getElementById('mwavewi');
		if(onoff.getAttribute('stroke')!='lime')
			{ onoff.setAttribute('stroke','lime');  mwavewi.setAttribute('fill','yellow');}
		else{ onoff.setAttribute('stroke','red'); mwavewi.setAttribute('fill','none');}
	}
	if(id=='print')
	{
		var pripa=document.getElementById('printpa');
		if(onoff.getAttribute('fill')!='lime')
			{ onoff.setAttribute('fill','lime');  pripa.setAttribute('fill','white');}
		else{ onoff.setAttribute('fill','red');   pripa.setAttribute('fill','none');}
	}
	if(id=='kuma')
	{
		var kumafi=document.getElementById('kumafi');
		if(onoff.getAttribute('fill')!='lime')
			{ onoff.setAttribute('fill','lime'); kumafi.setAttribute('fill','beige');}
		else{ onoff.setAttribute('fill','red');  kumafi.setAttribute('fill','none');}
	}
	if(id=='fan')
	{
		var fanfi=document.getElementById('fanfi');
		var fanani=document.getElementById('fanani');
		if(onoff.getAttribute('fill')!='lime')
			{ onoff.setAttribute('fill','lime'); fanfi.setAttribute('fill','aqua'); fanani.setAttribute('dur','3');}
		else{ onoff.setAttribute('fill','red');  fanfi.setAttribute('fill','none'); fanani.setAttribute('dur','9999');}
	}
	if(id=='wacook')
	{
		var wacookfi=document.getElementById('wacookfi');
		if(onoff.getAttribute('fill')!='red')
			{ onoff.setAttribute('fill','red');  wacookfi.setAttribute('fill','aqua');}
		else{ onoff.setAttribute('fill','none'); wacookfi.setAttribute('fill','none');}
	}
	if(id=='jalusie')
	{
		var jalup=document.getElementById('jalup');
		var jaldn=document.getElementById('jaldn');
		if((jalup.getAttribute('stroke')!='red') & (jaldn.getAttribute('stroke')!='lime'))
		{jalup.setAttribute('stroke','red'); jaldn.setAttribute('stroke','black'); return; }
		if((jalup.getAttribute('stroke')=='red'))
		{jalup.setAttribute('stroke','black'); jaldn.setAttribute('stroke','lime'); return; }
		if((jaldn.getAttribute('stroke')=='lime'))
		{jalup.setAttribute('stroke','black'); jaldn.setAttribute('stroke','black'); return; }
	}
	if(id=='speaker')
	{
		if(onoff.getAttribute('stroke')!='none')
			{onoff.setAttribute('stroke','none');}
		else{onoff.setAttribute('stroke','black');}
	}
	if(id=='soundbar')
	{
		if(onoff.getAttribute('stroke')!='lime')
			{onoff.setAttribute('stroke','lime');}
		else{onoff.setAttribute('stroke','none');}
	}
	if(id=='drill')
	{
		if(onoff.getAttribute('fill')!='lime')
			{onoff.setAttribute('fill','lime');}
		else{onoff.setAttribute('fill','red');}
	}
	if(id=='desktop')
	{
		if(onoff.getAttribute('fill')!='lime')
			{onoff.setAttribute('fill','lime');}
		else{onoff.setAttribute('fill','red');}
	}
	if(id=='pb')
	{
		if(onoff.getAttribute('fill')!='red')
			{onoff.setAttribute('fill','red'); } 
		else{onoff.setAttribute('fill','none');}
	}
	if(id=='radio')
	{
	var radiofi=document.getElementById('radiofi');
		if(onoff.getAttribute('fill')!='lime')
			{onoff.setAttribute('fill','lime'); radiofi.setAttribute('fill','white');}
		else{onoff.setAttribute('fill','red');  radiofi.setAttribute('fill','#202020');}
	}
	if(id=='router')
	{
		var wifi=document.getElementById('routerwifi');
		if(onoff.getAttribute('fill')!='lime')
			{onoff.setAttribute('fill','lime'); wifi.setAttribute('stroke','lime');}
		else{onoff.setAttribute('fill','red');  wifi.setAttribute('stroke','none');}
	}
	if(id=='sauger')
	{
		if(onoff.getAttribute('fill')!='lime')
			{onoff.setAttribute('fill','lime');}
		else{onoff.setAttribute('fill','red');}
	}
	if(id=='webcam')
	{
		if(onoff.getAttribute('fill')!='lime')
			{onoff.setAttribute('fill','lime');}
		else{onoff.setAttribute('fill','red');}
	}
	if(id=='raspi')
	{
		if(onoff.getAttribute('fill')!='lime')
			{onoff.setAttribute('fill','lime');}
		else{onoff.setAttribute('fill','red');}
	}
	if(id=='opi')
	{
		if(onoff.getAttribute('fill')!='orange')
			{onoff.setAttribute('fill','orange');}
		else{onoff.setAttribute('fill','black');}
	}
	if(id=='esp')
	{
		if(onoff.getAttribute('stroke')!='lime')
			{onoff.setAttribute('stroke','lime');}
		else{onoff.setAttribute('stroke','red');}
	}
	if(id=='eggcook')
	{
		if(onoff.getAttribute('fill')!='lime')
			{onoff.setAttribute('fill','lime');}
		else{onoff.setAttribute('fill','red');}
	}
	if(id=='aquarium')
	{
	var aqfi=document.getElementById('aquariumfi');
		if(onoff.getAttribute('fill')!='darkgray')
			{onoff.setAttribute('fill','darkgray'); aqfi.setAttribute('fill','#202020');}
		else{onoff.setAttribute('fill','yellow');   aqfi.setAttribute('fill','aqua');}
	}
	if(id=='monitor')
	{
	var mofi=document.getElementById('monitorfi');
		if(onoff.getAttribute('fill')!='lime')
			{onoff.setAttribute('fill','lime'); mofi.setAttribute('fill','blue');}
		else{onoff.setAttribute('fill','red');  mofi.setAttribute('fill','none');}
	}
}

