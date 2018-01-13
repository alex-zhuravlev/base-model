Model = (function() {
	var _config = {
		modelScale: 1.0,
		modelData: {},
		
		visContainer: document.body,
		visOptions: {}
	};
	
	var _preparedData = [];
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
	
	function GetScale()
	{
		return _config.modelScale;
	}
	
	function SetScale(value)
	{
		_config.modelScale = value;
		PrepareData();
	}
	
	function PrepareData()
	{
		_preparedData = [];
		
		for(var i = 0; i < _config.modelData.length; i++)
		{
			// Prepare nodes
			var srcNodes = _config.modelData[i].nodesDataset;
			var srcNodeTemplate = _config.modelData[i].nodeTemplate;
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
			var srcEdges = _config.modelData[i].edgesDataset;
			var srcEdgeTemplate = _config.modelData[i].edgeTemplate;
			var edges = [];
			for(var j = 0; j < srcEdges.length; j++)
			{
				var edge = jQuery.extend(true, {}, srcEdgeTemplate);
				SetConfig(edge, srcEdges[j]);
				edges[j] = edge;
			}
			
			_preparedData[_config.modelData[i].id] = {
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
			
			nodes = nodes.concat(_preparedData[id].nodes);
			edges = edges.concat(_preparedData[id].edges);
		}
		
		var visData = {
			nodes: new vis.DataSet(nodes),
			edges: new vis.DataSet(edges)
		};
		
		_visNetwork = new vis.Network(_config.visContainer, visData, _config.visOptions);
		_visNetwork.on('click', VisOnClick);
		_visNetwork.on('beforeDrawing', VisOnBeforeDrawing);
		_visNetwork.on('afterDrawing', VisOnAfterDrawing);
	}
	
	function VisOnClick(data)
	{
		var connectedNodeIds = [];
		var connectedEdgeIds = [];
		
		if(data.nodes.length === 1) // Single node selected
		{
			var nodeId = data.nodes[0];

			connectedNodeIds = this.getConnectedNodes(nodeId).concat([nodeId]);
			connectedEdgeIds = this.getConnectedEdges(nodeId);
		}
		else if(data.edges.length === 1) // Single edge selected
		{
			var edgeId = data.edges[0];
			
			connectedNodeIds = this.getConnectedNodes(edgeId);
			connectedEdgeIds = [edgeId];
		}
		else
		{
			return;
		}
		
		this.setSelection(
		{
			nodes: connectedNodeIds,
			edges: connectedEdgeIds
		},
		{
			unselectAll: true,
			highlightEdges: false
		});
	}
	
	function VisOnBeforeDrawing(context)
	{
		// Draw Main circle
		if(typeof this.getBoundingBox('1') !== 'undefined' && typeof this.getBoundingBox('2') !== 'undefined')
		{
			var center = GetBoundingBoxCenter(this.getBoundingBox('1'));
			var top = GetBoundingBoxCenter(this.getBoundingBox('2'));

			var radius = center.y - top.y;

			context.beginPath();
			context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
			context.stroke();
		}
		
		// Draw Yellow circle
		if(typeof this.getBoundingBox('1') !== 'undefined' && typeof this.getBoundingBox('43') !== 'undefined')
		{
			var center = GetBoundingBoxCenter(this.getBoundingBox('1'));
			var top = GetBoundingBoxCenter(this.getBoundingBox('43'));

			var radius = center.y - top.y;

			context.beginPath();
			context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
			context.stroke();
		}
	}
	
	function VisOnAfterDrawing(context)
	{
		
	}
	
	function GetBoundingBoxCenter(bb)
	{
		return {
			x: bb.left + (bb.right - bb.left) / 2.0,
			y: bb.top + (bb.bottom - bb.top) / 2.0
		};
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
		GetScale: GetScale,
		SetScale: SetScale,
		Draw: Draw
	};
})();