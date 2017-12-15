<?php

require_once 'enDatabase.php';
require_once 'enDbQuery.php';

abstract class enDbTable
{
	protected $m_Database = null;
	protected $m_TableName = null;
	
	public function __construct()
	{
		global $dbConf;
		$this->m_Database = new enDatabase($dbConf);
	}

	public function SelectTable()
	{
		$query = "SELECT * FROM {$this->m_TableName} ORDER BY id;";

		return $this->m_Database->Query($query);
	}
	
	public function UpdateRow(array $updateList, $id)
	{
		$dbQuery = new enDbQuery();
		$dbQuery->update($this->m_TableName, $updateList)->where('id', '=', $id);
		
		return $this->m_Database->Query( $dbQuery->getQuery() );
	}
}
