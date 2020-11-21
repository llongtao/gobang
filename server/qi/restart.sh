#!/bin/bash
#----------config----------
servername=main.py
puser=root

pid=`ps aux | grep $servername | grep $puser | grep -v grep | awk '{print $2}'`

if [[ -z $pid ]]; then
    echo "I can NOT find $pname running by $puser"
fi

kill -9 $pid >/dev/null 2>&1

nohup python3 -u main.py   >log.message.out &
#---------- restart jar end!----------
