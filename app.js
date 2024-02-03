$(document).ready(function(){
    
    const textTounicode = (inputText) => {
        let output = "";
        for (i in inputText) {
            output += inputText.charCodeAt(i) + " ";
        }
        output = output.slice(0, -1);
        return output;
       
    }

    const textToBinary = (inputText) => {
        let output = "";
        for (i in inputText) {
            output += inputText.charCodeAt(i).toString(2).padStart(8, '0') + " ";
        }
        output = output.slice(0, -1);
        return output;
    }

    const unicodeToBinary = (inputText) => {
        let output = "";
        let words = inputText.split(" ");
        for (i in words) {
            output += parseInt(words[i]).toString(2).padStart(8, '0') + " ";
        }
        output = output.slice(0, -1);
        return output;
    }

    const unicodeToText = (inputText) => {
        let output = "";
        let words = inputText.split(" ");
        for (i in words) {
            output += String.fromCharCode(words[i]);
        }
        return output;
    }

    const binaryToText = (inputText) => {
        let unicode = "";
        let output = "";
        let words = inputText.split(" ");
        for (i in words) {
            unicode += parseInt(words[i], 2) + " ";
        }
        unicode = unicode.slice(0, -1);
        return unicodeToText(unicode);
    }

    const binaryToUnicode = (inputText) => {
        let output = "";
        let firstStep = binaryToText(inputText);
        output = textTounicode(firstStep);
        return output;
    }

    $("#input").keyup(function () {
        const from = $("#inputType").find(":selected").val();
        const to = $("#outputType").find(":selected").val();
        
        $("#output").val(
            (from === "text" && to === "unicode") ? textTounicode(this.value) :
            (from === "text" && to === "binary") ? textToBinary(this.value) :
            (from === "unicode" && to === "binary") ? unicodeToBinary(this.value) :
            (from === "unicode" && to === "text") ? unicodeToText(this.value) :
            (from === "binary" && to === "unicode") ? binaryToUnicode(this.value) : 
            (from === "binary" && to === "text") ? binaryToText(this.value) : 
            ""
        );
        
        
    })
    })