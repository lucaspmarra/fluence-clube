function afficherNomenclature(liste, frameAffichage) {
	frameAffichage.location.href=liste.options[liste.selectedIndex].value;
}
function afficherSchema(liste, frameAffichage,full,print,blank,printNB) {
        var urlDessin = liste.options[liste.selectedIndex].value;
        var index = urlDessin.indexOf("#");
        urlDessin = urlDessin.toUpperCase();    

       if(urlDessin == "../ERREUR.html"){
                document.images["full"].src = blank;
                document.images["fullPrint"].src = blank;
                document.images["fullPrintNB"].src = blank;
       }else{                                               
                document.images["full"].src = full;
                                   
               
               if ((urlDessin.indexOf("A4") == -1)){
                       
                document.images["fullPrint"].src = print;
                document.images["fullPrintNB"].src = printNB;
               }else{                                                                
                    document.images["fullPrint"].src = blank;
                    document.images["fullPrintNB"].src = blank;    
               }
       }


        if(index == -1)
                index = urlDessin.length;

        if(navigator.appName.indexOf("Netscape") != -1)
                frameAffichage.location.href=urlDessin;
        else
                frameAffichage.location.href=urlDessin.substring(0,index);
}
function afficherPleinEcran(liste,blank)
{
	w = screen.width - 10;
   h = screen.height - 30;
	var urlDessin = liste.options[liste.selectedIndex].value;
	urlDessin = urlDessin.toUpperCase();
	var index = urlDessin.indexOf("#");
	var indexBlank = document.images["full"].src.indexOf("BLANK");	
	if(urlDessin != "../ERREUR.HTM" && indexBlank == -1){
		if(index == -1)
			index = urlDessin.length;
	
		if(navigator.appName.indexOf("Netscape") != -1)
			window.open(urlDessin,"Schema","width="+w+",height="+h+",left=0,top=0");
		else
			window.open(urlDessin.substring(0,index),"Schema","width="+w+",height="+h+",left=0,top=0");
		}
}


function afficherPleinEcranPrint(liste,blank)
{
	w = screen.width - 10;
   h = screen.height - 30;
  
	var urlDessin = liste.options[liste.selectedIndex].value;
	urlDessin = urlDessin.toUpperCase();
	var index = urlDessin.indexOf("#");
	var lengthDessin = urlDessin.length;
	var index1 = urlDessin.indexOf(".PDF");
	var indexBlank = document.images["fullPrint"].src.indexOf("BLANK");
	if(urlDessin != "../ERREUR.HTM" && indexBlank == -1){
		if(index == -1){
			index = urlDessin.length;
		}
		/* FDE 07/04/04 */
		//urlDessin = urlDessin.substring(0,index1)+"_print"+urlDessin.substring(index1,index);
		urlDessin = urlDessin.substring(0,index1)+"_PRINT"+urlDessin.substring(index1,index);
		window.open(urlDessin,"Schema","width="+w+",height="+h+",left=0,top=0");			
	}
}
function afficherPleinEcranPrintNB(liste,blank)
{
	w = screen.width - 10;
   h = screen.height - 30;
  
	var urlDessin = liste.options[liste.selectedIndex].value;
	urlDessin = urlDessin.toUpperCase();
	var index = urlDessin.indexOf("#");
	var lengthDessin = urlDessin.length;
	var index1 = urlDessin.indexOf(".PDF");
	var indexBlank = document.images["fullPrintNB"].src.indexOf("BLANK");
	if(urlDessin != "../ERREUR.HTM" && indexBlank == -1){
		if(index == -1){
			index = urlDessin.length;
		}
		/* NQU 06/02/2004 RC_MAJ */
		//urlDessin = urlDessin.substring(0,index1)+"_printNB"+urlDessin.substring(index1,index);
		urlDessin = urlDessin.substring(0,index1)+"_PRINTNB"+urlDessin.substring(index1,index);
		window.open(urlDessin,"Schema","width="+w+",height="+h+",left=0,top=0");			
	}
}
function imprimer() {
	window.print();
}

function retourArriere() {
	history.back()
} 

/* TKT Lot 9 2007 : debut */
function exec (command, params) {
 
  if (command == null ||  command == "" ){
  	return;
  }
  
  command = command + " " + params;
  
  if (document.layers && navigator.javaEnabled()) {
    window._command = command;
    window.oldOnError = window.onerror;
    window.onerror = function (err) {
      if (err.indexOf ("User didn't grant") != -1) {
        alert('command execution of ' + window._command + ' disallowed by user.');
        return true;
      }
      else return false;
    }
    netscape.security.PrivilegeManager.enablePrivilege('UniversalExecAccess');
    java.lang.Runtime.getRuntime().exec(command);
    window.onerror = window.oldOnError;
  }
  else if (document.all) {
    window.oldOnError = window.onerror;
    window._command = command;
    window.onerror = function (err) {
      if (err.indexOf('utomation') != -1) {
        alert('command execution of ' + window._command + ' disallowed by user.');
        return true;
      }
      else return false;
    };
    var wsh = new ActiveXObject('WScript.Shell');
    if (wsh)
      wsh.Run(command);
    window.onerror = window.oldOnError;
  }
}


function getDirectory(nb){
	var pos = 0;
	var url = new String(window.location);

	url = url.replace('\|',':')
	url = url.substring(url.lastIndexOf(":") + -1, url.length)
	
//	url = url.substring(url.indexOf("///") + 3, url.length)
//	url = url.replace('\|',':')

	for(i=0; i<nb; i++){
		pos = url.lastIndexOf("http://www.renaultftpfr.tecnologia.ws/");
		if(pos > 0 ){
			url = url.substring(0,pos);
		}
		else{
			url = null;
		}
  	}
  	return url;
}

/* TKT Lot 9 2007 : fin */