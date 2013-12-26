CKEDITOR.plugins.add( 'bongo',
{
	init: function( editor )
	{
        // Creating an Editor Command
        editor.addCommand( 'bongoDialog', new CKEDITOR.dialogCommand( 'bongoDialog' ) );
        // Creating a Toolbar Button
        editor.ui.addButton( 'Bongo',
        {
            label: 'Info Fields',
            command: 'bongoDialog',
            icon: this.path + 'images/icon.png'
        });

        CKEDITOR.dialog.add( 'bongoDialog', function ( editor )
        {
            function c(h, fields) {
                //h.setHtml('');
                for (var j = 0; j < fields.length; j++) {
                    f_obj = d(fields[j]);

                    h.append(f_obj);
                }

            }

            function d(field) {
                var f_obj = CKEDITOR.dom.element.createFromHtml('<span class="fld">'+field+'</span>');
                f_obj.on('click', function () {
                    ins("{{ " + field+ " }}");
                });
                return f_obj;
            }

            function ins(d) {
                var i = CKEDITOR.dialog.getCurrent();

                editor.insertHtml(d);
                i.hide();
            }


            return {
                title : 'Info fields',
                minWidth : 300,
                minHeight : 200,

                contents :
                [{
                    id: 'selectFld',
                    label: 'Info Fields',
                    elements:
                    [{
                        type: 'vbox',
                        padding: 5,
                        children: [
                            {
                            type: 'html',
                            html: '<span>Please select the info field to insert into template</span>'
                            },
                            {
                            id: 'fieldsList',
                            type: 'html',
                            html: '<div class="fieldsBox"></div>'
                            }
                        ]

                    }]
                }],
                buttons: [CKEDITOR.dialog.cancelButton],
                onShow: function () {
                    var h = this.getContentElement('selectFld', 'fieldsList');
                    g = h.getElement();

                    g.setHtml('');

                    var field_list = [], _fields;
                    
                    if (typeof fields == "undefined") {
                        _fields = [];
                    } else {
                        _fields = fields;
                    }

                    if (_fields.length) {
                        c(g, _fields);
                        h.focus();
                    } else
                        g.setHtml('<div><span>Fields are not available</span></div>');


                }
            }
        });
	}
} );