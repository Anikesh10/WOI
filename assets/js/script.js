

 $(document).ready(function(){

	// ------------------------------- Speaker Modal-----------------------------------

	const data =[
		{
			"name": "Enrique Peña Nieto",
	    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptate, tempora aspernatur, sequi quibusdam ex eligendi a harum mollitia vero."
		},
		{
			"name": "Gudni Jóhannesson",
	    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptate, tempora aspernatur, sequi quibusdam ex eligendi a harum mollitia vero."
		},
		{
			"name": "Luis Guillermo Solis",
	    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptate, tempora aspernatur, sequi quibusdam ex eligendi a harum mollitia vero."
		},
		{
			"name": "José Calzada Rovirosa",
	    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptate, tempora aspernatur, sequi quibusdam ex eligendi a harum mollitia vero."
		},
		{
			"name": "Eneida De León",
	    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptate, tempora aspernatur, sequi quibusdam ex eligendi a harum mollitia vero."
		},
		{
			"name": "Adison Promthep",
	    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptate, tempora aspernatur, sequi quibusdam ex eligendi a harum mollitia vero."
		},
		{
			"name": "Zanny Minton Beddoes",
	    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptate, tempora aspernatur, sequi quibusdam ex eligendi a harum mollitia vero."
		},
		{
			"name": "Zanny Minton Beddoes",
	    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptate, tempora aspernatur, sequi quibusdam ex eligendi a harum mollitia vero."
		}
	]

	var modal=document.getElementById('modal').children;
	var index,detail,ele,container;
	container=document.getElementById('popup').children[0];
	
	for(let k=0;k<modal.length;k++)
	{
		modal[k].addEventListener("click",function() { pop(this); });
	}

	function pop (list) {
		var mypop=list.cloneNode(true);
		index=list.getAttribute('data-index');
		document.getElementById('popup').style.height=100+'%';
		container.children[0].append(mypop);
		document.getElementById('close').style.display='block';
		detail=data[index].name+', '+data[index].detail;
		ele=document.createElement('li');
		ele.innerHTML=detail;
		container.children[0].append(ele);
		document.getElementById('popup').addEventListener("click",function(e) { close(this,mypop,e); });
	}

	function close(not,mypop,eve)
	{
		if(not==eve.target||eve.target==document.getElementById('close')){
			document.getElementById('close').style.display='none';	
			container.children[0].removeChild(mypop);
			container.children[0].removeChild(ele);
			document.getElementById('popup').style.height=0+'%';
		}
	}
	// -----------------------------------------------------------------------

	// ------------------------------- Video Modal-----------------------------------

	var btn=document.getElementById('video-pop');
	btn.addEventListener("click",function() { videoPop(this);});


	function videoPop (list) {
		document.getElementById('video').style.height=100+'%';
		var video=document.getElementById('iframe');
		document.getElementById('cross').style.display='block';	
		video.setAttribute('src','https://www.youtube.com/embed/MYSVMgRr6pw');
		document.getElementById('video').addEventListener("click",function(e) { videoClose(this,e); });
	}

	function videoClose(not,eve)
	{
		if(not==eve.target||eve.target==document.getElementById('cross')){
			document.getElementById('cross').style.display='none';	
			document.getElementById('video').style.height=0+'%';
		}
	}

	// -----------------------------------------------------------------------

	// ------------------------------- Mobile Hamburger-----------------------------------

	var flag=0;
	var bar=document.getElementsByClassName('hamburger');
  var mobile=document.getElementsByClassName('mobile-menu');
  var menu=document.querySelector('.mobile-menu>span');
	bar[0].addEventListener("click",function(){mobileMenu();});
	menu.addEventListener("click",function(){mobileMenu();});

	function mobileMenu ( ) {
		if(flag==0)
		{
			mobile[0].classList.add("active");
			flag++;
		}	else {
			flag=0;
			mobile[0].classList.remove("active");
		} 
	}

	// -----------------------------------------------------------------------

	// ------------------------------- Events Tab -----------------------------------

	var tab= document.querySelector(".tab ul").children;
	var accordianList=document.querySelector(".tab-content ul").children;
	function day (current){
	 for(let i=0;i<tab.length;i++){
	 	if(tab[i].classList=="active"){
	 		tab[i].classList.remove('active');
	 	}
	 }

	 current.classList.add('active');
	 var showId=current.children[0].getAttribute('data-tab');
	 
	 console.log(showId);
	 for(let i=0;i<accordianList.length;i++){
	 	if(accordianList[i].classList=="open"){
	 		accordianList[i].classList.remove('open');
	 	}
	 }
	 document.getElementById(showId).classList.add('open');
	}

	for(let i=0;i<tab.length;i++) {
		tab[i].addEventListener('click',function( ){ day(this); });
	}	

	// -----------------------------------------------------------------------
});



















