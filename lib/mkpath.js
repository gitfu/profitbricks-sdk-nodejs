module.exports={

 slash	: function(str )  { 
		return "/" + str
},


 dc_col_path	: function()  { 
		return slash("datacenters") 
},

 dc_path	: function(dcid )  { 
		return dc_col_path() + slash(dcid) 
},

 image_col_path	: function()  { 
		return slash("images") 
},

 image_path	: function(imageid )  { 
		return image_col_path() + slash(imageid) 
},

 ipblock_col_path: function()  { 
		return slash("ipblocks")
},

 ipblock_path	: function(ipblockid )  { 
		return ipblock_col_path() + slash(ipblockid)
},

 lan_col_path	: function(dcid )  { 
		return dc_path(dcid) + slash("lans") 
},

 lan_path	: function(dcid, lanid )  { 
		return lan_col_path(dcid) + slash(lanid) 
},

 lan_nic_col	: function(dcid, lanid )  { 
		return lan_path(dcid, lanid) + slash("nics") 

},

 location_col_path: function()  {
		return slash("locations")
},
 location_path	: function(locid )  {
		return location_col_path() + slash(locid)
		
},

 request_col_path: function()  {
		return slash("requests")
},

 request_path	: function(requestid )  {
		return request_col_path() + slash(requestid)
},

 request_status_path: function(requestid )  {
		return request_path(requestid) + slash("status")
},



/** 	Server url paths 		**/	

 server_col_path: function(dcid )  { 
		return dc_path(dcid) + slash("servers") 
},

 server_path	: function(dcid, srvid )  {	
		return server_col_path(dcid) + slash(srvid) 
},

 server_cmd_path: function(dcid, srvid, cmd )  {	
		return server_path(dcid, srvid) + slash(cmd) 
},

 server_cdrom_col_path: function(dcid, srvid )  {	
		return server_path(dcid, srvid) + slash("cdroms") 
},

 server_cdrom_path: function(dcid, srvid, cdid )  { 
		return server_cdrom_col_path(dcid, srvid) + slash(cdid) 
},

 server_volume_col_path: function(dcid, srvid )  { 
		return server_path(dcid, srvid) + slash("volumes") 
},

 server_volume_path: function(dcid, srvid, volid )  { 
		return server_volume_col_path(dcid, srvid) + slash(volid) 
},

 snapshot_col_path: function()  {
		return slash("snapshots")
},
 snapshot_path	: function(snapshotid )  {
		return snapshot_col_path() + slash(snapshotid)
},

 volume_col_path: function(dcid )  { 
		return dc_path(dcid) + slash("volumes") 
},

 volume_path	: function(dcid, volid )  { 
		return volume_col_path(dcid) + slash(volid) 
}

}