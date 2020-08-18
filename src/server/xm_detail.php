<?php
include_once "./config.php";
$goods_id=$_POST['goods_id'];
$link = mysqli_connect($path['host'],$path['user'],$path['pwd'],$path['dbname'],$path['port']);
$sql="SELECT * FROM `goods` WHERE `goods_id`={$goods_id}";
$quest = mysqli_query($link,$sql);
$arr=mysqli_fetch_assoc($quest);
echo json_encode($arr);
