function show_site_runtime(){
	window.setTimeout("show_site_runtime()",1000); 
	X=new Date("03/12/2021 00:00:00"); 
	Y=new Date();
	T=(Y.getTime()-X.getTime()); 
	i=24*60*60*1000;
	d=T/i;
	D=Math.floor(d);
	h=(d-D)*24;
	H=Math.floor(h); 
	m=(h-H)*60;
	M=Math.floor(m); 
	s=(m-M)*60
	S=Math.floor(s);
	site_runtime.innerHTML= " η½η«θΏθ‘ π§‘ππ"+D + "ε€© " + H + " ζΆ " + M + " ε " + S + " η§ "
	}
show_site_runtime();