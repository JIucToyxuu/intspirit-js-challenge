API
1. postResponse(endUrl, params) - post request to server.
	input: 
			endUrl - last fragment of url;
			params - JSON object - { "request": "any text" }.
	output:
			if success: deferred object;
			if error: "postResponse - Post request failed!".
2. getResponseCodes(endUrl) - get request to server.
	input: 
			endUrl - last fragment of url.
	output:
			if success: deferred object;
			if error: "getResponseCodes - Get request failed!".
2. getDataSet(endUrl) - get request to server.
	input: 
			endUrl - last fragment of url.
	output:
			if success: deferred object;
			if error: "getDataSet - Get request failed!".