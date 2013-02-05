<?php
namespace Engine;

use Twig_Environment;
use Twig_Template;
use Twig_Loader_String;
use Twig_Autoloader;
use Exception;
use Twig_Loader_FleetingFilesystem;
use Engine\Backend\Factory;
use Slim\Extras\Views\Twig;

/*
 * User: Benjamin Legrand
 * Date: 06/12/12
 * Time: 21:52
 * 
 */
class Compiler
{
    protected
        $twig,
        $slim,
        $loader,
        $data,
        $factory;

    function __construct(){
        echo "Initialisation de Twig";
        $twig = $this->initializeTwig();

        //modele de l'index des maquettes
        $this->factory    =  new Engine\Factory(__DIR__.'../../public/data/');

        $layouts    = $this->factory->getData('maquettes/gabarits');
        $pages      =  $this->factory->getData('pages');
        $commons    =  $this->factory->getData('commons');


        //pour chaque page définie dans pages.json
        foreach ($pages as $key => $value)
        {

            $template   = $twig->loadTemplate("$key.twig");
            $render     = $template->render(array('data' => 'earth'));

            $data = array();

            //pour chaque clé définie dans le tableau data
            foreach ( $value['data'] as $datakey ) {
                //à récupérer dans /etremarin/*.json
                //on mets les données dans un tableau result.
                $data["$datakey"] = $this->factory->getData("etremarin/$datakey");

            }
            try
            {

            // Clear caches
            Twig_Template::clearCache();

            //on charge les données de la page correspondante
            $template = $twig->loadTemplate("../html/$key.twig");

            $rendered = $template->render(array(
                'page'   => $value,
                'data' => $data,
                'commons'=>$commons
            ));

            file_put_contents(__DIR__.'/../public/'.$key.'.html', $rendered);

            }
                // Catch any errors
            catch (Exception $e)
            {
                echo "\033[31mE {$e->getRawMessage()} ({$e->getTemplateFile()}:{$e->getTemplateLine()})\033[0m\n";
            }
        }
    }

    private function initializeTwig(){
        Twig::$twigDirectory =  __DIR__.'../vendor/twig/twig/lib/Twig/';

        $loader = new Twig_Loader_FleetingFilesystem(__DIR__.'../html');
        $twig = new Twig_Environment($loader);

        return $twig;
    }
    private function compiler(){

    }
}


