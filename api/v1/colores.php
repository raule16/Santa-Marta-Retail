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

$app->post('/colores/nuevo', function() use ($app){
    $response = array();    
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('nombre', 'colorfs'),$r->color);
    $db = new DbHandler();
    $nombre= $r->color->nombre;
    $colorfs=$r->color->colorfs;
    $colordescriptivo=$r->color->colordescriptivo;
    $tabble_name = "Colores";
    $column_names = array('nombreColor', 'colfsColor', 'colorDescriptivo');
    $result = $db->insertIntoTable($r->color, $column_names, $tabble_name);
            
    if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Color creado correctamente";
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Error al crear el color. Intentalo de nuevo";
            echoResponse(201, $response);
        }   
});
?>