<?php
include_once "./config.php";
$cat_one_id = $_GET['cat_one_id'];
$page = $_GET['page'];
$line = $_GET['line'];
$startLine = ($page-1) * $line;
$link = mysqli_connect($path['host'],$path['user'],$path['pwd'],$path['dbname'],$path['port']);
$sql = "SELECT * FROM `goods` WHERE `cat_one_id`='{$cat_one_id}' LIMIT {$startLine}  , {$line}";
$request=mysqli_query($link,$sql);
$arr=mysqli_fetch_all($request,MYSQLI_ASSOC);

$sqlAll = " SELECT  COUNT(*) as `num` FROM `goods` WHERE `cat_one_id`='{$cat_one_id}' ";
$stmtAll = mysqli_query($link,$sqlAll);
$numArrr = mysqli_fetch_assoc($stmtAll);
$row = $numArrr['num'];
$sumPage = ceil($row/$line);
for($i=0;$i<=count($arr)-1;$i++){
    $arr[$i]['row'] = $row;
    $arr[$i]['sumPage'] = $sumPage;
    $arr[$i]['page'] = $page;
}
echo json_encode($arr);

  