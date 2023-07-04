console.log ("I am running on " + process.platform);

if (process.platform == 'win32')
{
    console.log ("action on win32");
}
else if(process.platform == 'linux')
{
    console.log ("action on linux");
}
else
{
    console.error("not support");
}
