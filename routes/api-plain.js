var _0xeac2=['body','user','pass','https://api.storj.io','BridgeClient','createUser','success','Account\x20registered','/generate/keypair','received...','KeyPair','warn','No\x20authentication.\x20Make\x20sure\x20to\x20authenticate\x20with\x20Basic\x20Authentication\x20first.','Adding\x20public\x20key\x20to\x20storj.BridgeClient...','addPublicKey','getPublicKey','message','Public\x20key\x20added\x20to\x20storj.BridgeClient,\x20saving\x20to\x20.env\x20file.\x20Make\x20sure\x20to\x20add\x20this\x20key\x20to\x20your\x20Heroku\x20config\x20variables','STORJ_PRIVATE_KEY=','getPrivateKey','writeFileSync','Key\x20changed\x20to:\x20','Keypair\x20generated','get','params','Generating\x20Storj\x20keypair...','User\x20is\x20not\x20authenticated.\x20Authenticate\x20with\x20basic\x20auth,\x20or\x20with\x20keypair\x20auth\x20if\x20you\x27ve\x20already\x20generated\x20a\x20keypair','appendFileSync','./.env','./private.key','/logout','destroy','index','API\x20PAGE','key','Logging\x20in\x20with\x20keypair...','Logged\x20in\x20with\x20keypair','generated\x20hash','/keypair/blockchain','cHash','cSharing','Sharing;\x20','Decrypted:\x20','/buckets/create','drive:\x20','createBucket','info','ID:\x20%s,\x20Name:\x20%s,\x20Storage:\x20%s,\x20Transfer:\x20%s','name','storage','transfer','Drive\x20#','/buckets/list','Getting\x20buckets...','There\x20are\x20no\x20drives\x20available','Retrieved\x20buckets','Retrieved\x20drives.','sendFile','join','../views/upload.html','/upload','./uploads','existsSync','IncomingForm','uploadDir','../uploads','parse','driveID','file','rename','./uploads/','.crypt','EncryptStream','createReadStream','pipe','createWriteStream','finish','PUSH','error','Created\x20token','token','Storing\x20file\x20in\x20bucket...','storeFileInBucket','Stored\x20file\x20in\x20bucket','Cleaning\x20up\x20and\x20deleting\x20temporary\x20encrypted\x20file...','Temporary\x20encrypted\x20file\x20deleted','File\x20','status','/files/list','listFilesInBucket','This\x20drive\x20is\x20empty','Retrieved\x20files','/files/download','getBuckets','Got\x20bucketId','filename','match','file.txt','DecryptStream','Creating\x20file\x20stream...','createFileStream','Failed\x20to\x20download\x20shard,\x20reason:\x20%s','pointer','length','Received\x20%s\x20of\x20%s\x20bytes','_length','queue','successful','./downloads','mkdirSync','fileID','fileNAME','MIME','unlink','Failed\x20to\x20unlink\x20partial\x20file.','Download\x20completed','/files/download/local/:fp','Finished\x20downloading\x20file!','download','Generating\x20filekey...','calculateFileId','Filekey\x20generated!','apply','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','debug','trace','console','exportMnemonic','Mnemonic\x20already\x20exists','Mnemonic\x20doesn\x27t\x20exist\x20or\x20new\x20keyring','process.env.STORJ_MNEONIC','importMnemonic','generateDeterministicKey','Mnemonic\x20successfully\x20retrieved/generated\x20and\x20imported','Mnemonic\x20not\x20saved\x20to\x20env\x20vars.\x20Saving...','STORJ_MNEMONIC=\x22${mnemonic\x20||\x20newMnemonic}\x22','Mnemonic\x20written\x20to\x20.env\x20file.\x20Make\x20sure\x20to\x20add\x20this\x20to\x20heroku\x20config\x20variables\x20with\x20\x27heroku\x20config:set\x20STORJ_MNEMONIC=\x22<VALUE\x20FROM\x20.ENV\x20FILE>\x27','/inherit','inherit','drive','time','receiver','email','used\x20salt:\x20','Original\x20Text:\x20','Encrypted\x20Text:\x20','Decrypted\x20Text:\x20','createCipher','aes-256-cbc','update','utf-8','hex','final','createDecipher','randomBytes','toString','slice','exports','constructor','debugger','express','Router','formidable','util','crypto','async','through','path','storj-lib','storj-lib/lib/utils','KeyRing','env','STORJ_PRIVATE_KEY','STORJ_MNEMONIC','log','express-session','session','authed','tmpKey','render','users','Testament\x20dashboard','send','fail','Session\x20expired,\x20please\x20login!','post','/register'];(function(_0x3cfe33,_0x1ebc44){var _0x2e73eb=function(_0x11b355){while(--_0x11b355){_0x3cfe33['push'](_0x3cfe33['shift']());}};var _0x38f703=function(){var _0x645e16={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x29b239,_0x1c89bf,_0x4180fa,_0x1f2afd){_0x1f2afd=_0x1f2afd||{};var _0x421ef4=_0x1c89bf+'='+_0x4180fa;var _0x573fca=0x0;for(var _0x573fca=0x0,_0x10e397=_0x29b239['length'];_0x573fca<_0x10e397;_0x573fca++){var _0x28ac9a=_0x29b239[_0x573fca];_0x421ef4+=';\x20'+_0x28ac9a;var _0x18b6e7=_0x29b239[_0x28ac9a];_0x29b239['push'](_0x18b6e7);_0x10e397=_0x29b239['length'];if(_0x18b6e7!==!![]){_0x421ef4+='='+_0x18b6e7;}}_0x1f2afd['cookie']=_0x421ef4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x47767c,_0x76157c){_0x47767c=_0x47767c||function(_0x1e418b){return _0x1e418b;};var _0x10793d=_0x47767c(new RegExp('(?:^|;\x20)'+_0x76157c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x33c307=function(_0x5738bc,_0x2fc811){_0x5738bc(++_0x2fc811);};_0x33c307(_0x2e73eb,_0x1ebc44);return _0x10793d?decodeURIComponent(_0x10793d[0x1]):undefined;}};var _0x9f6e5b=function(){var _0x2f0a19=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2f0a19['test'](_0x645e16['removeCookie']['toString']());};_0x645e16['updateCookie']=_0x9f6e5b;var _0xf38ac0='';var _0x287100=_0x645e16['updateCookie']();if(!_0x287100){_0x645e16['setCookie'](['*'],'counter',0x1);}else if(_0x287100){_0xf38ac0=_0x645e16['getCookie'](null,'counter');}else{_0x645e16['removeCookie']();}};_0x38f703();}(_0xeac2,0xa1));var _0x2eac=function(_0x3852fd,_0x5b321f){_0x3852fd=_0x3852fd-0x0;var _0x186388=_0xeac2[_0x3852fd];return _0x186388;};var express=require(_0x2eac('0x0'));var router=express[_0x2eac('0x1')]();var formidable=require(_0x2eac('0x2'));var empty=require('is-empty');var util=require(_0x2eac('0x3'));var crypto=require(_0x2eac('0x4'));var async=require(_0x2eac('0x5'));var fs=require('fs');var bodyParser=require('body-parser');var through=require(_0x2eac('0x6'));var path=require(_0x2eac('0x7'));var storj=require(_0x2eac('0x8'));var storj_utils=require(_0x2eac('0x9'));var api='https://api.storj.io';var client;var KEYRING_PASS='somepassword';var keyring=storj[_0x2eac('0xa')]('./');var STORJ_EMAIL=process[_0x2eac('0xb')][_0x2eac('0xc')];var STORJ_PASSWORD=process[_0x2eac('0xb')][_0x2eac('0xc')];var STORJ_MNEMONIC=process[_0x2eac('0xb')][_0x2eac('0xd')]||generateMnemonic();var storjCredentials={'email':STORJ_EMAIL,'password':STORJ_PASSWORD};var separator=function(){return console[_0x2eac('0xe')]('================================');};var session=require(_0x2eac('0xf'));var auth=function(_0x115ac8,_0x5a3b2f,_0x1c46cf){if(_0x115ac8[_0x2eac('0x10')]&&_0x115ac8[_0x2eac('0x10')][_0x2eac('0x11')]&&_0x115ac8[_0x2eac('0x10')][_0x2eac('0x12')])return _0x1c46cf();else _0x5a3b2f[_0x2eac('0x13')](_0x2eac('0x14'),{'title':_0x2eac('0x15')});};var authAJAX=function(_0x2a41c9,_0x14b7c5,_0x19b9b4){if(_0x2a41c9[_0x2eac('0x10')]&&_0x2a41c9['session'][_0x2eac('0x11')]&&_0x2a41c9[_0x2eac('0x10')][_0x2eac('0x12')])return _0x19b9b4();else return _0x14b7c5[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x2eac('0x18')});};router[_0x2eac('0x19')](_0x2eac('0x1a'),function(_0xd459e3,_0x2b01e8){var _0x8c480d=_0xd459e3[_0x2eac('0x1b')][_0x2eac('0x1c')];var _0x3ca222=_0xd459e3[_0x2eac('0x1b')][_0x2eac('0x1d')];var _0x23ffd4=_0x2eac('0x1e');var _0x5999b9=storj[_0x2eac('0x1f')](_0x23ffd4);_0x5999b9[_0x2eac('0x20')]({'email':_0x8c480d,'password':_0x3ca222},function(_0x3124e1){if(_0x3124e1){return _0x2b01e8[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x3124e1['message']});}_0x2b01e8[_0x2eac('0x16')]({'status':_0x2eac('0x21'),'message':_0x2eac('0x22')});});});router[_0x2eac('0x19')](_0x2eac('0x23'),function(_0x1f3dc9,_0x473a00,_0x204d24){var _0x44e3ac=_0x1f3dc9[_0x2eac('0x1b')][_0x2eac('0x1c')];var _0x18e637=_0x1f3dc9[_0x2eac('0x1b')][_0x2eac('0x1d')];console[_0x2eac('0xe')](_0x2eac('0x24'));var _0x46ee4f=storj[_0x2eac('0x25')]();console[_0x2eac('0xe')]('Generating\x20Storj\x20keypair...');client=storj[_0x2eac('0x1f')](api,{'basicAuth':{'email':_0x44e3ac,'password':_0x18e637}});if(!client){console[_0x2eac('0x26')]('User\x20is\x20not\x20authenticated.\x20Authenticate\x20with\x20basic\x20auth,\x20or\x20with\x20keypair\x20auth\x20if\x20you\x27ve\x20already\x20generated\x20a\x20keypair');return _0x473a00[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x2eac('0x27')});}console[_0x2eac('0xe')](_0x2eac('0x28'));client[_0x2eac('0x29')](_0x46ee4f[_0x2eac('0x2a')](),function(_0x4d17c3){if(_0x4d17c3){return _0x473a00['send']({'status':_0x2eac('0x17'),'message':_0x4d17c3[_0x2eac('0x2b')]});}console[_0x2eac('0xe')](_0x2eac('0x2c'));fs['appendFileSync']('./.env',_0x2eac('0x2d')+_0x46ee4f[_0x2eac('0x2e')]());fs[_0x2eac('0x2f')]('./private.key',_0x46ee4f[_0x2eac('0x2e')]());_0x1f3dc9['session'][_0x2eac('0x11')]=!![];_0x1f3dc9[_0x2eac('0x10')]['tmpKey']=_0x46ee4f[_0x2eac('0x2e')]();console['log'](_0x2eac('0x30')+_0x46ee4f[_0x2eac('0x2e')]());_0x473a00[_0x2eac('0x16')]({'status':'success','message':_0x2eac('0x31'),'keypair':_0x46ee4f['getPrivateKey']()});});});router[_0x2eac('0x32')]('/generate/keypair/:user/:pass',function(_0x5a234e,_0x169d12,_0x2694fd){var _0x864d71=_0x5a234e[_0x2eac('0x33')][_0x2eac('0x1c')];var _0x55359f=_0x5a234e['params'][_0x2eac('0x1d')];console[_0x2eac('0xe')](_0x2eac('0x24'));var _0x149583=storj[_0x2eac('0x25')]();console[_0x2eac('0xe')](_0x2eac('0x34'));client=storj[_0x2eac('0x1f')](api,{'basicAuth':{'email':_0x864d71,'password':_0x55359f}});if(!client){console[_0x2eac('0x26')](_0x2eac('0x35'));return _0x169d12['send']({'status':_0x2eac('0x17'),'message':_0x2eac('0x27')});}console[_0x2eac('0xe')](_0x2eac('0x28'));client[_0x2eac('0x29')](_0x149583['getPublicKey'](),function(_0x4c0d90){if(_0x4c0d90){return _0x169d12[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x4c0d90[_0x2eac('0x2b')]});}console['log'](_0x2eac('0x2c'));fs[_0x2eac('0x36')](_0x2eac('0x37'),_0x2eac('0x2d')+_0x149583['getPrivateKey']());fs['writeFileSync'](_0x2eac('0x38'),_0x149583[_0x2eac('0x2e')]());_0x5a234e[_0x2eac('0x10')]['authed']=!![];_0x5a234e[_0x2eac('0x10')][_0x2eac('0x12')]=_0x149583[_0x2eac('0x2e')]();console[_0x2eac('0xe')](_0x2eac('0x30')+_0x149583['getPrivateKey']());_0x169d12[_0x2eac('0x16')]({'status':_0x2eac('0x21'),'message':'Keypair\x20generated','keypair':_0x149583[_0x2eac('0x2e')]()});});});router[_0x2eac('0x32')](_0x2eac('0x39'),auth,function(_0xf368c3,_0x5e1b5e,_0x533e00){_0xf368c3[_0x2eac('0x10')][_0x2eac('0x3a')]();_0x5e1b5e['send']('logout\x20success!');});router[_0x2eac('0x32')]('/',auth,function(_0x558501,_0x3acf9e,_0x1bef49){_0x3acf9e[_0x2eac('0x13')](_0x2eac('0x3b'),{'title':_0x2eac('0x3c')});});router[_0x2eac('0x19')]('/keypair',function(_0x59184c,_0x13233d){separator();var _0x5e83a1=_0x59184c[_0x2eac('0x1b')][_0x2eac('0x3d')];try{var _0x2cf1b3=storj[_0x2eac('0x25')](_0x5e83a1);console[_0x2eac('0xe')](_0x2eac('0x3e'));client=storj[_0x2eac('0x1f')](api,{'keyPair':_0x2cf1b3});console[_0x2eac('0xe')](_0x2eac('0x3f'));_0x59184c[_0x2eac('0x10')][_0x2eac('0x11')]=!![];_0x59184c[_0x2eac('0x10')][_0x2eac('0x12')]=_0x5e83a1;console[_0x2eac('0xe')](_0x2eac('0x30')+_0x5e83a1);return _0x13233d[_0x2eac('0x16')]({'status':_0x2eac('0x21'),'message':_0x2eac('0x40')});}catch(_0x5bd5dd){return _0x13233d[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x5bd5dd[_0x2eac('0x2b')]});}});router['post'](_0x2eac('0x41'),function(_0x485a77,_0x241d78){separator();var _0x4c3394=_0x485a77[_0x2eac('0x1b')][_0x2eac('0x42')];var _0x4b6908=_0x485a77[_0x2eac('0x1b')][_0x2eac('0x43')];var _0x1ce77e=_0x485a77[_0x2eac('0x1b')][_0x2eac('0x3d')];console[_0x2eac('0xe')]('hash:\x20'+_0x4c3394);console[_0x2eac('0xe')](_0x2eac('0x44')+_0x4b6908);decryptedKey=decrypt(_0x4b6908,_0x4c3394);console['log'](_0x2eac('0x45')+decryptedKey);try{var _0x25e9a3=storj[_0x2eac('0x25')](decryptedKey);console[_0x2eac('0xe')](_0x2eac('0x3e'));client=storj[_0x2eac('0x1f')](api,{'keyPair':_0x25e9a3});console[_0x2eac('0xe')](_0x2eac('0x3f'));_0x485a77[_0x2eac('0x10')][_0x2eac('0x11')]=!![];_0x485a77[_0x2eac('0x10')][_0x2eac('0x12')]=decryptedKey;console['log'](_0x2eac('0x30')+decryptedKey);return _0x241d78[_0x2eac('0x16')]({'status':_0x2eac('0x21'),'message':'generated\x20hash'});}catch(_0x5f3a32){return _0x241d78[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x5f3a32[_0x2eac('0x2b')]});}});router[_0x2eac('0x19')](_0x2eac('0x46'),function(_0x52ff46,_0x3e0283){separator();var _0x5c8ce9={'name':_0x52ff46[_0x2eac('0x1b')]['driveID']};console[_0x2eac('0xe')](_0x2eac('0x47')+_0x5c8ce9);client[_0x2eac('0x48')](_0x5c8ce9,function(_0x12d3d0,_0x9a139d){if(_0x12d3d0){return _0x3e0283['send']({'status':_0x2eac('0x17'),'message':_0x12d3d0[_0x2eac('0x2b')]});}console['log'](_0x2eac('0x49'),_0x2eac('0x4a'),[_0x9a139d['id'],_0x9a139d[_0x2eac('0x4b')],_0x9a139d[_0x2eac('0x4c')],_0x9a139d[_0x2eac('0x4d')]]);_0x3e0283[_0x2eac('0x16')]({'status':_0x2eac('0x21'),'message':_0x2eac('0x4e')+_0x9a139d['id']+'created'});});});router[_0x2eac('0x32')](_0x2eac('0x4f'),auth,function(_0x5577e1,_0x149770){separator();console[_0x2eac('0xe')](_0x2eac('0x50'));client['getBuckets'](function(_0xce78dc,_0x3f4098){if(_0xce78dc){return _0x149770['send']({'status':_0x2eac('0x17'),'message':_0xce78dc[_0x2eac('0x2b')]});}if(empty(_0x3f4098)){return _0x149770[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x2eac('0x51')});}console[_0x2eac('0xe')](_0x2eac('0x52'),_0x3f4098);_0x149770['status'](0xc8)[_0x2eac('0x16')]({'status':_0x2eac('0x21'),'message':_0x2eac('0x53'),'buckets':_0x3f4098});});});router[_0x2eac('0x32')]('/upload',auth,function(_0x46f910,_0x2935a6,_0x47c534){_0x2935a6[_0x2eac('0x54')](path[_0x2eac('0x55')](__dirname,_0x2eac('0x56')));});router['post'](_0x2eac('0x57'),function(_0x1b031f,_0x42f3ab){separator();var _0x272460=_0x2eac('0x58');if(!fs[_0x2eac('0x59')](_0x272460)){fs['mkdirSync'](_0x272460);}var _0x41cf6a=new formidable[(_0x2eac('0x5a'))]();_0x41cf6a['multiples']=!![];_0x41cf6a[_0x2eac('0x5b')]=path[_0x2eac('0x55')](__dirname,_0x2eac('0x5c'));var _0x25291b;_0x41cf6a[_0x2eac('0x5d')](_0x1b031f,function(_0x4e4214,_0x549266,_0x56164b){_0x25291b=_0x549266[_0x2eac('0x5e')];});_0x41cf6a['on'](_0x2eac('0x5f'),function(_0x4fdbfc,_0x4e3ab0){fs[_0x2eac('0x60')](_0x4e3ab0[_0x2eac('0x7')],path[_0x2eac('0x55')](_0x41cf6a[_0x2eac('0x5b')],_0x4e3ab0[_0x2eac('0x4b')]));var _0x16c64e=path[_0x2eac('0x55')](path[_0x2eac('0x55')](__dirname,_0x2eac('0x5c')),_0x4e3ab0[_0x2eac('0x4b')]);var _0x4f8945=_0x2eac('0x61')+_0x4e3ab0[_0x2eac('0x4b')]+_0x2eac('0x62');var _0x3bf369=getFileKey(STORJ_EMAIL,_0x25291b,_0x4e3ab0[_0x2eac('0x4b')]);var _0x25bd53=new storj[(_0x2eac('0x63'))](_0x3bf369);fs[_0x2eac('0x64')](_0x16c64e)[_0x2eac('0x65')](_0x25bd53)[_0x2eac('0x65')](fs[_0x2eac('0x66')](_0x4f8945))['on'](_0x2eac('0x67'),function(){console[_0x2eac('0xe')]('Finished\x20encrypting');client['createToken'](_0x25291b,_0x2eac('0x68'),function(_0x268e9c,_0x377308){if(_0x268e9c){console[_0x2eac('0xe')](_0x2eac('0x69'),_0x268e9c[_0x2eac('0x2b')]);}console[_0x2eac('0xe')](_0x2eac('0x6a'),_0x377308[_0x2eac('0x6b')]);console[_0x2eac('0xe')](_0x2eac('0x6c'));client[_0x2eac('0x6d')](_0x25291b,_0x377308[_0x2eac('0x6b')],_0x4f8945,function(_0x15f6f5,_0x2e0f89){if(_0x15f6f5){return console[_0x2eac('0xe')](_0x2eac('0x69'),_0x15f6f5[_0x2eac('0x2b')]);}console['log'](_0x2eac('0x6e'));console[_0x2eac('0xe')](_0x2eac('0x6f'));fs['unlink'](_0x4f8945,function(_0x569d7d){if(_0x569d7d){return console[_0x2eac('0xe')](_0x569d7d);}console[_0x2eac('0xe')](_0x2eac('0x70'));});console[_0x2eac('0xe')](_0x2eac('0x71')+_0x2e0f89[_0x2eac('0x4b')]+'\x20successfully\x20uploaded\x20to\x20'+_0x25291b);_0x42f3ab[_0x2eac('0x72')](0xc8)[_0x2eac('0x16')](_0x2e0f89);});});});});});router[_0x2eac('0x19')](_0x2eac('0x73'),authAJAX,function(_0x404c1a,_0x271ffd){separator();var _0x57b77f=_0x404c1a[_0x2eac('0x1b')][_0x2eac('0x5e')];console[_0x2eac('0xe')](_0x2eac('0x47')+_0x57b77f);client[_0x2eac('0x74')](_0x57b77f,function(_0x271784,_0x227854){if(_0x271784){return _0x271ffd[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x271784[_0x2eac('0x2b')]});}if(empty(_0x227854)){return _0x271ffd[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x2eac('0x75')});}console[_0x2eac('0xe')](_0x2eac('0x76'),_0x227854);return _0x271ffd[_0x2eac('0x16')]({'status':'success','message':'Got\x20drive\x20contents','files':_0x227854});});});router[_0x2eac('0x32')](_0x2eac('0x77'),function(_0x2360c6,_0x3dd4e9){separator();client[_0x2eac('0x78')](function(_0xccfa61,_0x363f9d){if(_0xccfa61){return console[_0x2eac('0xe')](_0x2eac('0x69'),_0xccfa61[_0x2eac('0x2b')]);}var _0x52b05f=_0x363f9d[0x0]['id'];console[_0x2eac('0xe')](_0x2eac('0x79'),_0x52b05f);client[_0x2eac('0x74')](_0x52b05f,function(_0x5c242f,_0xac33cc){if(_0x5c242f){return console[_0x2eac('0xe')](_0x2eac('0x69'),_0x5c242f[_0x2eac('0x2b')]);}var _0x1baaae=_0xac33cc['find'](function(_0x10889c){return _0x10889c[_0x2eac('0x7a')][_0x2eac('0x7b')](_0x58d009);});var _0x4210a0=_0x1baaae['id'];var _0x58d009=_0x2eac('0x7c');var _0x36a89e=getFileKey(STORJ_EMAIL,_0x52b05f,_0x58d009);var _0x38f878=fs[_0x2eac('0x66')]('./public/grumpy-dwnld.txt');var _0x46615d=new storj[(_0x2eac('0x7d'))](_0x36a89e);var _0x45d658=0x0;console['log'](_0x2eac('0x7e'));client[_0x2eac('0x7f')](_0x52b05f,_0x4210a0,{'exclude':[]},function(_0x59c532,_0x2858be){if(_0x59c532){return console[_0x2eac('0xe')](_0x2eac('0x69'),_0x59c532[_0x2eac('0x2b')]);}_0x2858be['on'](_0x2eac('0x69'),function(_0x42ece4){console['log'](_0x2eac('0x26'),_0x2eac('0x80'),[_0x42ece4[_0x2eac('0x2b')]]);fs['unlink'](filepath,function(_0x16c061){if(_0x16c061){return console[_0x2eac('0xe')]('error','Failed\x20to\x20unlink\x20partial\x20file.');}if(!_0x42ece4[_0x2eac('0x81')]){return;}});})[_0x2eac('0x65')](through(function(_0x41f776){_0x45d658+=_0x41f776[_0x2eac('0x82')];console[_0x2eac('0xe')](_0x2eac('0x49'),_0x2eac('0x83'),[_0x45d658,_0x2858be[_0x2eac('0x84')]]);this[_0x2eac('0x85')](_0x41f776);}))[_0x2eac('0x65')](_0x46615d)[_0x2eac('0x65')](_0x38f878);});_0x38f878['on'](_0x2eac('0x67'),function(){console[_0x2eac('0xe')]('Finished\x20downloading\x20file!');_0x3dd4e9['status'](0xc8)[_0x2eac('0x16')](_0x2eac('0x86'));})['on'](_0x2eac('0x69'),function(_0x2fae63){console[_0x2eac('0xe')](_0x2eac('0x69'),_0x2fae63['message']);});});});});router[_0x2eac('0x19')](_0x2eac('0x77'),authAJAX,function(_0xa4fe8d,_0x246398){separator();var _0x559588=_0x2eac('0x87');if(!fs['existsSync'](_0x559588)){fs[_0x2eac('0x88')](_0x559588);}var _0x125d7d=_0xa4fe8d['body'][_0x2eac('0x5e')];var _0xa05262=_0xa4fe8d[_0x2eac('0x1b')][_0x2eac('0x89')];var _0x20ce9d=_0xa4fe8d[_0x2eac('0x1b')][_0x2eac('0x8a')];var _0x5af661=_0xa4fe8d[_0x2eac('0x1b')][_0x2eac('0x8b')];console['log'](_0x125d7d+',\x20'+_0xa05262+',\x20'+_0x20ce9d+',\x20'+_0x5af661);var _0x1c58ee=getFileKey(STORJ_EMAIL,_0x125d7d,_0x20ce9d);var _0x4c98e5=_0x559588+'/'+_0x20ce9d;var _0x503403=fs['createWriteStream'](_0x559588+'/'+_0x20ce9d);var _0x17c8d0=new storj[(_0x2eac('0x7d'))](_0x1c58ee);var _0x27ebcf=0x0;console[_0x2eac('0xe')](_0x2eac('0x7e'));try{client['createFileStream'](_0x125d7d,_0xa05262,{'exclude':[]},function(_0x5e6674,_0x450c75){if(_0x5e6674){return _0x246398[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x5e6674[_0x2eac('0x2b')]});}_0x450c75['on'](_0x2eac('0x69'),function(_0x1c7b08){console[_0x2eac('0xe')](_0x2eac('0x26'),_0x2eac('0x80'),[_0x1c7b08[_0x2eac('0x2b')]]);fs[_0x2eac('0x8c')](_0x4c98e5,function(_0x5306dc){if(_0x5306dc){return _0x246398[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x2eac('0x8d')});}if(!_0x1c7b08[_0x2eac('0x81')]){return;}});})[_0x2eac('0x65')](through(function(_0x1f4c0e){_0x27ebcf+=_0x1f4c0e[_0x2eac('0x82')];console[_0x2eac('0xe')]('info',_0x2eac('0x83'),[_0x27ebcf,_0x450c75[_0x2eac('0x84')]]);this['queue'](_0x1f4c0e);}))['pipe'](_0x17c8d0)[_0x2eac('0x65')](_0x503403);});}catch(_0x33341a){return _0x246398[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x33341a['message']});}_0x503403['on'](_0x2eac('0x67'),function(){console[_0x2eac('0xe')]('Finished\x20downloading\x20file!'+_0x503403);_0x246398['download'](_0x4c98e5);return _0x246398[_0x2eac('0x16')]({'status':_0x2eac('0x21'),'message':_0x2eac('0x8e')});})['on'](_0x2eac('0x69'),function(_0x421f06){return _0x246398[_0x2eac('0x16')]({'status':_0x2eac('0x17'),'message':_0x421f06[_0x2eac('0x2b')]});});});router[_0x2eac('0x32')](_0x2eac('0x8f'),auth,function(_0x4848d4,_0x50d643){var _0x5c2d1f='./downloads';if(!fs['existsSync'](_0x5c2d1f)){fs[_0x2eac('0x88')](_0x5c2d1f);}var _0x33a372=_0x5c2d1f+'/'+_0x4848d4[_0x2eac('0x33')]['fp'];console['log'](_0x2eac('0x90')+_0x33a372);_0x50d643[_0x2eac('0x91')](_0x33a372);});function getFileKey(_0x2068d7,_0x49027d,_0x444097){console[_0x2eac('0xe')](_0x2eac('0x92'));generateMnemonic();var _0x3c36fb=storj_utils['calculateBucketId'](_0x2068d7,_0x49027d);var _0x4beede=storj_utils[_0x2eac('0x93')](_0x49027d,_0x444097);var _0x1d9996=keyring['generateFileKey'](_0x3c36fb,_0x4beede);console[_0x2eac('0xe')](_0x2eac('0x94'));return _0x1d9996;}function generateMnemonic(){var _0x2574b0=function(){var _0x2512a3=!![];return function(_0x4d62cf,_0x160f20){var _0x28d04d=_0x2512a3?function(){if(_0x160f20){var _0x2d1d6f=_0x160f20['apply'](_0x4d62cf,arguments);_0x160f20=null;return _0x2d1d6f;}}:function(){};_0x2512a3=![];return _0x28d04d;};}();var _0x3794c0=_0x2574b0(this,function(){var _0x166d93=function(){return'\x64\x65\x76';},_0x301f09=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x3b828f=function(){var _0x2cc4b4=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x2cc4b4['\x74\x65\x73\x74'](_0x166d93['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x18dba3=function(){var _0x3afa80=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x3afa80['\x74\x65\x73\x74'](_0x301f09['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x48b97a=function(_0x2b7158){var _0x328881=~-0x1>>0x1+0xff%0x0;if(_0x2b7158['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x328881)){_0x2abdc7(_0x2b7158);}};var _0x2abdc7=function(_0x59a2c8){var _0x52923f=~-0x4>>0x1+0xff%0x0;if(_0x59a2c8['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x52923f){_0x48b97a(_0x59a2c8);}};if(!_0x3b828f()){if(!_0x18dba3()){_0x48b97a('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x48b97a('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x48b97a('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x3794c0();var _0x36ecb1=function(){var _0x3d64bc=!![];return function(_0x45f280,_0x1ea6b9){var _0x251eed=_0x3d64bc?function(){if(_0x1ea6b9){var _0x30833c=_0x1ea6b9[_0x2eac('0x95')](_0x45f280,arguments);_0x1ea6b9=null;return _0x30833c;}}:function(){};_0x3d64bc=![];return _0x251eed;};}();var _0x4dcf82=_0x36ecb1(this,function(){var _0x53cd65=function(){};var _0x69ea9b;try{var _0x18d3a1=Function(_0x2eac('0x96')+_0x2eac('0x97')+');');_0x69ea9b=_0x18d3a1();}catch(_0x12713f){_0x69ea9b=window;}if(!_0x69ea9b['console']){_0x69ea9b['console']=function(_0x3807a6){var _0x2531ab={};_0x2531ab[_0x2eac('0xe')]=_0x3807a6;_0x2531ab[_0x2eac('0x26')]=_0x3807a6;_0x2531ab[_0x2eac('0x98')]=_0x3807a6;_0x2531ab[_0x2eac('0x49')]=_0x3807a6;_0x2531ab[_0x2eac('0x69')]=_0x3807a6;_0x2531ab['exception']=_0x3807a6;_0x2531ab[_0x2eac('0x99')]=_0x3807a6;return _0x2531ab;}(_0x53cd65);}else{_0x69ea9b[_0x2eac('0x9a')][_0x2eac('0xe')]=_0x53cd65;_0x69ea9b['console'][_0x2eac('0x26')]=_0x53cd65;_0x69ea9b[_0x2eac('0x9a')][_0x2eac('0x98')]=_0x53cd65;_0x69ea9b[_0x2eac('0x9a')][_0x2eac('0x49')]=_0x53cd65;_0x69ea9b['console'][_0x2eac('0x69')]=_0x53cd65;_0x69ea9b[_0x2eac('0x9a')]['exception']=_0x53cd65;_0x69ea9b[_0x2eac('0x9a')][_0x2eac('0x99')]=_0x53cd65;}});_0x4dcf82();console[_0x2eac('0xe')]('Attempting\x20to\x20retrieve\x20mnemonic');var _0x5b1f52=keyring[_0x2eac('0x9b')]();var _0x1aac29;if(_0x5b1f52){console['log'](_0x2eac('0x9c'),_0x5b1f52);}else{console['log'](_0x2eac('0x9d'));try{keyring['importMnemonic'](process[_0x2eac('0xb')]['STORJ_MNEMONIC']);}catch(_0x3c0584){console[_0x2eac('0xe')](_0x2eac('0x9e'),_0x3c0584);try{keyring[_0x2eac('0x9f')](keyring[_0x2eac('0xa0')]());}catch(_0x1c21c7){console[_0x2eac('0xe')](_0x2eac('0xa0'),_0x1c21c7);}}}console['log'](_0x2eac('0xa1'));if(!process[_0x2eac('0xb')]['STORJ_MNEMONIC']){console[_0x2eac('0xe')](_0x2eac('0xa2'));fs[_0x2eac('0x36')](_0x2eac('0x37'),_0x2eac('0xa3'));console[_0x2eac('0xe')](_0x2eac('0xa4'));return;}}router['get'](_0x2eac('0xa5'),auth,function(_0x5b0900,_0x17b87f,_0x53d673){_0x17b87f['render'](_0x2eac('0xa6'),{'title':_0x2eac('0x3c')});});router[_0x2eac('0x19')]('/inherit',function(_0x3a3ed9,_0x43f520,_0x4bd972){var _0x1a1afd=_0x3a3ed9['body'][_0x2eac('0xa7')];var _0x1741c4=_0x3a3ed9['body'][_0x2eac('0xa8')];var _0x12f0af=_0x3a3ed9['body'][_0x2eac('0xa9')];var _0x4be2c1=_0x3a3ed9[_0x2eac('0x1b')]['birth'];var _0x581135=_0x3a3ed9[_0x2eac('0x1b')][_0x2eac('0xaa')];console[_0x2eac('0xe')](_0x1a1afd+_0x1741c4+_0x12f0af+_0x4be2c1+_0x581135);var _0x55d1b8=genRandomString(0x1a);var _0x5024e4=_0x3a3ed9[_0x2eac('0x10')][_0x2eac('0x12')];console[_0x2eac('0xe')](_0x2eac('0xab')+_0x55d1b8);console[_0x2eac('0xe')](_0x2eac('0xac')+_0x5024e4);encryptedText=encrypt(_0x55d1b8,_0x5024e4);console[_0x2eac('0xe')](_0x2eac('0xad')+encryptedText);decryptedText=decrypt(_0x55d1b8,encryptedText);console[_0x2eac('0xe')](_0x2eac('0xae')+decryptedText);var _0x42d13e={'plain':_0x5024e4,'hash':encrypt(_0x55d1b8,_0x5024e4),'nSalt':_0x55d1b8};return _0x43f520[_0x2eac('0x16')]({'status':_0x2eac('0x21'),'message':_0x2eac('0x40'),'data':_0x42d13e});});function encrypt(_0x404a71,_0x8260d4){var _0x454502=crypto[_0x2eac('0xaf')](_0x2eac('0xb0'),_0x404a71);var _0x2e80cc=_0x454502[_0x2eac('0xb1')](_0x8260d4,_0x2eac('0xb2'),_0x2eac('0xb3'));_0x2e80cc+=_0x454502[_0x2eac('0xb4')]('hex');return _0x2e80cc;}function decrypt(_0x5d25b5,_0x3bb48a){var _0x580c6c=crypto[_0x2eac('0xb5')](_0x2eac('0xb0'),_0x5d25b5);var _0x499ab1=_0x580c6c['update'](_0x3bb48a,_0x2eac('0xb3'),_0x2eac('0xb2'));_0x499ab1+=_0x580c6c[_0x2eac('0xb4')]('utf-8');return _0x499ab1;}var genRandomString=function(_0x5268b9){return crypto[_0x2eac('0xb6')](Math['ceil'](_0x5268b9/0x2))[_0x2eac('0xb7')](_0x2eac('0xb3'))[_0x2eac('0xb8')](0x0,_0x5268b9);};module[_0x2eac('0xb9')]=router;var _0x40c5d4=function(){function _0x5ceb5d(_0x41c152){if((''+_0x41c152/_0x41c152)['length']!==0x1||_0x41c152%0x14===0x0){(function(){}[_0x2eac('0xba')]('debugger')());}else{(function(){}['constructor'](_0x2eac('0xbb'))());}_0x5ceb5d(++_0x41c152);}try{_0x5ceb5d(0x0);}catch(_0x2529b8){}};_0x40c5d4();