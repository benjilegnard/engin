<?php
/**
 * @namespace Engine/Models/Maquettes
 */
namespace Engine\Models;
/**
 * Layout/Gabarit, généralement un écran à intégrer à partir de créas.
 * Accessible au public,
 *
 */
use Engine\Backend\Model;

class Layout extends Model
{
    static $accessible_attrs = array('url_key','title','caption','version');

}
