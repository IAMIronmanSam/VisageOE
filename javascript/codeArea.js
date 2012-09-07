$(document).ready(function(){
    
    
    
     var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    			//value:code.value,
				mode:'javascript',
				lineNumbers: true,
				matchBrackets: true,
				indentUnit:2,
				smartIndent:true,
				tabSize:20,
				indentWithTabs:false,
				electricChars:true,
				autoClearEmptyLines:true,
				lineWrapping:true,
				readOnly:false,
				matchBrackets:true,
				undoDepth:100
				}); 
    $('.themeClick').click(function(){
        var theme=$(this).attr('theme');
        editor.setOption('theme',theme);
        });
    
    });
        	