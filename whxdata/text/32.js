rh._.exports({"0":[[" ",".NODESET — Supply Hints for Initial DC Solution"]],"1":[[".NODESET"]],"2":[[" ",".NODESET — Supply Hints for Initial DC Solution"]],"3":[[" ","The .nodeset directive supplies hints for finding the DC operating point. If a circuit has multiple possible DC states as, for example, a flipflop, the iteration process for finding the DC solution may never converge. A .nodeset directive can be used to lead the circuit to one or another state. Basically, after a solution pass is done with the voltage specified on the .nodeset directive, the constraint is removed for subsequent iterative passes."," ","Syntax:"," ",".NODESET V(node1)=<voltage> [V(node2)=<voltage [...]]"," ","Copyright © 1998–2025 by Analog Devices Inc. All Rights Reserved."]],"id":"32"})