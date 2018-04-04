<?php
  // requires php5
  
  //gets the content passed through POST method. 
  $img = $_POST['imgBase64'];
  
  //I actually don't know why people do this but...
  $img = str_replace('data:image/png;base64,', '', $img);
  $img = str_replace(' ', '+', $img);
  $data = base64_decode($img);

  //saves the file in uique filename
  define('UPLOAD_DIR', 'letters/');
  $file = UPLOAD_DIR . uniqid() . '.png';
  $success = file_put_contents($file, $data);
  print $success ? $file : 'Unable to save the file.';
?>