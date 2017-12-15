<?php

require_once 'enHelper.php';

class enDatabase
{
	private $m_Conf = array();
	private $m_Connection = null;

	public function __construct(array $conf)
	{
		$this->m_Conf = $conf;
		
		if( !$this->Connect() )
		{
			enHelper::LogMessage( LOG_ERROR, 'mysql_connect failed with message: ' . mysql_error() );
			die( ebHelper::CreateErrorOutput(0, 'DB Connect') );
		}
	}
 
	public function __destruct()
	{
		mysql_close($this->m_Connection);
	}
	 
	public function __get($property)
	{
		if( property_exists($this, $property) )
		{
			return $this->$property;
		}
	}
	
	public function Query($query)
	{
		$result = mysql_query($query, $this->m_Connection);
		if($result === false)
		{
			enHelper::LogMessage( LOG_ERROR, 'MySQL error: ' . mysql_error() );
			return false;
		}
		if($result === true) // For non-Select queries
		{
			return $result;
		}

		$aDataList = array();
		while( $row = mysql_fetch_assoc($result) )
		{
			$aDataList[] = $row;
		}
		
		mysql_free_result($result);
		
		return $aDataList;
	}
	
	public function GetLastInsertId()
	{
		$id = mysql_insert_id();
		if($id === false)
		{
			enHelper::LogMessage( LOG_ERROR, 'MySQL error: ' . mysql_error() );
			return false;
		}
		return $id;
	}
	
	protected function Connect()
	{ 
		$this->m_Connection = @mysql_connect($this->m_Conf['host'].':'.$this->m_Conf['port'], $this->m_Conf['user'], $this->m_Conf['password']);
		if($this->m_Connection === false)
		{
			enHelper::LogMessage( LOG_ERROR, 'MySQL error: ' . mysql_error() );
			return false;
		}
		if( !mysql_set_charset('utf8', $this->m_Connection) )
		{
			enHelper::LogMessage( LOG_ERROR, 'MySQL error: ' . mysql_error() );
			return false;
		}
		if( !mysql_select_db($this->m_Conf['name']) )
		{
			enHelper::LogMessage( LOG_ERROR, 'MySQL error: ' . mysql_error() );
			return false;
		}
		return true;
	}
}

