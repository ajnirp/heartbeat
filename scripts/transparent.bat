REM convert a bunch of old png sprites into transparent background ones
REM you won't find the files there anymore!

REM convert ../assets/run_ported0.png -transparent white ../assets/run0.png
REM convert ../assets/run_ported1.png -transparent white ../assets/run1.png
REM convert ../assets/run_ported2.png -transparent white ../assets/run2.png
REM convert ../assets/run_ported3.png -transparent white ../assets/run3.png
REM convert ../assets/run_ported4.png -transparent white ../assets/run4.png
REM convert ../assets/run_ported5.png -transparent white ../assets/run5.png
REM convert ../assets/run_ported6.png -transparent white ../assets/run6.png
REM convert ../assets/run_ported7.png -transparent white ../assets/run7.png
REM convert ../assets/run_ported8.png -transparent white ../assets/run8.png
REM convert ../assets/standing.png -transparent white ../assets/standing.png

REM concatenate into one spritesheet

REM convert +append ../assets/run/left/run0.png ../assets/run/left/run1.png ../assets/run/left/run2.png ../assets/run/left/run3.png ../assets/run/left/run4.png ../assets/run/left/run5.png ../assets/run/left/run6.png ../assets/run/left/run7.png ../assets/run/left/run8.png ../assets/run/left/left.png

convert +append ../assets/run/right/run0.png ../assets/run/right/run1.png ../assets/run/right/run2.png ../assets/run/right/run3.png ../assets/run/right/run4.png ../assets/run/right/run5.png ../assets/run/right/run6.png ../assets/run/right/run7.png ../assets/run/right/run8.png ../assets/run/right/right.png

REM flip vertically

REM convert -flop ../assets/run/left/run0.png ../assets/run/right/run0.png
REM convert -flop ../assets/run/left/run1.png ../assets/run/right/run1.png
REM convert -flop ../assets/run/left/run2.png ../assets/run/right/run2.png
REM convert -flop ../assets/run/left/run3.png ../assets/run/right/run3.png
REM convert -flop ../assets/run/left/run4.png ../assets/run/right/run4.png
REM convert -flop ../assets/run/left/run5.png ../assets/run/right/run5.png
REM convert -flop ../assets/run/left/run6.png ../assets/run/right/run6.png
REM convert -flop ../assets/run/left/run7.png ../assets/run/right/run7.png
REM convert -flop ../assets/run/left/run8.png ../assets/run/right/run8.png