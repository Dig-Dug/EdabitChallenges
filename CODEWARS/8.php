<?php
//join strings from array
function smash(array $words): string
{
    return join(" ", $words);
}
//sum elements in array
function sum(array $a): float
{
    return array_sum($a);
}
//Replace vowels in string with something else
function replace(string $s): string
{
    $vowels = array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
    return $onlyExclamation = str_replace($vowels, "!", $s);
}

function replaceOther(string $s): string
{
    return preg_replace('/[aeiou]/i', "!", $s);
}

function remove_exclamation_marks($string)
{
    return preg_replace('/[!]/i', "", $string);
}
//Even or Odd

function even_or_odd(int $n): string
{
    return $n % 2 == 0 ? "Even" : "Odd";
}
//remove min and max, then sum array
function sumArray($array)
{
    /*$min = min($array);
     $max = max($array);*/
    sort($array);
    array_shift($array);
    array_pop($array);
    $sum = array_sum($array);
    $arrlength = count($array);
    for ($x = 0; $x < $arrlength; $x++) {
        echo $array[$x];
        echo "<br>";
    }
    return $sum;
}

function sumArrayBetter($array)
{
    return array_sum($array) - max($array) - min($array);
}

//turn string into number
function stringToNumber($str)
{
    $num = (int)$str;
    return $num;
    //return (int)$str;
}
//The opposite
function numberToString($num)
{
    return (string)$num;
}
//Double each element in array
function maps($x)
{
    foreach ($x as $n) {
        $nn[] = $n * 2;
    }
    return $nn;
}
//Count the monkeys
function monkeyCount($n)
{
    $arr = array();
    for ($a = 1; $a <= $n; $a++) {
        array_push($arr, $a);
    }
    return $arr;
    //OR use Range
    return range(1, $n); //<-------------THIS
}

//Sort array and multiply elements in order
function grow($a)
{
    sort($a);
    return array_product($a);
}


//Counting sheep, how many  true booleans in array
function countSheep($arr)
{
    return count(array_filter($arr));
}
//Repeat string
function repeatStr($n, $str)
{
    return str_repeat($str, $n);
}
//Average number
function get_average($a)
{
    $c = count($a);
    $s = array_sum($a);
    $ave = $s / $c;
    return (int)$ave;
}
//OR
return array_sum($a) / count($a);
//Sum of positives
function positive_sum($arr)
{
    return array_sum(array_filter($arr, function ($e) {
        return $e > 0;
    }));
}
//reverse string
function solution($str)
{
    return strrev($str);
}
//Remove every second element
function removeEveryOther($array)
{
    return array_filter($array, function ($i) {
        return !($i % 2);
    }, ARRAY_FILTER_USE_KEY);
}
//Sum mixed array
function sum_mix($a)
{
    return array_sum($a);
}

//ääääääääääääääääääääää
function combat($h, $d)
{
    return $h < $d ? 0 : $h - $d;
}
//Format 2 decimal places
function twoDecimalPlaces($n)
{
    return round($n, 2);
}
//Remove the time
function shortenToDate($l)
{
    $e = explode(" ", $l);
    array_pop($e);
    $ee = implode(" ", $e);
    return trim($ee, ",");
}
//Much better
function shortenToDateBetter($longDate)
{
    return explode(',', $longDate)[0];
}
//Better than the average
function betterThanAverage($them, $your)
{
    return array_sum($them) / count($them) > $your ? false : true;
}
