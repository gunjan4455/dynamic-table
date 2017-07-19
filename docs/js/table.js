function app(){
    this.mainDiv= document.getElementById("table");
}

app.prototype= {
    constructor: app,

    updateUserInput: function(e, src, target){
        var srcValue= Number(document.getElementById(src).value);
        document.getElementById(target).value= srcValue;

        if(src.match('row')){
            this.displayTable(srcValue, Number(document.getElementById('colSlider').value));
        }
        else if(src.match('col')){
            this.displayTable(Number(document.getElementById('rowSlider').value), srcValue);
        }

    },

    displayTable: function(rows, cols){
        var tableRow, tableCol;

        this.mainDiv.innerHTML= ""; // clearing already present row

        for(let i=0; i< rows; i++){
            tableRow= this.getElement('tableRow');
            this.mainDiv.appendChild(tableRow);
            for(let j=0; j< cols;j++){
                tableCol= this.getElement('tableCol');
                tableRow.appendChild(tableCol);
            }
        }
    },

    getElement: function(className){
        var block= document.createElement("div");
        block.classList.add(className);
        return block;
    }
}

var myApp= new app();
