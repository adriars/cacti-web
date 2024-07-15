# CACTI Web
A Tool to Model Caches/Memories, 3D stacking, and off-chip IO

CACTI is an analytical tool that takes a set of cache/memory para-
meters as input and calculates its access time, power, cycle 
time, and area.

CACTI was originally developed by Dr. Jouppi and Dr. Wilton
in 1993 and since then it has undergone six major 
revisions.

This project includes the following

* A Web Assembly version of the CACTI 7.0 CLI tool

* A NPM project with a web interface that allows users to interact with the CACTI 7.0 tool using a web browser and common HTML forms

* A docker compose file to easily deploy a docker container runing the web version of the CACTI 7.0 tool

# How to deploy

## Docker
You can run the project with the following commands
```
git clone https://github.com/adriars/cacti-web.git
cd cacti-web
docker compose up -d
```

## Nodejs
You can run the NPM project with the following commands
```
git clone https://github.com/adriars/cacti-web.git
cd cacti-web
npm install
npm start
```

# How to use

## Web browser
You can acces the web inteface on 'http://localhost:8001' using a web browser (If you need a different port you will need to change the port in "server.js" and/or in "docker-compose.yml"

## Javascript
You can use the WASM version of the CACTI tool as a CLI application with the following commands

```
node cacti.js
```

Check the section below on more information about how to use this CLI version

# Additional info

This project used the CACTI source code from this repo https://github.com/topanitanw/Cacti-7.0

List of features (version 1-7):

The following is the list of features supported by the tool. 

* Power, delay, area, and cycle time model for 
                  direct mapped caches
                  set-associative caches
                  fully associative caches
                  Embedded DRAM memories
                  Commodity DRAM memories
                  
* Support for modeling multi-ported uniform cache access (UCA)
  and multi-banked, multi-ported non-uniform cache access (NUCA).

* Leakage power calculation that also considers the operating
  temperature of the cache.
  
* Router power model.

* Interconnect model with different delay, power, and area 
  properties including low-swing wire model.

* An interface to perform trade-off analysis involving power, delay,
  area, and bandwidth.

* All process specific values used by the tool are obtained
  from ITRS and currently, the tool supports 90nm, 65nm, 45nm, 
  and 32nm technology nodes.

* Chip IO model to calculate latency and energy for DDR bus. Users can model
  different loads (fan-outs) and evaluate the impact on frequency and energy.
  This model can be used to study LR-DIMMs, R-DIMMs, etc.

Version 7.0 is derived from 6.5 and merged with CACTI 3D. 
It has many new additions apart from code refinements and 
bug fixes: new IO model, 3D memory model, and power gating models.
Ref: CACTI-IO: CACTI With OFF-chip Power-Area-Timing Models
     MemCAD: An Interconnect Exploratory Tool for Innovative Memories Beyond DDR4
     CACTI-3DD: Architecture-level modeling for 3D die-stacked DRAM main memory

Version 6.5 has a new c++ code base and includes numerous bug fixes.
CACTI 5.3 and 6.0 activate an entire row of mats to read/write a single
block of data. This technique improves reliability at the cost of  
power. CACTI 6.5 activates minimum number of mats just enough to retrieve 
a block to minimize power.

How to use the tool?

Prior versions of CACTI take input parameters such as cache
size and technology node as a set of command line arguments. 
To avoid a long list of command line arguments, 
CACTI 6.5 & & let users specify their cache model in a more 
detailed manner by using a config file (cache.cfg).

-> define the cache model using cache.cfg
-> run the "cacti" binary <./cacti -infile cache.cfg>

CACTI also provides a command line interface similar to earlier versions. The command line interface can be used as

./cacti  cache_size line_size associativity rw_ports excl_read_ports excl_write_ports 
  single_ended_read_ports search_ports banks tech_node output_width specific_tag tag_width
  access_mode cache main_mem obj_func_delay obj_func_dynamic_power obj_func_leakage_power
  obj_func_cycle_time obj_func_area dev_func_delay dev_func_dynamic_power dev_func_leakage_power
  dev_func_area dev_func_cycle_time ed_ed2_none temp wt data_arr_ram_cell_tech_flavor_in
  data_arr_peri_global_tech_flavor_in tag_arr_ram_cell_tech_flavor_in tag_arr_peri_global_tech_flavor_in
  interconnect_projection_type_in wire_inside_mat_type_in wire_outside_mat_type_in
  REPEATERS_IN_HTREE_SEGMENTS_in VERTICAL_HTREE_WIRES_OVER_THE_ARRAY_in 
  BROADCAST_ADDR_DATAIN_OVER_VERTICAL_HTREES_in PAGE_SIZE_BITS_in BURST_LENGTH_in
  INTERNAL_PREFETCH_WIDTH_in force_wiretype wiretype force_config ndwl ndbl nspd ndcm 
  ndsam1 ndsam2 ecc

For complete documentation of the tool, please refer
to the following publications and reports.

CACTI-5.3 & 6 reports - Details on Meory/cache organizations and tradeoffs.

Latency/Energy tradeoffs for large caches and NUCA design:
  "Optimizing NUCA Organizations and Wiring Alternatives for Large Caches With CACTI 6.0", that appears in MICRO 2007.

Memory IO design:  CACTI-IO: CACTI With OFF-chip Power-Area-Timing Models,
     MemCAD: An Interconnect Exploratory Tool for Innovative Memories Beyond DDR4
     CACTI-IO Technical Report - http://www.hpl.hp.com/techreports/2013/HPL-2013-79.pdf

3D model:
     CACTI-3DD: Architecture-level modeling for 3D die-stacked DRAM main memory

We are still improving the tool and refining the code. If you
have any comments, questions, or suggestions please write to
us.

Naveen Muralimanohar             
naveen.muralimanohar@hpe.com    

Ali Shafiee 
shafiee@cs.utah.edu

Vaishnav Srinivas
vaishnav.srinivas@gmail.com
