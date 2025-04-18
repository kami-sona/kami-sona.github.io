rh._.exports({"0":[[" ",".DC — Perform a DC Source Sweep Analysis"]],"1":[[".DC"]],"2":[[" ",".DC — Perform a DC Source Sweep Analysis"]],"3":[[" ","This performs a DC analysis while sweeping the DC value of a source. It is useful for computing the DC transfer function of an amplifier or plotting the characteristic curves of a transistor for model verification."," ","Syntax:"," ",".dc <sweep1> [<sweep2> [<sweep3>]]"," ","<sweep1>, <sweep2>, and <sweep3> can be:"," ","[<oct, dec, lin>] <srcnam> <start> <stop> <incr>"," ","The <srcnam> is either an independent voltage or current source that is to be swept. The source is swept from <start> to <stop>. The number of steps is defined with the keyword ","oct",", ","dec",", or ","lin"," (which is the default) and <incr> according to the following table:"," ","Keyword"," ","incr"," ","oct"," ","No. of steps per octave"," ","dec"," ","No. of steps per decade"," ","lin"," ","Step size"," ","<srcnam> list <value1> [<value2> [<value3> [ ... ]]]"," ","The source is assigned values from the given list."," ","<srcnam> file=<Filename>"," ","The source is assigned values read from the given file. This file can contain comments like a regular netlist. The numbers must be separated by whitespace or commas."," ","In the following example, the default BSIM3v3.2.4 characteristic curves are plotted:"," ","* Example .dc sweep","\n      M1 2 1 0 0 nbsim","\n      Vgs 1 0 3.5","\n      Vds 2 0 3.5","\n      .dc Vds 3.5 0 -0.05 Vgs 0 3.5 0.5","\n      .model nbsim NMOS Level=8","\n      .save I(Vds)","\n      .end"," ","Copyright © 1998–2025 by Analog Devices Inc. All Rights Reserved."]],"id":"92"})