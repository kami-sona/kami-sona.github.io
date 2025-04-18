rh._.exports({"0":[[" ",".MEASURE — Evaluate User-Defined Electrical Quantities"]],"1":[[".MEASURE"]],"2":[[" ",".MEASURE — Evaluate User-Defined Electrical Quantities"]],"3":[[" ","There are two basic different types of .MEASURE statements. Those that refer to a point along the abscissa (the independent variable plotted along the horizontal axis, i.e., the time axis of a .tran analysis) and .MEASURE statements that refer to a range over the abscissa. The first version, those that point to one point on the abscissa, are used to print a data value or expression thereof at a specific point or when a condition is met. The following syntax is used:"," ","Syntax:"," ",".MEAS[URE] [AC|DC|OP|TRAN|TF|NOISE] <name>","\n      + [<FIND|DERIV|PARAM> <expr>]","\n      + [WHEN <expr> | AT=<expr>]]","\n      + [TD=<val1>] [<RISE|FALL|CROSS>=[<count1>|LAST]]"," ","Note one can optionally state the type of analysis to which the .MEAS statement applies. This allows you to use certain .MEAS statements only for certain analysis types. The name is required to give the result a parameter name that can be used in other .MEAS statements. Below are example .MEAS statements that refer to a single point along the abscissa:"," ",".MEAS TRAN res1 FIND V(out) AT=5m"," ","Print the value of V(out) at t=5ms labeled as res1."," ",".MEAS TRAN res2 FIND V(out)*I(Vout) WHEN V(x)=3*V(y)"," ","Print the value of the expression V(out)*I(Vout) the first time the condition V(x)=3*V(y) is met. This will be labeled res2."," ",".MEAS TRAN res3 FIND V(out) WHEN V(x)=3*V(y) cross=3"," ","Print the value of V(out) the third time the condition V(x)=3*V(y) is met. This will be labeled res3."," ",".MEAS TRAN res4 FIND V(out) WHEN V(x)=3*V(y) rise=last"," ","Print the value of V(out) the last time the condition V(x)=3*V(y) is met when approached as V(x) increasing wrt 3*V(y). This will be labeled res4."," ",".MEAS TRAN res5 FIND V(out) WHEN V(x)=3*V(y) cross=3 TD=1m"," ","Print the value of V(out) the third time the condition"," ","V(x)=3*V(y) is met, but don't start counting until the time as elapsed to 1ms. This will be labeled res5."," ",".MEAS TRAN res6 PARAM 3*res1/res2"," ","Print the value of 3*res1/res2. This form is useful for printing expressions of other .meas statement results. It's not intended that expressions based on direct simulation data, such as V(3), are present in the expression to be evaluated, but if they are, the data is taken from the last simulated point. The result will be labeled res6."," ","Note that the above examples, while referring to one point along the abscissa, the requested result is based on ordinate data(the dependent variables). If no ordinate information is requested, then the .MEAS statement prints point on the abscissa that the measurement condition occurs:"," ",".MEAS TRAN res6 WHEN V(x)=3*V(y)"," ","Print the first time the condition V(x)=3*V(y) is met. This will be labeled res6."," ","The other type of .MEAS statement refers to a range over the abscissa. The following syntax is used:"," ","Syntax:"," ",".MEAS [AC|DC|OP|TRAN|TF|NOISE] <name>","\n      + [<AVG|MAX|MIN|PP|RMS|INTEG> <expr>]","\n      + [TRIG <lhs1> [[VAL]=]<rhs1>] [TD=<val1>]","\n      + [<RISE|FALL|CROSS>=<count1>]","\n      + [TARG <lhs2> [[VAL]=]<rhs2>] [TD=<val2>]","\n      + [<RISE|FALL|CROSS>=<count2>]"," ","The range over the abscissa is specified with the points defined by \"TRIG\" and \"TARG\". The TRIG point defaults to the start of the simulation if omitted. Similarly, the TARG point defaults to the end of simulation data. If all three of the TRIG, TARG, and the previous WHEN points are omitted, then the .MEAS statement operates over the entire range of data. The types of measurement operations that can be done over an interval are"," ","Keyword"," ","Operation performed over interval"," ","AVG"," ","Compute the average of <expr>"," ","MAX"," ","Find the maximum value of <expr>"," ","MIN"," ","Find the minimum value of <expr>"," ","PP"," ","Find the peak-to-peak of <expr>"," ","RMS"," ","Compute the root mean square of <expr>"," ","INTEG"," ","Integrate <expr>"," ","If no measurement operation is specified, the result of the .MEAS statement is the distance along the abscissa between the TRIG and TARG points. Below are example interval .MEAS statements:"," ",".MEAS TRAN res7 AVG V(NS01)","\n      + TRIG V(NS05) VAL=1.5 TD=1.1u FALL=1","\n      + TARG V(NS03) VAL=1.5 TD=1.1u FALL=1"," ","Print the value of average value of V(NS01) from the 1st fall of V(NS05) to 1.5V after 1.1us and the 1st fall of V(NS03) to 1.5V after 1.1us. This will be labeled res7."," ","For .AC analyses, the conditional expressions of complex data are translated to real conditions by considering only the real part of the complex value of the expression."," ","Also, the result of a .MEAS statement can be used in another .MEAS statement. In this example, the 3dB bandwidth is computed:"," ",".MEAS AC tmp max mag(V(out)); find the peak response and call it \"tmp\"","\n      .MEAS AC BW trig mag(V(out))=tmp/sqrt(2) rise=1","\n      + targ mag(V(out))=tmp/sqrt(2) fall=last"," ","Print the difference in frequency between the two points 3dB down from peak response. NOTE: The data from a .AC analysis is complex and so are the .measurement statements results. However, the equality refers only to the real part of the complex number, that is, \"mag(V(out))=tmp/sqrt(2)\" is equivalent to Re(mag(V(out)))=Re(tmp/sqrt(2))."," ","When testing a condition such as \"when <cond1> = <cond2>\" you will want the condition to go through the equality, not just meet it. This relates to the fact that floating point equality should never be required due to the finite precision used in storing numbers."," ","The AVG, RMS, and INTEG operations are different for .NOISE analysis than the analysis types since the noise is more meaningfully integrated in quadrature over frequency. Hence AVG and RMS both give the RMS noise voltage and INTEG gives the integrated total noise. Hence, if you add the SPICE directives"," ",".MEAS NOISE out_totn INTEG V(onoise)","\n      .MEAS NOISE in_totn INTEG V(inoise)"," ","the total integrated input and output referenced rms noise will be printed in the .log file."," ",".MEAS statements are done in post processing after the simulation is completed. This allows you to write a script of .MEAS statements and execute them on a dataset. To do this, make the waveform window the active window and execute menu command File > Execute .MEAS Script. Another consequence of .MEAS statements being done in post processing after the simulation is that the accuracy of the .MEAS statement output is limited by the accuracy of the waveform data after compression. You may want to adjust the compression settings for more precise .MEAS statement output."," ",".MEAS statements are usually just put on the schematic as a SPICE directive or in the netlist with the rest of the simulation commands and circuit definition. The output is put in the .log file which can be viewed with menu command View > SPICE Error Log. If the simulation includes a .step command, the .measure statements are executed for each step and the results are printed as tables in the .log file. These tables for .measure results can be plotted like normal waveforms by this procedure:"," "," i) After the simulation completes, execute menu menu command View > SPICE Error Log"," ","ii) Right click in the .log file and, execute context menu command Plot .step'ed .meas data."," ","Copyright © 1998–2025 by Analog Devices Inc. All Rights Reserved."]],"id":"125"})