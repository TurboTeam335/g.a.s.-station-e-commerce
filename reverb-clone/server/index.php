<?php

use Slim\Factory\AppFactory;

require 'vendor/autoload.php';

// Instantiate App
$app = AppFactory::create();

require_once 'routes/userRoutes.php';
require_once 'routes/productRoutes.php';
require_once 'routes/orderRoutes.php';

// Add Routing Middleware
$app->addRoutingMiddleware();

// Add Error Middleware
$errorMiddleware = $app->addErrorMiddleware(true, true, true);

$app->run();
