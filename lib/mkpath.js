

function slash(str )  { 
		return "/" + str
}


function dc_col_path()  { 
		return slash("datacenters") 
}

function dc_path(dcid )  { 
		return dc_col_path() + slash(dcid) 
}

function image_col_path()  { 
		return slash("images") 
}

function image_path(imageid )  { 
		return image_col_path() + slash(imageid) 
}

function ipblock_col_path()  { 
		return slash("ipblocks")
}

function ipblock_path(ipblockid )  { 
		return ipblock_col_path() + slash(ipblockid)
}

function lan_col_path(dcid )  { 
		return dc_path(dcid) + slash("lans") 
}

function lan_path(dcid, lanid )  { 
		return lan_col_path(dcid) + slash(lanid) 
}

function lan_nic_col(dcid, lanid )  { 
		return lan_path(dcid, lanid) + slash("nics") 

}

function location_col_path()  {
		return slash("locations")
}
function location_path(locid )  {
		return location_col_path() + slash(locid)
		
}

function request_col_path()  {
		return slash("requests")
}

function request_path(requestid )  {
		return request_col_path() + slash(requestid)
}

function request_status_path(requestid )  {
		return request_path(requestid) + slash("status")
}



/** 	Server url paths 		**/	

function server_col_path(dcid )  { 
		return dc_path(dcid) + slash("servers") 
}

function server_path(dcid, srvid )  {	
		return server_col_path(dcid) + slash(srvid) 
}

function server_cmd_path(dcid, srvid, cmd )  {	
		return server_path(dcid, srvid) + slash(cmd) 
}

function server_cdrom_col_path(dcid, srvid )  {	
		return server_path(dcid, srvid) + slash("cdroms") 
}

function server_cdrom_path(dcid, srvid, cdid )  { 
		return server_cdrom_col_path(dcid, srvid) + slash(cdid) 
}

function server_volume_col_path(dcid, srvid )  { 
		return server_path(dcid, srvid) + slash("volumes") 
}

function server_volume_path(dcid, srvid, volid )  { 
		return server_volume_col_path(dcid, srvid) + slash(volid) 
}

function snapshot_col_path()  {
		return slash("snapshots")
}
function snapshot_path(snapshotid )  {
		return snapshot_col_path() + slash(snapshotid)
}

function volume_col_path(dcid )  { 
		return dc_path(dcid) + slash("volumes") 
}

function volume_path(dcid, volid )  { 
		return volume_col_path(dcid) + slash(volid) 
}

