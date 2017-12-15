<?php

require_once 'enConf.php';

class enHelper
{
	protected $conf; // Must be overrided at platform level
	
	public function LocalizeKey($key, $locale = 'en_US')
	{
		// TODO: Perform caching on localization file!
		
		$path = $this->conf->pathSubdir . "localization/{$locale}.json";
		if( !file_exists($path) )
		{
			return $key;
		}
		$json = file_get_contents($path);
		if( is_null($json) )
		{
			return $key;
		}
		$localization = json_decode($json, true);
		if( isset($localization[$key]) )
		{
			return $localization[$key];
		}
		return $key;
	}
	
	public static function CreateOutput($data)
	{
		$response['response'] = $data;
		return( json_encode($response) );
	}
	
	public static function CreateErrorOutput($message = null)
	{
		$response['error'] = array();
		if($message !== null)
		{
			$response['error']['message'] = $message;
		}
		return( json_encode($response) );
	}

	public static function GenerateGuid()
	{
		return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
		// 32 bits for "time_low"
		mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),

		// 16 bits for "time_mid"
		mt_rand( 0, 0xffff ),

		// 16 bits for "time_hi_and_version",
		// four most significant bits holds version number 4
		mt_rand( 0, 0x0fff ) | 0x4000,

		// 16 bits, 8 bits for "clk_seq_hi_res",
		// 8 bits for "clk_seq_low",
		// two most significant bits holds zero and one for variant DCE1.1
		mt_rand( 0, 0x3fff ) | 0x8000,

		// 48 bits for "node"
		mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
		);
	}
	
	public static function crc32c($str)
	{
		$poly_reflected = 0x82F63B78;
		$reg = 0xFFFFFFFF;

		$n = strlen($str);
		$zeros = $n < 4 ? $n : 4;

		// xor first $zeros=min(4,strlen($str)) bytes into the register
		for($i = 0; $i < $zeros; $i++)
		{
			$reg ^= ord($str{$i}) << $i * 8;
		}

		// now for the rest of the string
		for($i = 4; $i < $n; $i++)
		{
			$next_char = ord($str{$i});
			for($j = 0; $j < 8; $j++)
			{
				$reg = ( ($reg >> 1 & 0x7FFFFFFF) | ($next_char >> $j & 1) << 0x1F ) ^ ($reg & 1) * $poly_reflected;
			}
		}

		// put in enough zeros at the end
		for($i = 0; $i < $zeros * 8; $i++)
		{
			$reg = ($reg >> 1 & 0x7FFFFFFF) ^ ($reg & 1) * $poly_reflected;
		}

		return ~$reg;
	}

	public static function LogMessage($logStream, $message)
	{
		global $logFiles;
		
		$time = date('Y-m-d H:i:s');
		$logMessage = "[{$time}]: {$message}\n";
		
		if( !isset($logFiles[$logStream]) ) $logStream = LOG_ERROR;
		
		$performChmod = !file_exists($logFiles[$logStream]);
		file_put_contents($logFiles[$logStream], $logMessage, FILE_APPEND | LOCK_EX);
		if($performChmod)
		{
			chmod($logFiles[$logStream], 0764);
		}
	}
	
	public static function CORSHeaders()
	{
		// Allow from any origin
		if( isset($_SERVER['HTTP_ORIGIN']) )
		{
			header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
			header('Access-Control-Allow-Credentials: true');
			header('Access-Control-Max-Age: 86400');    // cache for 1 day
		}

		// Access-Control headers are received during OPTIONS requests
		if($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
		{
			if( isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']) )
			{
				header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
			}

			if( isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']) )
			{
				header('Access-Control-Allow-Headers: ' . $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']);
			}
		}
	}
	
	public static function Chmodr($path, $filemode)
	{
		if( !is_dir($path) )
			return chmod($path, $filemode);

		$dh = opendir($path);
		while( ($file = readdir($dh)) !== false )
		{
			if($file != '.' && $file != '..')
			{
				$fullpath = $path . '/' . $file;
				if( is_link($fullpath) )
					return false;
				elseif( !is_dir($fullpath) && !chmod($fullpath, $filemode) )
						return false;
				elseif( !enHelper::Chmodr($fullpath, $filemode) )
					return false;
			}
		}
		closedir($dh);
		
		if( chmod($path, $filemode) )
			return true;
		else
			return false;
	}

	public static function Chownr($path, $owner)
	{
		if( !is_dir($path) )
			return chown($path, $owner);

		$dh = opendir($path);
		while( ($file = readdir($dh)) !== false )
		{
			if($file != '.' && $file != '..')
			{
				$fullpath = $path . '/' . $file;
				if( is_link($fullpath) )
					return false;
				elseif( !is_dir($fullpath) && !chown($fullpath, $owner) )
					return false;
				elseif( !enHelper::Chownr($fullpath, $owner) )
					return false;
			}
		}
		closedir($dh);

		if( chown($path, $owner) )
			return true;
		else
			return false;
	}

	public static function Chgrpr($path, $group)
	{
		if( !is_dir($path) )
			return chgrp($path, $group);

		$dh = opendir($path);
		while( ($file = readdir($dh)) !== false )
		{
			if($file != '.' && $file != '..')
			{
				$fullpath = $path . '/' . $file;
				if( is_link($fullpath) )
					return false;
				elseif( !is_dir($fullpath) && !chgrp($fullpath, $group) )
					return false;
				elseif( !enHelper::Chgrpr($fullpath, $group) )
					return false;
			}
		}
		closedir($dh);

		if( chgrp($path, $group) )
				return true;
		else
				return false;
	}
}
