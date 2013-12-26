CKEDITOR.plugins.add('social',
{
    init: function(editor)
    {
        editor.addCommand( 'addSocialLinks',
                            new CKEDITOR.command( editor,
                                {
                                    exec : function( editor )
                                    {
                                        var selection = editor.getSelection(),
                                        ranges = selection.getRanges( true ),
                                        landing;
                                        if (typeof(social_links) != "undefined") {
                                            editor.insertHtml(social_links);
                                        }
                                    }
                                })
                         );

        editor.ui.addButton('Social',
            {
                label: 'Social links',
                command: 'addSocialLinks',
                icon: this.path + 'images/icon.png'
        });
    }
});