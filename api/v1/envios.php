<?php 

$app->get('/envios', function() use ($app) {
    $response = array();
    $db = new DbHandler();
    $envios = $db->getMultipleRecord("select * from CabecerasEnvios");
    if ($envios != NULL) {
        $response['status'] = "success";
        $response['message'] = 'OK.';
        $response['envios'] = $envios;
    }else {
            $response['status'] = "error";
            $response['message'] = 'Not found sends';
        }
    echoResponse(200, $response);
});
?>