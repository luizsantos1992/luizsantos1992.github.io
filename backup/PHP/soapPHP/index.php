<head>
<meta charset="UTF-8">
</head>
<?php

// $orig_error_reporting = error_reporting();
// error_reporting(0);
http://uat.satelital.com.br:8080/integrationservice/IntegrationService.v4.svc

$soap = new SoapClient("http://uat.satelital.com.br:8080/integrationservice/IntegrationService.v4.svc?wsdl",
   array('soap_version' => 'SOAP_1_2',
         'location'=>'http://uat.satelital.com.br:8080/integrationservice/IntegrationService.v4.svc'));

//error_reporting($orig_error_reporting);

$response = $soap->GetProducts(array('applicationId'=>"9DA1394C-6331-4071-AECC-37B3ADBA70FF",'campaignId'=>"BRAFI", 'page' => "1")) ;
//$response = $soap->__getTypes();
//print_r($response);
$json_encode = json_encode($response->GetProductsResult,JSON_UNESCAPED_UNICODE);
echo $json_encode;

?>