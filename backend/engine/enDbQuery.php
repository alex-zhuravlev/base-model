<?php

class enDbQuery
{
	private $_query = '';
	private $_columnQuery = '';
	private $_insertValueQuery = '';
	private $_updateValueQuery = '';
	private $_fromQuery = '';
	private $_subjectQuery = '';
	private $_intoQuery = '';
	private $_joinQuery = '';
	private $_whereQuery = '';
	private $_orderQuery = '';
	private $_quoteExceptions = array('NOW()');
	private $_sqlFunctions = array('COUNT');
		
	public function __construct()
	{
		
	}
	
	public function select()
	{
		$this->_query = 'SELECT';
		$this->_columnQuery = '';
		$this->_fromQuery = '';
		$this->_joinQuery = '';
		$this->_whereQuery = '';
		$this->_orderQuery = '';
		return $this;
	}

	/*
	 *  $table: string(name) | array(alias => name);
	 *  $columns: array(alias => name) | array(name) | array(alias => name, name) | string('*')
	 */
	public function from($table, array $columns = null)
	{
		$t = $this->_readTableName($table);

		if($columns === null) {
			$columns = array('*');
		}
		$this->_appendColumns($table, $columns);

		$this->_fromQuery = "FROM {$t['name']}";
		if(!empty($t['alias'])) {
			$this->_fromQuery .= " AS {$t['alias']}";
		}
		return $this;
	}

	public function join($joinType, $table, $condition, $columns = null)
	{
		$t = $this->_readTableName($table);
		$this->_appendColumns($table, $columns);
		$this->_joinQuery .= "{$joinType} JOIN {$t['name']} ";
		if(!empty($t['alias'])) {
			$this->_joinQuery .= "AS {$t['alias']} ";
		}
		$this->_joinQuery .= "ON {$condition}";
		return $this;
	}
	
	public function where($column, $condition, $value)
	{
		if($condition == 'IN') {
			$value = $this->_in($value);
		} else {
			$value = $this->_quoteInto($value);
		}
		if(empty($this->_whereQuery)) {
			$this->_whereQuery = "WHERE {$column} {$condition} {$value}";
		} else {
			$this->_whereQuery .= " AND {$column} {$condition} {$value}";
		}
		return $this;
	}

	public function orWhere($column, $condition, $value)
	{
		if($condition == 'IN') {
			$value = $this->_in($value);
		} else {
			$value = $this->_quoteInto($value);
		}
		if(empty($this->_whereQuery)) {
			$this->_whereQuery = "WHERE {$column} {$condition} {$value}";
		} else {
			$this->_whereQuery .= " OR {$column} {$condition} {$value}";
		}
		return $this;
	}

	public function order($column, $order = 'ASC')
	{
		$this->_orderQuery = "ORDER BY {$column} {$order}";
		return $this;
	}

	/*
	 * $table: string
	 * $data: array(column1 => value1, ...) | array(value1, ...)
	 */
	public function insert($table, array $data)
	{
		$this->_query = 'INSERT';
		$this->_intoQuery = '';
		$this->_columnQuery = '';
		$this->_insertValueQuery = '';
		
		$i = 0;
		$isSingleValueArray = false;
		foreach($data as $columnName => $columnValue) {
			if(is_numeric($columnName)) {
				$isSingleValueArray = true;
			}
			$this->_columnQuery .= $columnName;
			$this->_insertValueQuery .= $this->_quoteInto($columnValue);
			if($i++ < count($data) - 1) {
				$this->_columnQuery .= ", ";
				$this->_insertValueQuery .= ", ";
			}
		}
		if($isSingleValueArray) {
			$this->_columnQuery = '';
		} else {
			$this->_columnQuery = '(' . $this->_columnQuery . ')';
		}
		$this->_insertValueQuery = 'VALUES (' . $this->_insertValueQuery . ')';
		$this->_intoQuery = "INTO {$table}";
		return $this;
	}

	/*
	 * $table: string
	 * $data: array(array(column1 => value1, ...), ...) | array(array(value1, ...), ...)
	 */
	public function multiInsert($table, array $data)
	{
		$this->_query = 'INSERT';
		$this->_intoQuery = '';
		$this->_columnQuery = '';
		$this->_insertValueQuery = '';

		$i = 0;
		$isSingleValueArray = false;
		foreach($data[0] as $columnName => $columnValue) {
			if(is_numeric($columnName)) {
				$isSingleValueArray = true;
				break;
			}
			$this->_columnQuery .= $columnName;
			if($i++ < count($data[0]) - 1) {
				$this->_columnQuery .= ", ";
			}
		}
		if($isSingleValueArray) {
			$this->_columnQuery = '';
		} else {
			$this->_columnQuery = '(' . $this->_columnQuery . ')';
		}

		$i = 0;
		foreach($data as $row) {
			$j = 0;
			$insertRowQuery = '';
			foreach($row as $columnName => $columnValue) {
				$insertRowQuery .= $this->_quoteInto($columnValue);
				if($j++ < count($row) - 1) {
					$insertRowQuery .= ", ";
				}
			}
			$this->_insertValueQuery .= '(' . $insertRowQuery . ')';
			if($i++ < count($data) - 1) {
				$this->_insertValueQuery .= ", ";
			}
		}

		$this->_insertValueQuery = 'VALUES ' . $this->_insertValueQuery;
		$this->_intoQuery = "INTO {$table}";
		return $this;
	}

	/*
	 * $table: string(name)
	 */
	public function delete($table)
	{
		$this->_query = 'DELETE';
		$this->_fromQuery = '';
		$this->_whereQuery = '';

		$this->_fromQuery = "FROM {$table}";
		return $this;
	}

	/*
	 * $table: string(name)
	 * $data: array(column1 => value1, ...)
	 */
	public function update($table, array $data)
	{
		$this->_query = 'UPDATE';
		$this->_whereQuery = '';
		$this->_updateValueQuery = '';

		$i = 0;
		foreach($data as $columnName => $columnValue) {

			$this->_updateValueQuery .= $columnName . '=' . $this->_quoteInto($columnValue);
			if($i++ < count($data) - 1) {
				$this->_updateValueQuery .= ", ";
			}
		}

		$this->_subjectQuery = "{$table} SET";
		return $this;
	}

	public function getQuery()
	{
		switch($this->_query) {
			case 'SELECT':
				$this->_query = "{$this->_query} {$this->_columnQuery} {$this->_fromQuery} {$this->_joinQuery} {$this->_whereQuery} {$this->_orderQuery};";
			break;

			case 'INSERT':
				$this->_query = "{$this->_query} {$this->_intoQuery} {$this->_columnQuery} {$this->_insertValueQuery};";
			break;

			case 'DELETE':
				$this->_query = "{$this->_query} {$this->_fromQuery} {$this->_whereQuery};";
			break;

			case 'UPDATE':
				$this->_query = "{$this->_query} {$this->_subjectQuery} {$this->_updateValueQuery} {$this->_whereQuery};";
			break;
		}
		return $this->_query;
	}
	
	private function _quoteInto($value)
	{
		if(in_array($value, $this->_quoteExceptions)) {
			return $value;
		} else {
			$r = "'" . $value . "'";
			return $r;
		}
	}

	/*
	 * $values: array(valq, val2, val3) | string("val1, val2, val3")
	 */
	private function _in($values)
	{
		$inQuery = '';
		if(is_array($values)) {
			$i = 0;
			foreach($values as $value) {
				$inQuery .= $this->_quoteInto($value);
				if($i++ < count($values) - 1) {
					$inQuery .= ", ";
				}
			}
		} else {
			$inQuery = $values;
		}
		$inQuery = '(' . $inQuery . ')';
		return $inQuery;
	}
	
	private function _readTableName($table)
	{
		if(is_array($table)) {
			foreach($table as $k => $v) {
				$tableName = $v;
				$tableAlias = $k;
				break;
			}
		} else {
			$tableName = $table;
			$tableAlias = '';
		}
		return array('name' => $tableName, 'alias' => $tableAlias);
	}

	private function _appendColumns($table, $columns = null)
	{
		if(empty($columns)) {
			return;
		}

		$t = $this->_readTableName($table);

		if($columns[0] == '*') {
			$columns = $this->_getTableColumnNames($t['name']);
		}

		if(!empty($this->_columnQuery)) {
			$this->_columnQuery .= ', ';
		}

		$i = 0;
		foreach($columns as $alias => $column) {
			if(is_numeric($alias)) {
				if($this->_isSqlFunction($column)) {
					$this->_columnQuery .= $column . ' AS ' . $column; 
				} else {
					if(!empty($t['alias'])) {
						$this->_columnQuery .= $t['alias'] . '.' . $column . ' AS ' . $t['alias'] . '_' . $column;
					} else {
						$this->_columnQuery .= $t['name'] . '.' . $column . ' AS ' . $t['name'] . '_' . $column;
					}
				}
			} else {
				if($this->_isSqlFunction($column)) {
					$this->_columnQuery .= $column . ' AS ' . $alias;
				} else {
					if(!empty($t['alias'])) {
						$this->_columnQuery .= $t['alias'] . '.' . $column . ' AS ' . $t['alias'] . '_' . $alias;
					} else {
						$this->_columnQuery .= $t['name'] . '.' . $column . ' AS ' . $t['name'] . '_' . $alias;
					}	
				}
			}
			if($i++ < count($columns) - 1) {
				$this->_columnQuery .= ', ';
			}
		}
	}

	private function _isSqlFunction($value)
	{
		foreach($this->_sqlFunctions as $sqlFunction) {
			if(strpos($value, $sqlFunction) === 0) {
				return true;
			}
		}
		return false;
	}

	private function _getTableColumnNames($table)
	{
		$columnData = $this->_getTableColumnsInfo($table);
		$columnNames = array();
		foreach($columnData as $column) {
			$columnNames[] = $column->Field;
		}
		return $columnNames;
	}
}

?>