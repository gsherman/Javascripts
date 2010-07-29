@echo off
REM How RuleManager calls this script:
REM 	pager_clerk.exe -p <pager_type> -t <employees pager number> -m <message to be sent> -e <employees email address>
REM
REM How we need to call the send-sms-twilio.js script: 
REM 	cscript send-sms-twilio.js smsNumber message
REM

cscript "C:\dovetail\javascript\send-sms-twilio.js" %4 %6