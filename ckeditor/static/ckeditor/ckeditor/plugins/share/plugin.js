CKEDITOR.plugins.add('share',
{
    init: function(editor)
    {
        editor.addCommand( 'addShareUrl',
                            new CKEDITOR.command( editor,
                                {
                                    exec : function( editor )
                                    {
                                        var selection = editor.getSelection(),
                                        ranges = selection.getRanges( true ),
                                        share;
                                        if (typeof(share_url) == "undefined") {
                                            share = "{{ share_url }}";
                                        } else
                                            share = share_url;
                                        if ( ranges.length == 1 && ranges[0].collapsed )
                                        {
                                            var text = new CKEDITOR.dom.text( "{{ share_url }}", editor.document );
                                            ranges[0].insertNode( text );
                                            ranges[0].selectNodeContents( text );
                                            selection.selectRanges( ranges );
                                        }

                                        var style = new CKEDITOR.style( { element : 'a', attributes : { href: "{{ share_url }}" } } );
                                        style.type = CKEDITOR.STYLE_INLINE;
                                        style.apply( editor.document );
                                    }
                                })
                         );

        editor.ui.addButton('Share',
            {
                label: 'Share URL',
                command: 'addShareUrl',
                icon: this.path + 'images/icon.png'
        });
    }
});
