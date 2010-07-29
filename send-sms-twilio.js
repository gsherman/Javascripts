var arguments = WScript.Arguments;
var argumentsCount = arguments.Count();

if(argumentsCount < 2) {
	 WScript.Echo("Missing Arguments")
   WScript.Echo("Usage: send-sms-twilio smsNumber message");
   WScript.Quit();
}

var smsNumber = arguments(0);
var message = arguments(1);

//Make sure we dont go over 160 characters
message = message.substr(0,159);

var fromNumber = "123-456-7890"
var accountSid = "EnterYourAccountSidHere";
var authToken = "EnterYourAccountAuthTokenHere";
username = accountSid;
password = authToken;


var sUrl = "https://" + username + ":" + password + "@" + "api.twilio.com/2008-08-01/Accounts/" + accountSid + "/SMS/Messages"

var sPostData = "From=" + fromNumber;
sPostData+= "&Body=" + message;
sPostData+= "&To=" + smsNumber;

var oXMLHTTP = WScript.CreateObject("Microsoft.XMLHTTP");
oXMLHTTP.open("POST", sUrl, false);
oXMLHTTP.SetRequestHeader("Content-Type", "application/x-www-form-urlencoded");
oXMLHTTP.Send(sPostData);


var sResult = oXMLHTTP.responseText;
WScript.Echo(sResult);
