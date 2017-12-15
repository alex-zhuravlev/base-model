<?php ?>

<!DOCTYPE html>
<html>
	<head>
		<title>mainpage</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
        
		<script type="text/javascript" src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
		<script type="text/javascript" src="jquery-ui-1.12.1/jquery-ui.min.js"></script>
		<link href="jquery-ui-1.12.1/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
		
		<script type="text/javascript" src="jQuery-TE_v.1.4.0/jquery-te-1.4.0.min.js"></script>
		<link href="jQuery-TE_v.1.4.0/jquery-te-1.4.0.css" rel="stylesheet" type="text/css"/>
		
		<script type="text/javascript" src="vis-4.21.0/dist/vis.js"></script>
		<link href="vis-4.21.0/dist/vis.css" rel="stylesheet" type="text/css"/>

		<script type="text/javascript" src="notify.min.js"></script>
		
		<style type="text/css">
			.network_window {
				float: left;
			}
			
			.data_window {
				float: left;
				display: none;
			}
			
			#mynetwork {
				width: 1024px;
				height: 768px;
				border: 1px solid lightgray;
			}
		</style>
	</head>
	<body>
		<div class="network_window">
			<div id="mynetwork"></div>
			<button onclick="RedrawNetwork()">Reset Model</button>
		</div>
		<div class="data_window">
			<form id="dataform" action="#">
				<input name="type" type="hidden" value=""/>
				<input name="id" type="hidden" value=""/>
				<input name="name" type="text"/>
				<textarea name="text"></textarea>
				<input type="submit" name="submit" value="Update"/>
			</form>
		</div>

		<script type="text/javascript">
			$('textarea').jqte();
			
			var nodes = new vis.DataSet([
				// Central
				{id: 1, x : 1000, y : 1000, label: 'Node 1', shape: 'circle', color: '#7BE141'},
				
				// Main circle
				{id: 2, x : 1000, y : 100, label: 'Node 2', shape: 'circle', color: '#ff0000'},
				{id: 3, x : 100, y : 1000, label: 'Node 3', shape: 'circle', color: '#ff0000'},
				{id: 4, x : 1000, y : 1900, label: 'Node 4', shape: 'circle', color: '#ff0000'},
				{id: 5, x : 1900, y : 1000, label: 'Node 5', shape: 'circle', color: '#ff0000'},
				
				
				// Main sqare
				{id: 6, x : 363.604, y : 363.604, label: 'Node 6', shape: 'circle', color: '#687edd'},
				{id: 7, x : 363.604, y : 1636.396, label: 'Node 7', shape: 'circle', color: '#687edd'},
				{id: 8, x : 1636.396, y : 1636.396, label: 'Node 8', shape: 'circle', color: '#687edd'},
				{id: 9, x : 1636.396, y : 363.604, label: 'Node 9', shape: 'circle', color: '#687edd'},
				
				// Main circle - main sqare
				{id: 10, x : 1000, y : 363.604, label: 'Node 10', shape: 'circle', color: '#687edd'},
				{id: 11, x : 363.604, y : 1000, label: 'Node 11', shape: 'circle', color: '#687edd'},
				
				{id: 12, x : 1000, y : 1636.396, label: 'Node 12', shape: 'circle', color: '#687edd'},
				{id: 13, x : 1636.396, y : 1000, label: 'Node 13', shape: 'circle', color: '#687edd'},
			]);
			
			var edges = new vis.DataSet([
				// Central
				{from: 1, to: 2, label: 'Edge'},
				{from: 1, to: 3, label: 'Edge'},
				{from: 1, to: 4, label: 'Edge'},
				{from: 1, to: 5, label: 'Edge'},
				{from: 1, to: 6, label: 'Edge'},
				{from: 1, to: 7, label: 'Edge'},
				{from: 1, to: 8, label: 'Edge'},
				{from: 1, to: 9, label: 'Edge'},
				{from: 1, to: 10, label: 'Edge'},
				{from: 1, to: 11, label: 'Edge'},
				{from: 1, to: 12, label: 'Edge'},
				{from: 1, to: 13, label: 'Edge'},
				
				// 2
				{from: 2, to: 3, label: 'Edge'},
				{from: 2, to: 4, label: 'Edge'},
				{from: 2, to: 5, label: 'Edge'},
				{from: 2, to: 6, label: 'Edge'},
				{from: 2, to: 7, label: 'Edge'},
				{from: 2, to: 8, label: 'Edge'},
				{from: 2, to: 9, label: 'Edge'},
				{from: 2, to: 10, label: 'Edge'},
				{from: 2, to: 11, label: 'Edge'},
				{from: 2, to: 12, label: 'Edge'},
				{from: 2, to: 13, label: 'Edge'},
				
				// 3
				{from: 3, to: 4, label: 'Edge'},
				{from: 3, to: 5, label: 'Edge'},
				{from: 3, to: 6, label: 'Edge'},
				{from: 3, to: 7, label: 'Edge'},
				{from: 3, to: 8, label: 'Edge'},
				{from: 3, to: 9, label: 'Edge'},
				{from: 3, to: 10, label: 'Edge'},
				{from: 3, to: 11, label: 'Edge'},
				{from: 3, to: 12, label: 'Edge'},
				{from: 3, to: 13, label: 'Edge'},
				
				// 4
				{from: 4, to: 5, label: 'Edge'},
				{from: 4, to: 6, label: 'Edge'},
				{from: 4, to: 7, label: 'Edge'},
				{from: 4, to: 8, label: 'Edge'},
				{from: 4, to: 9, label: 'Edge'},
				{from: 4, to: 10, label: 'Edge'},
				{from: 4, to: 11, label: 'Edge'},
				{from: 4, to: 12, label: 'Edge'},
				{from: 4, to: 13, label: 'Edge'},
				
				// 5
				{from: 5, to: 6, label: 'Edge'},
				{from: 5, to: 7, label: 'Edge'},
				{from: 5, to: 8, label: 'Edge'},
				{from: 5, to: 9, label: 'Edge'},
				{from: 5, to: 10, label: 'Edge'},
				{from: 5, to: 11, label: 'Edge'},
				{from: 5, to: 12, label: 'Edge'},
				{from: 5, to: 13, label: 'Edge'},
				
				// 6
				{from: 6, to: 7, label: 'Edge'},
				{from: 6, to: 8, label: 'Edge'},
				{from: 6, to: 9, label: 'Edge'},
				{from: 6, to: 10, label: 'Edge'},
				{from: 6, to: 11, label: 'Edge'},
				{from: 6, to: 12, label: 'Edge'},
				{from: 6, to: 13, label: 'Edge'},
				
				// 7
				{from: 7, to: 8, label: 'Edge'},
				{from: 7, to: 9, label: 'Edge'},
				{from: 7, to: 10, label: 'Edge'},
				{from: 7, to: 11, label: 'Edge'},
				{from: 7, to: 12, label: 'Edge'},
				{from: 7, to: 13, label: 'Edge'},
				
				// 8
				{from: 8, to: 9, label: 'Edge'},
				{from: 8, to: 10, label: 'Edge'},
				{from: 8, to: 11, label: 'Edge'},
				{from: 8, to: 12, label: 'Edge'},
				{from: 8, to: 13, label: 'Edge'},
				
				// 9
				{from: 9, to: 10, label: 'Edge'},
				{from: 9, to: 11, label: 'Edge'},
				{from: 9, to: 12, label: 'Edge'},
				{from: 9, to: 13, label: 'Edge'},
				
				// 10
				{from: 10, to: 11, label: 'Edge'},
				{from: 10, to: 12, label: 'Edge'},
				{from: 10, to: 13, label: 'Edge'},
				
				// 11
				{from: 11, to: 12, label: 'Edge'},
				{from: 11, to: 13, label: 'Edge'},
				
				// 12
				{from: 12, to: 13, label: 'Edge'},
			]);

			// create a network
			var container = document.getElementById('mynetwork');

			// provide the data in the vis format
			var data = {
				nodes: nodes,
				edges: edges
			};

			var options = {
				autoResize: false,
				height: '100%',
				width: '100%',
				locale: 'en',
				clickToUse: false,
				interaction: {
					dragNodes: true,
					dragView: true
				},
				physics: { 
					enabled : false
				}
			};

			// initialize your network!
			var network = new vis.Network(container, data, options);
			network.on('selectNode', OnSelectNode);
			network.on('selectEdge', OnSelectEdge);

			function OnSelectNode(data)
			{
				if(data.nodes.length === 1)
				{
					var id = data.nodes[0];
					LoadNodeData(id);
				}
			}
			
			function OnSelectEdge(data)
			{
				if(data.edges.length === 1)
				{
					var id = data.edges[0];
					console.log(id);
				}
			}
			
			function RedrawNetwork()
			{
				network.destroy();
				
				network = new vis.Network(container, data, options);
				network.on('selectNode', OnSelectNode);
				network.on('selectEdge', OnSelectEdge);	
			}
			
			$('#dataform').submit(function(e){
				var data = $('#dataform').serializeArray();
				SaveNodeData(data);
				return false;
			});
			
			function ShowDataWindow(id, name, text)
			{
				$('#dataform input[name=type]').val('node');
				$('#dataform input[name=id]').val(id);
				$('#dataform input[name=name]').val(name);
				$('#dataform textarea').jqteVal(text);

				$('.data_window').show();
			}
			
			function HideDataWindow()
			{
				$('.data_window').hide();
			}
						
			function LoadNodeData(id)
			{
				$.ajax({
					type: 'POST',
					url: 'backend/get_node.php',
					async: false,
					data: {
						id: id
					},
					dataType: 'json',
					success: function(data) {
						if(data.response) {
							ShowDataWindow(data.response.id, data.response.name, data.response.text);
						} else if(data.error) {
							console.log('server script error: ' + data.error.message);
							$.notify('Server error!', 'error');
						}
					},
					error: function(xhr, errorType, exception) {
						console.log('ajax error: LoadNodeData');
						$.notify('Ajax error!', 'error');
					}
				});
			}
			
			function SaveNodeData(data)
			{
				$.ajax({
					type: 'POST',
					url: 'backend/save_node.php',
					async: false,
					data: data,
					dataType: 'json',
					success: function(data) {
						if(data.response) {
							$.notify('Data has been updated!', 'success');
						} else if(data.error) {
							console.log('server script error: ' + data.error.message);
							$.notify('Server error!', 'error');
							HideDataWindow();
						}
					},
					error: function(xhr, errorType, exception) {
						console.log('ajax error: SaveNodeData');
						$.notify('Ajax error!', 'error');
						HideDataWindow();
					}
				});
			}
		</script>
	</body>
</html>
