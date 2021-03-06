<?php
class Autoload
{
    private static $_instance = NULL;
    public static function charger(){
        if (null !== self::$_instance){
            throw new RuntimeException(sprintf('%s is already started',__CLASS__));
        }
        self::$_instance = new self();

        if(!spl_autoload_register(array(self::$_instance, '_autoload'), false)){
            throw new RuntimeException(sprintf('%s : Could not start the autoload', __CLASS__));
        }
    }

    public static function  shutDown(){
        if(null !== self::$_instance) {
            if(!spl_autoload_unregister(array(self::$_instance,'_autoload'))){
                throw new RuntimeException('Could not stop the autoload');
            }
            self::$_instance = null;
        }
    }

    private static function _autoload($class){
        global $rep;
        $fileName = $class.'.php';
        $dir = array('modele/','./','config/','controleur/','vues');
        foreach ($dir as $d){
            $file = $rep.$d.$fileName;
            if(file_exists($file)){
                include $file;
            }
        }
    }
}
?>
