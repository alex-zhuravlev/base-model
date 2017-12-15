<?php

require_once 'engine/enDbTable.php';

class CDbTableNodes extends enDbTable
{
	public function __construct()
	{
		$this->m_TableName = 'nodes';
		
		parent::__construct();
	}
	
	public function SelectRow($id)
	{
		$query = "SELECT * FROM {$this->m_TableName} WHERE id={$id};";

		return $this->m_Database->Query($query)[0];
	}
}