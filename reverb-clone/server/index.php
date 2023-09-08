<?php

require 'vendor/autoload.php';

$app = new \Slim\App;

require_once 'routes/userRoutes.php';
require_once 'routes/productRoutes.php';
require_once 'routes/orderRoutes.php';

$app->run();
