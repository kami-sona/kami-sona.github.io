rh._.exports({"0":[[" ",".LOADSTATE — Load a Previously Saved Transient Operating Point"]],"1":[[".LOADBIAS"]],"2":[[" ",".LOADSTATE — Load a Previously Saved Transient Operating Point"]],"3":[[" ","Syntax:"," ",".loadstate <statefilename> [reset]"," ","The .loadstate command restores the complete state of a ","transient simulation"," or ","transient frequency response analysis"," as saved by a ",".savestate"," command. "," ","The simulation time automatically continues at the time saved in the state file.  If the \"reset\" flag is specified, the simulation output is plotted starting at time zero relative to the saved state time, which has the same effect as specifying a .tran start time equal to the time saved in the state file."," ","The state file must be taken from exactly the same circuit with no modifications to components, models, nodes, simulator solver type, or integration method. If component values or simulator tolerances are set differently than the state file, LTspice still attempts to load the state file.  If there are minor value differences relative to the state file, the simulation will often converge with an improved solution time, but in some cases the simulation may fail to converge."," ","Copyright © 1998–2025 by Analog Devices Inc. All Rights Reserved."]],"id":"68"})