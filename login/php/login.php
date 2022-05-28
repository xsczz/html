<?php

// 接收提交参数
$account = $_POST['account'];
$password = md5($_POST['password']);

// 数据库连接配置
$dbHost = '127.0.0.1';
$dbName = 'demo';
$dbUser = 'root';
$dbPass = 'chenshuo90909';

// 连接数据库
$db = new PDO("mysql:host=$dbHost;dbname=$dbName" , $dbUser, $dbPass);
// 设置数据库编码
$db->query("set names utf8mb4");

// 发送查询语句
$query = "SELECT * FROM user WHERE account = '$account' AND password = '$password'";
$stmt = $db->query($query, PDO::FETCH_ASSOC);
$result = $stmt->fetch();

// 查询结果判断
$success = is_array($result) ? true : false;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录结果</title>
</head>
<body>
    <h1><?php echo $success ? '成功  - '.$result['name'] : '失败'; ?></h1>
</body>
</html>
