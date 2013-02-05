<?php
/**
 * @namespace Engine/Models
 */
namespace Engine\Models;
/**
* User, histoire de stocker quelques identifiants passwords.
*
* @see :
*
* @author : Benjamin Legrand | Sogeti
*
*/
class User extends \Engine\Backend\Model
{
    static $accessible_attrs = array('email_address','login_name','hash_pass');
}