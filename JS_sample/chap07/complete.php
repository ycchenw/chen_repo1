<?php
try {
  $db = new PDO('mysql:dbname=recipe;host=127.0.0.1;charset=utf8', 
    'jsusr', 'jspass');
  //�ھڿ�J�ȡA�H�e��@�P���覡�j�Mkeyword��檺value��
  $stt = $db->prepare('SELECT * FROM keywords WHERE value LIKE ?');
  $stt->bindValue(1, $_GET['term'].'%', PDO::PARAM_STR);
  $stt->execute();
  //�HJSON�榡��X���G��
  print(json_encode($stt->fetchAll(PDO::FETCH_ASSOC)));
} catch(PDOException $ex) {
  die($ex->getMessage());
}
