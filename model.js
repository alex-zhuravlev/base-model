Model = (function() {
	var _config = {
		modelScale: 1.0,
		
		visContainer: document.body,
		visData: {},
		visOptions: {}
	};
	
	var _visNetwork = null;
	
	function Init(userConfig)
	{
		for (var key in userConfig)
		{
			if (_config.hasOwnProperty(key) && (typeof _config[key] === typeof userConfig[key]))
			{
				_config[key] = userConfig[key];
			}
		}
		
		PrepareData();
	}
	
	function PrepareData()
	{
		var data = _config.visData;
		_config.visData = [];
		
		for(var i = 0; i < data.length; i++)
		{
			// Prepare nodes
			var srcNodes = data[i].nodesDataset;
			var srcNodeTemplate = data[i].nodeTemplate;
			var nodes = [];
			for(var j = 0; j < srcNodes.length; j++)
			{
				var node = jQuery.extend(true, {}, srcNodeTemplate);
				SetConfig(node, srcNodes[j]);
				node.x *= _config.modelScale;
				node.y *= _config.modelScale;
				node.label = node.id + '';
				nodes[j] = node;
			}
			
			// Prepare edges
			var srcEdges = data[i].edgesDataset;
			var srcEdgeTemplate = data[i].edgeTemplate;
			var edges = [];
			for(var j = 0; j < srcEdges.length; j++)
			{
				var edge = jQuery.extend(true, {}, srcEdgeTemplate);
				SetConfig(edge, srcEdges[j]);
				edges[j] = edge;
			}
			
			_config.visData[data[i].id] = {
				nodes: nodes,
				edges: edges
			};
		}
	}
	
	function Draw(viewIds)
	{
		if(_visNetwork !== null)
		{
			_visNetwork.destroy();
			_visNetwork = null;
		}
		
		var nodes = [];
		var edges = [];
		for(var i = 0; i < viewIds.length; i++)
		{
			var id = viewIds[i];
			
			nodes = nodes.concat(_config.visData[id].nodes);
			edges = edges.concat(_config.visData[id].edges);
		}
		
		var visData = {
			nodes: new vis.DataSet(nodes),
			edges: new vis.DataSet(edges)
		};
		
		_visNetwork = new vis.Network(_config.visContainer, visData, _config.visOptions);
		_visNetwork.on('click', VisOnClick);
		// _visNetwork.on('selectNode', VisOnSelectNode);
		// _visNetwork.on('selectEdge', VisOnSelectEdge);
	}
	
	function VisOnClick(data)
	{
		VisCustomSelection(this, data);
	}
	
	function VisOnSelectNode(data)
	{
		//console.log('OnSelectNode');
		//VisCustomSelection(this, data);
	}
			
	function VisOnSelectEdge(data)
	{
		//console.log('OnSelectEdge');
		//VisCustomSelection(this, data);
	}
	
	function VisCustomSelection(network, data)
	{
		if(data.nodes.length === 0) return;

		var nodeId = data.nodes[0];

		var connectedNodeIds = network.getConnectedNodes(nodeId);
		var connectedEdgeIds = network.getConnectedEdges(nodeId);

		network.setSelection(
		{
			nodes: connectedNodeIds.concat([nodeId]),
			edges: connectedEdgeIds
		},
		{
			unselectAll: true,
			highlightEdges: false
		});

		/*var connectedNodes = nodes.get(connectedNodeIds);
		for(var i = 0; i < connectedNodes.length; i++)
		{
		}*/
	}
	
	function IsObj(obj)
	{
		return (typeof obj === 'object' && typeof obj.splice !== 'function');
	}
	
	function SetConfig(dst, src)
	{
		if (IsObj(dst) && IsObj(src)) // Check types inconsistency
		{
			for (var key in src) // Loop through all the properties of the src object
			{
				if (dst.hasOwnProperty(key)) // Check if such property is presented in dst
				{
					if (IsObj(dst[key])) // When the value is an object call this function recursively
					{
						SetConfig(dst[key], src[key]);
					}
					else // Otherwise set their value accordingly
					{
						dst[key] = src[key];
					}
				}
			}
		}
	}

	function HexToRgbA(hex)
	{
		if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex))
		{
			var c = hex.substring(1).split('');
			if(c.length === 3)
			{
				c = [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c = '0x' + c.join('');
			return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
		}
		throw new Error('Bad Hex');
	}
	
	return {
		Init: Init,
		Draw: Draw
	};
})();