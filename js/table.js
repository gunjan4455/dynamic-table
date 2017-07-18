function app() {
    this.dynamicTable = document.getElementById("dynamicTable");
}

app.prototype = {
    constructor: app,

    createTable: function(value, id) {
        if (id === "row")
            $('#rowBar').val(value);
        else if (id === "col")
            $('#columnBar').val(value);
        this.dynamicTable.innerHTML= "";
        var mytable = $('<div></div>').attr({ id: "basicTable" });
        var rows = new Number($("#rowBar").val());
        var cols = new Number($("#columnBar").val());
        $('#row').val(rows);
        $('#col').val(cols);
        for (var i = 0; i < rows; i++) {
            var row = $('<div></div>').attr({ class: "rows" }).appendTo(mytable);
            for (var j = 0; j < cols; j++) {
                $('<div class="colElements"></div>').text("tab").appendTo(row);
            }
        }
        mytable.appendTo("#dynamicTable");
    }
// 	renderTable: function(rows, cols){
// 		var tableRow, tableCol;

// 		 // clearing already present row

// 		for(let i=0; i< rows; i++){
// 			tableRow= this.getElement('tableRow');
// 			this.tableDiv.appendChild(tableRow);
// 			for(let j=0; j< cols;j++){
// 				tableCol= this.getElement('tableCol');
// 				tableRow.appendChild(tableCol);
// 			}
// 		}
// 	},

// 	getElement: function(className){
// 		var block= document.createElement("div");
// 		block.classList.add(className);
// 		return block;
// 	}
}

var myApp = new app();