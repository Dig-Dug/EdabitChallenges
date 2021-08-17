function calcAge(age) {
   //A// const calcAge = age => age * 365;
  //B  return age * 365;
  /*C  let ageInDays = (age*365)>=0 && typeof(age*365) == 'number' ? (age*365) : []
	   return ageInDays*/
}
   
function howManySeconds(hours) {
   let seconds = 60;
   let min = seconds * 60;
   let hour = min * 2;
   let hour1 = min *10;
   let hour2 = min *24;
   let hour3 = min *36;
 // console.log(hour , min, seconds,"www");
 // console.log(hour, hour1,hour2,hour3);
  /* switch(hour, hour1,hour2,hour3){
      case hour: return hour; 
      case hour1: return hour1; 
      case hour2: return hour2; 
      case hour3: return hour3; 

   }*/
return hour , hour1 , hour2 , hour3;
}
const {hour, hour1, hour2, hour3} = howManySeconds()
//let hourx = howManySeconds();
/* Write a function that converts hours into seconds.
	   60 seconds in a minute, 60 minutes in an hour
	   1 hour = 60 min 
		 1 min = 60 sec
       1 hour = 3600 secs  */
/*
2 h (120 min (min *  sec)) * 10()
Test.assertEquals(howManySeconds(2), 7200)
Test.assertEquals(howManySeconds(10), 36000) 10 * 60 = 600// 600 * 60
Test.assertEquals(howManySeconds(24), 86400)
Test.assertEquals(howManySeconds(36), 129600)
 */
   
  
 /*
   let secs = 360;
   let min = secs * 360;
	let hour = secs * 360;
	hours = hour;
   hours2 = (secs * 10)* 2;
   hours3 = (secs * 100);
   hours4 = (secs * 100) * 24;
	console.log(hours, hours2,hours3, hours4,"yes");
	return [hours, hours2, hours3,hours4];
    */  
  
   
