$(document).ready(function() {

	// 今日の日付データ取得
	var myDate = new Date(); 
	// 年を取得 
	var myYear = myDate.getFullYear(); 
	 // 月を取得(0月～11月)
	var myMonth = myDate.getMonth()+1;

	// 今日の日付を退避
	var myToday = myDate.getDate(); 
	// 日付を'１日'に変えて'１日'の曜日を取得 
	myDate.setDate(1);
	var myWeek = myDate.getDay();
	
	// 月の最終日を取得
	var lastDay = new Date(myYear, myMonth, 0); 
 	var myLastDay = lastDay.getDate();
	
	// テーブルの行数
	var myTableLowNum = Math.ceil(myWeek+myLastDay)/7;


	// 全体ページレイアウト変更
	$("BODY").css({"font-size":"xx-large","table-layout":"fixed"});

	// タイトル
  	$("h1").text("Calendar" + " " + myYear + "年" + myMonth + "月");

	// ヘッダー
  $('#calendar THEAD').append(
    $("<tr>").append(
      $("<th>").text("Sun").css('color', 'red').attr('class', 'col-xs-1'),
      $("<th>").text("Mon").attr('class', 'col-xs-1'),
      $("<th>").text("Tue").attr('class', 'col-xs-1'),
      $("<th>").text("Wed").attr('class', 'col-xs-1'),
      $("<th>").text("Thu").attr('class', 'col-xs-1'),
      $("<th>").text("Fri").attr('class', 'col-xs-1'),
      $("<th>").text("Sat").css('color', 'blue').attr('class', 'col-xs-1')
    ).css({"background-color":"#7fffbf","font-size":"x-large"})
  );

	// カレンダー
	// 日付を表す変数
	var calendarDay = 0;
	for(var i = 0; i < myTableLowNum; i++) {
		
		var tr = $("<tr>");
		
		for(var j = 0; j < 7; j++){

			//月初を指定
			if(i == 0 && j == myWeek){
				calendarDay = 1;
		    }
			
			if(calendarDay == 0 || calendarDay > myLastDay){
				//1日以前、月末以降のセルにスペース登録
				var td = $("<td>").text("　");
			} else {
				//日を登録
				var td = $("<td>").text(calendarDay++).attr('class', 'calClass');
			}
			
			if(calendarDay == myToday + 1){
				//本日の背景色変更
				 $(td).css('background-color','yellow');
			}
			
			//土日祝日の文字色変更
			if(j == 0){
				 $(td).css('color','red');
			} else if(j == 6) {
				 $(td).css('color','blue');
			}
			tr.append(td);
		}
		$('#calendar TBODY').append(tr);
	}
	
	//クリックした日付を格納する変数
	var clickDate;
	
	// 日付クリック時メッセージ
	$('.calClass').on('click', function (){
	
		// クリックした日付を格納
		clickDate = $(this).html();
		
		// 選択日付の曜日を取得 
		myDate.setDate(clickDate);
		myWeek = myDate.getDay();
		
		switch(myWeek){
			case 0: myWeek = "日";
				break;
			case 1: myWeek = "月";
				break;
			case 2: myWeek = "火";
				break;
			case 3: myWeek = "水";
				break;
			case 4: myWeek = "木";
				break;
			case 5: myWeek = "金";
				break;
			case 6: myWeek = "土";
				break;
		}
		
		// メッセージを表示
		alert(myYear + "/" + myMonth + "/" + clickDate + "(" + myWeek + ")" + "がクリックされました。");
	});

	var showOnloadMessage = function() {
		// alert("読み込みました.");
	}
	
  // ----- Initialize.

  showOnloadMessage();
});
