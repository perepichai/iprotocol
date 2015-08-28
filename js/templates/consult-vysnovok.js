var docDefinition = {};
function valueProtocol() {

    docDefinition = {
        pageSize: 'A4',
        header: '   Клініка',

        content: [
            // if you don't need styles, you can use a simple string to define a paragraph
            'Консультативне заключення терапевта',

            {
                text: [
                    'ФІО пацієнта: ',
                    { text: document.getElementById('secondName').value +' '+ document.getElementById('firstName').value +' '+ document.getElementById('thirdName').value, fontSize: 14 }

                ]
            },

            {
                text: [
                    'Скарги: ',
                    { text: document.getElementById('skargy').value, fontSize: 13 }
                ]
            },

            {
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: [ '*', 'auto', 100, '*' ],

                    body: [
                        [ 'Перший', 'Другий', 'Третій', 'Останній' ],
                        [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                        [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
                    ]
                }
            }



        ]
    }
}
