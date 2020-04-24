
var $devWidth;
var $limitSize=768;
$(document).ready(function(){
	 // alert("하이~!"); alert은 객체가 생략된거(window) window가 최상이기떄문에 생략가능 alert는 window의 매써드
	 // 디바이스 사이즈=스크린
// var $devWidth;

// $(document).ready(function(){
	// *디바이스 사이즈 체크*
	$devWidth=$("body").width();
	$(window).resize(function()
			// *윈도우 창의 크기 조절하는것 resize*
	{
		$devWidth=$("body").width();
	});
	// *메인메뉴*
	$(".gnblist > li > a").bind("mouseover focus",function(){
		if($devWidth <$limitSize) return false;
			// 767          768 사이즈 
			//식에따라서 768사이즈보다 클떄 아래를 실행한다.위에식대로
		// $(".gnblist a").next().show();
		$(".gnblist ul").hide();
		$(this).next().show();
		//(this)는 이벤트효과에만 적용된다?;;
		$(".gnblist > li > a").css({
			'height':'29px','background':'none'
		});
		$(this).css('height','32px');
		$(this).css('background','url("images/over_icon.gif") no-repeat center bottom');
	});
	$("#gnb").mouseleave(function(){
		if($devWidth <$limitSize) return false;
		$(".gnblist ul").stop().slideUp(100);
		//slideUp의 ()에 들어가는 숫자는 1000이 1초이다 50은 0.05초이다.
		$(".gnblist > li > a").css({
			'height':'29px','background':'none'
		});
	});
	// *전체메뉴*
	$(".allmenu_view a").click(function(e){
							// function()안에잇는 e는 event의 약자이다 
							// $(".allmenu_view ")안에잇는 a가 event효과를 가지게할수잇다.
		e.preventDefault();
			// preventDefault는 여기서 a태그를 클릭햇을떄 이동하는효과를 없앤거다
			// preventDefault는 막는역할을한다.
		$(".allmenu_view").slideUp(1000,function(){
			$("#allMenu_box").slideDown("slow");
		});
	});
	$(".all_close").click(function(e){
		e.preventDefault();
		$("#allMenu_box").slideUp("slow",function(){
			$(".allmenu_view").slideDown(1000);
		});
	});
	// bookframe에서 기준이 left0으로 잡혀잇기떄문에 오른쪾 버튼을 누르면 
	// 그림이 -1003으로 이동을하게되서 화면에서안보이고 
	// 왼쪽버튼을 누르면 그림이 다시 left0으로 이동을한다.그리고나서
	// 오른쪾 버튼을 더눌럿을떄 효과가없는것은 함수를이용해서 적용한다.
	// *click&touch 슬라이드 배너**
	var $bnnNum=0;
	$(".next").click(function(){
		if($bnnNum>=1) return false;
		$bnnNum++; //1
		$book_w=$("#recomm_book").width(); //1003 $book_w의 width를 설정한것
		$("#book_frame").animate({left:-$book_w},300,function(){
			$("#book_roll img").attr("src","images/state_out.gif");
		$("#book_roll img").eq($bnnNum).attr("src","images/state_over.gif");
		});
		});
				// animate( { 변수가가 2개들어가잇는거 -는 음수로가야되기떄문에넣은것이고 ,뒤에 숫자는 움직일떄의 시간이다 300은 0.3초}) 왜 음수냐면 지금 기준이 left0이기때문에 오른쪽을누르면 그림이 -1003으로 움직여서 화면에서벗나고 그림이나오는것
		// $("#book_roll img").attr("src","images/state_out.gif");
		 // attr은 속성이다 오른쪾을 눌럿을떄 체크됫다는 표시가 초록색 인데
		 // 그게들어오려면 거꿀로되야되니까 attr로 사진을 대체한것
		// $("#book_roll img").eq($bnnNum).
				// eq는 인덱스를 나타낸다. eq는 equal이다 
		// attr("src","images/state_over.gif");
		$(".prev").click(function(){
			if($bnnNum==0) return false;
			$bnnNum--;
			$book_w=$("#recomm_book").width(); //1003
			$("#book_frame").animate({left:0},300,function(){
				$("#book_roll img").attr("src","images/state_out.gif");
				$("#book_roll img").eq($bnnNum).attr("src","images/state_over.gif");
			});
		});
		// **FM**
		// $(".prev").click(function(){
		// 	if($bnnNum<=0) return false;
		// 	$bnnNum--;
		// 	$book_w=$("#recomm_book").width();
		// 	$("#book_frame").animate({left:-$book_w*$bnnNum},300,function(){
		// 		$("book_roll img").attr("src","images/state_out.gif");
		// 		$("book_roll img").eq($bnnNum).attr("src","images/state_over.gif");
		// 	});
		// });
    // *탭메뉴*
    $(".t1 a, .t2 a").bind("focus click",function(e){
    	e.preventDefault();
    	$(".item1, .item2").hide();
    	$(this).parent().next().show();
    	$("#newbooks-news h2 img").each(function()
    						// tihs는 원래 이벤트를 찾아가는것이맞다 
    						// 근데 each를 만네게되면 그앞에있는걸로 간다.
    	{
    		$(this).attr("src",$(this).attr("src").replace("_over.gif",".gif"));
													//_이거은 무슨 글자가와도 상관없다는뜻.
    	});
    	$btnImg=$(this).children("img");
    	$btnImg.attr("src",$btnImg.attr("src").replace(".gif","_over.gif"))
    });

});