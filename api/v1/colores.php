<?php 

$app->get('/colores', function() use ($app) {
    $response = array();
    $db = new DbHandler();
    $colores = $db->getMultipleRecord("select * from Colores");
    if ($colores != NULL) {
        $response['status'] = "success";
        $response['message'] = 'OK.';
        $response['colores'] = $colores;
    }else {
            $response['status'] = "error";
            $response['message'] = 'Not found colours';
        }
    echoResponse(200, $response);
});
?>