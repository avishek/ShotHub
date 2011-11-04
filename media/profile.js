/* 
Copyright 2011 Shothub - All Rights Reserved

This code, and all derivative work, is the exclusive property of Shothub. and may not be used without Shuthub's authorization

Author:Kenny Khek
*/   

function populatedropdown(dayfield, monthfield, yearfield){
  var today=new Date();
  var dayfield=document.getElementById('dayfield');
  var monthfield=document.getElementById('monthfield');
  var yearfield=document.getElementById('yearfield');
  for (var i=1; i<31; i++) {
    dayfield.options[i]=new Option(i, i)
  }
  dayfield.options[today.getDate()]=new Option(today.getDate(), today.getDate(), true, true)
  var monthtext=new Array(12);
  monthtext[0]="January";
  monthtext[1]="February";
  monthtext[2]="March";
  monthtext[3]="April";
  monthtext[4]="May";
  monthtext[5]="June";
  monthtext[6]="July";
  monthtext[7]="August";
  monthtext[8]="September";
  monthtext[9]="October";
  monthtext[10]="November";
  monthtext[11]="December";
  for (var m=0; m<12; m++) {
    monthfield.options[m]=new Option(monthtext[m], monthtext[m]);
  }
  monthfield.options[today.getMonth()]=new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true);
  var thisyear=today.getFullYear();
  for (var y=0; y<65; y++){
    yearfield.options[y]=new Option(thisyear, thisyear);
    thisyear-=1;
  }
  yearfield.options[0]=new Option(today.getFullYear(), today.getFullYear(), true, true)
}

$(function() {

  populatedropdown("daydropdown", "monthdropdown", "yeardropdown");

});