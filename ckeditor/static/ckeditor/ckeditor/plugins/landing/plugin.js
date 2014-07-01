CKEDITOR.plugins.add('landing',
{
    init: function(editor)
    {
        editor.addCommand( 'addLandingUrl',
                            new CKEDITOR.command( editor,
                                {
                                    exec : function( editor )
                                    {
                                        var selection = editor.getSelection(),
                                        ranges = selection.getRanges( true ),
                                        landing;
                                        if (typeof(landing_url) == "undefined") {
                                            landing = "{{ landing_url }}";
                                        } else
                                            landing = landing_url;
                                        if ( ranges.length == 1 && ranges[0].collapsed )
                                        {
                                            var text = new CKEDITOR.dom.text( "{{ landing_url }}", editor.document );
                                            ranges[0].insertNode( text );
                                            ranges[0].selectNodeContents( text );
                                            selection.selectRanges( ranges );
                                        }

                                        var style = new CKEDITOR.style( { element : 'a', attributes : { href: "{{ landing_url }}" } } );
                                        style.type = CKEDITOR.STYLE_INLINE;
                                        style.apply( editor.document );
                                    }
                                })
                         );

        editor.ui.addButton('Landing',
            {
                label: 'Landing Url',
                command: 'addLandingUrl',
                icon: this.path + 'images/icon.png'
        });
    }
});