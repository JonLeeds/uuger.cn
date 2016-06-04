//anthers JQ↓
 var gogo=function() {
	var width = $("body").width();//获取屏幕宽度 
    //var num = $("#carouselbox ul li").length;//获取首页幻灯片的个数  
   // $("#carouselbox ul").width(width * num);//设置ul的宽度 
   // $("#carouselbox ul li").width(width);//设置每个幻灯片的宽度  	
    $('.pyjy').height(width*.2);
    $('.plant').height(width*.15);
    //index page2 card Listener↓
	$('.contant-img').height(width*.3);
	$('.contant-img img').height(width*.3);
	$('.height-page2').height(width*1.6);
};
var pageCardSet=function(){
	var width = $(".cardsbox").width();//获取屏幕宽度
	var height = $("body").height();
	$('.card').height(width*.3);
	$('.card').width(width*.3);
	$('.cards-down').height(width*.3);
	$('.stack').width(width);
	$('.height-card').height(width*.3*5);

}
// short bar Listener ↓
var  btself='index.html';//判断按钮是否激活再执行ajax
function btcolor(){
$('.btcolora').on('click',function(e){
		 	$('.btcolora').removeClass('btcolorb');
		 	$(this).addClass('btcolorb');	
		 });
}
btcolor();



var homePage2Bind = function(){

	$('.OtherLink-team').on('click',function(e){
		var aurl = 'card.html';
		myajax(aurl,'team');
	});
	$('.OtherLink-card').on('click',function(e){
		var aurl = 'card.html';
		myajax(aurl);
	});
	$('.OtherLink-box').on('click',function(e){
		var aurl = 'box.html';
		myajax(aurl);
	});
	$('.OtherLink-box2').on('click',function(e){
		var aurl = 'box.html';
		myajax(aurl,'box2');
	});
	$('.OtherLink-star').on('click',function(e){
		var aurl = 'box.html';
		myajax(aurl,'star');
	});	

};
homePage2Bind();

 var GoHome = function(){
 $('.btcolora').removeClass('btcolorb');
   url = 'index.html'; 
   state ={url: url, title: ''};
   btself = url;
	window.history.pushState(state,'', url);                               // Get value of href
              // New current indicator
  $('#normalpager').remove();                          // Remove old content
  $('#normalpage').load(url + ' #normalpager', function() {
  		gogo();
		setTimeout("loaded ()",100);
		 btcolor();
		 btnbind();
		 $('.capsule:nth-child(1)').addClass('capsuletab');
		});

		$('.float-btn-group').toggleClass('open');
		$('.capsule').closest('.capsule').toggleClass('hide');
		$("#screen").removeClass("animate");
}


var state ={url:'index.html', title: ''};
var myajax = function(myurl,pagefrom){
				if (btself != 'plan.html') {
			 	$(".capsule").removeClass("capsuletab");
			    $('#normalpager').remove();                                // Remove old part
			    $('#normalpage').load(myurl + '#normalpager',function() {
			    			btnbind();
			    			$('#home').off();
							$('#home').one('click', function(e) {                 // User clicks nav link
							  e.preventDefault();                                // Stop loading new link
							  $('.btcolora').removeClass('btcolorb');
							   var url = 'index.html'; 
							   state ={url: url, title: ''};
								window.history.pushState(state,'', url);                               // Get value of href
						                  // New current indicator
							  $('#normalpager').remove();                          // Remove old content
							  $('#normalpage').load(url + ' #normalpager', function() {
							  		gogo();
									setTimeout("loaded ()",100);
									 btcolor();
									 btnbind();
									homePage2Bind();
									
									});
								}).hide().fadeIn(300);// 长按钮绑定结束
							if (myurl=='card.html' || myurl=='plan.html') {		    			
			    				cardscroll();

			    			};// 第二个if结束
							if (pagefrom == 'star') {
								 state ={url: myurl, title: ''};
								window.history.pushState(state,'', myurl);
								$('.btcolora').removeClass('btcolorb');
								$('.btn-float:nth-child(4) .btcolora').addClass('btcolorb');
								btself = 'box.html';

								$('.box-joinContanter').addClass('transition');
								$('.box-contanter').addClass('transition');

								$('.box-bar').removeClass('transition');
								$('.box-bar:nth-child(3)').addClass('transition');
								$('.linemove').addClass('transition');									
								
							};	
							if (pagefrom == 'team') {
								 state ={url: myurl, title: ''};
								window.history.pushState(state,'', myurl);
								$('.btcolora').removeClass('btcolorb');
								$('.btn-float:nth-child(1) .btcolora').addClass('btcolorb');
								btself = 'card.html';

								$('.cardsbarer').removeClass('transition');
								$('.cardsbar-1').removeClass('transition');
								$('.cardsbar-2').addClass('transition');	
								$('ul.card-stacks').removeClass('transition');
								$('.card-teams').addClass('transition');						
														
							};	
							if (pagefrom == 'box2') {
								$('.btcolora').removeClass('btcolorb');
								$('.btn-float:nth-child(4) .btcolora').addClass('btcolorb');
								btself = 'box.html';
								
								$('.box-contanter2').addClass('transition');
								$('.box-joinContanter').removeClass('transition');
								$('.box-contanter').addClass('transition');

								$('.box-bar').removeClass('transition');
								$('.box-bar:nth-child(2').addClass('transition');
								$('.linemove').addClass('transition');						
														
							};																	    			


			    		}).hide().fadeIn(300);// 小按钮绑定结束
			}else{
				$('#normalpager').remove();
				 $('#normalpage').load(myurl + '#normalpager',function() {
				 	gogo();
				 	btnbind();
					
				  		btself=myurl;		
				  		return btself;		 	
				 }).hide().fadeIn(300);
				 if (myurl == 'index.html') {
					 $('.capsule:nth-child(1)').addClass('capsuletab');	
					$('.btn-triger').on('click',function () {
						$('.float-btn-group').toggleClass('open');
						$('.capsule').closest('.capsule').toggleClass('hide');
					});
				}
			}

}
function btnbind(myurl){	
	$('.btn-list a,.panelLink').on('click', function(e) {
			e.preventDefault();  	    
		    if (btself!=this.name) {
			    myurl = this.name;
                                   // Get URL to load
                myajax (myurl);
				if (myurl != 'plan.html') {
				state ={url: myurl, title: ''};
				window.history.pushState(state,'', myurl); 
				}

				  		btself=this.name;		
				  		return btself;

				}; // 第一个if结束

	  });
	return btself;
};
btnbind();

			//short red bar
$('.btn-triger').on('click',function () {
	$('.float-btn-group').toggleClass('open');
	$('.capsule').closest('.capsule').toggleClass('hide');
});
// longbar Listener ↓
$(document).ready(function(){
  	 $(".capsule").click(function(){

	     if ($(this).index() == 1){
	     	$('.capsule:nth-child(2)').addClass('capsuletab');
	     	$('.capsule:nth-child(1)').removeClass('capsuletab');
	     	$("#screen").addClass("animate");
	      }
	     else{
	     	$('.capsule:nth-child(1)').addClass('capsuletab');
	     	$('.capsule:nth-child(2)').removeClass('capsuletab');
	      	$("#screen").removeClass("animate");
	      };
	      	 btself='index.html';
	  		return btself;
      });
  	 return btself;
	//$(".capsule").hide().eq($(this).index()).show();
       //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');       
  });  
//iscroll loaded ↓
var myScroll3;
var myScroll2;
var myScroll;
var myScroll1;
function loaded () { 
	myScroll2 = new IScroll('#carouselbox', {
	    scrollX: true,
		scrollY: false,
		momentum: false,
		disablePointer: false,
		eventPassthrough: true, 
		//snap: true,
		//snapSpeed: 400,
		//keyBindings: true,
	    //disableMouse: false,   
	    snap: 'li'
	});
 var timer = setInterval(startScroll, 3000);
	myScroll = new IScroll('#wrapper', {
	});
	myScroll3 = new IScroll('#recommend', { 
		eventPassthrough: true, 
		scrollX: true, 
		scrollY: false, 
		preventDefault: false
	});
	//last page scroll	
	myScroll1 = new IScroll('#wrapper2',{
	});

};
function cardscroll(){
	myScroll = new IScroll('#wrapper', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
	});
};
//iscroll 幻灯片自动↓
var startScroll=function () {
    if (myScroll2) {
	    var i=0; 
	    i++;  
	    if (i == $("#carouselbox ul li").length) { //当滚动到最后一张，回到第一张  
	        myScroll2.goToPage(0, 0, 300); //回第一页  
	        i = 0;  
	    } else {  
	        myScroll2.next(); //滚到下一页  
	    } 
    }
 };

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
/*
// mark Listener↓

	$(document).ready(function(){ 
		var b = $("#b"); 
		var overFlow = $("#over"); 
		b.click(function(){ 
		overFlow.fadeIn(); 
		$(".mask").css("background","rgb(0, 0, 0)"); 
		$(".mask").css("opacity","0.3"); 
		$(".mask").css("z-index","4");
		//$(".mask").on('touchmove',function(event) { event.preventDefault(); }, false);
	}) 

	$(".mask").click(function(){ 
		overFlow.fadeOut("slow"); 
		$(".mask").css("opacity","0"); 
		$(".mask").css("z-index","1");
		//$(".mask").unbind('touchmove');
		}); 
	}) ; 
	var cardheight=function(){
		var height =$('li.card').height();
		var num =$('.cards li').length;
		var space = '20px';
		$('.cards').height(height * num + num*space);

	}
*/

