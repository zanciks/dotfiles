#!/usr/bin/env sh

# Terminate any polybar which is running
killall -q polybar

# Wait for them to close 
while pgrep -x polybar >/dev/null; do sleep 1; done

polybar wpgtk &
