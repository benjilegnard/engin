<?php

namespace Engine\Backend;;

use Slim\Slim;
use Engine\Models\User;

class Authenticator
{

  function authenticateForRole($role = 'member' ) {
    return function () use ( $role ) {
        $user = User::fetchFromDatabaseSomehow();
        if ( $user->belongsToRole($role) === false ) {
            $app = Slim::getInstance();
            $app->flash('error', 'Login required');
            $app->redirect('/login');
        }
    };
}
    public function __construct(){
        $app = new Slim();
        $app->get('/admin', authenticateForRole('admin'), function () {
            //Display admin control panel
        });
    }
}