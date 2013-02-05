<?php
namespace Engine\Backend;

use Slim\Slim;

class App extends Slim
{
    public function mount($controller)
    {
        if (! is_object($controller)) {
            throw new \InvalidArgumentException('Controller must be an object.');
        }

        if (! method_exists($controller, 'connect')) {
            throw new \BadMethodCallException('Controller must have a connect method.');
        }

        return $controller->connect();
    }
}


/**
 * Controller, permets d'organiser les routes dans des objets.
 */
abstract class Controller
{
    /**
     * @var $app Slim
     */
    protected $app, $request, $response, $environment, $log;

    public function __construct()
    {
        $this->app          = Slim::getInstance();
        $this->request      = $this->app->request();
        $this->response     = $this->app->response();
        $this->environment  = $this->app->environment();
        $this->log          = $this->app->getLog();
    }

}

