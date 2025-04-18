rh._.exports({"0":[[" ","Efficiency Calculation"]],"1":[["Circuit Efficiency Calculation,Efficiency Calculation"]],"2":[[" ","Circuit Efficiency Calculation"]],"3":[[" ","LTspice will provide an efficieny report if the keyword \"steady\" is added to the .tran command, e.g., \".TRAN <time> steady\". The program will detect the steady state by checking the internal state of the switcher macromodel. It doesn't work when a switching regulator part is not part of the circuit because the steady state detection is implemented in the model — usually by looking for the the current flowing out of the error amplifier to drop to zero as integrated over a switching cycle. There must be exactly one voltage source in the circuit. This will be identified as the input. There must be exactly one current source in the circuit, though a resistor with the name of Rload can be used instead. This will be identified as the load. After the simulation is done, you can select the 'Efficiency Report' under the 'View' menu to see the report on the schematic."," ","Efficiency estimate in LTspice is first order.  Switching loss and other parasitic losses may not be included precisely.  Please use LTpowerCAD (","https://www.analog.com/en/design-center/ltpowercad.html",") for detailed efficiency simulations.   "," ","Copyright © 1998–2025 by Analog Devices Inc. All Rights Reserved."]],"id":"78"})