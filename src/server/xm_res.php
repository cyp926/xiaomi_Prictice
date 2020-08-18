<?php
  include_once './config.php';
  $userName=$_POST['userName'];
  $userPwd = $_POST['userPwd'];
  $link=mysqli_connect($path['host'],$path['user'],$path['pwd'],$path['dbname'],$path['port']);
  $sql = "INSERT INTO `user`(`username`,`userpwd`)  VALUES('{$userName}' , '{$userPwd}')";
  $result = mysqli_query($link, $sql);

  if($result == true){
    // 返回值是1表示成功
    echo json_encode(['res'=>1,'msg'=>'注册成功']);
  }else{
      // 返回值是0表示失败
      echo json_encode(['res'=>0,'msg'=>'用户名重复,注册失败']);
  }

