<?php

namespace Engine\Backend;

use __;
use Exception;

/*
 * User: Benjamin Legrand
 * Date: 23/11/12
 * Time: 18:04
 * 
 */
class Factory
{
    protected $base_path;

     public function __construct( $data_path="../data" )
    {
        $this->base_path = "$data_path";
    }

    /**
     * @static
     * @param $file le chemin relatif à /data/ du fichier json a récupérer
     * @return array|mixed
     */
    public function getData($file){
        $data = array();
        try
        {
            $data = json_decode(
                file_get_contents( $this->base_path.$file.'.json')
            );
        }
        catch (Exception $e)
        {
            $data = array(
                "error" => array(
                    "message"   => $e->getMessage(),
                    "code"      => $e->getCode()
                )
            );
        }
        return $data;
    }


}
