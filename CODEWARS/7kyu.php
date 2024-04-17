//Vowel Count Return the number (count) of vowels in the given string.
<?php 
function getCount($str) {
  $vowelsCount = 0;
  // enter your magic here
  preg_match_all('/[aeiou]/i', $str,$vowelsCount);
  return count($vowelsCount[0]);
}

//return every word to uppercase
function toJadenCase($e) 
{
  echo(ucwords($e));
  return ucwords($e);
}
