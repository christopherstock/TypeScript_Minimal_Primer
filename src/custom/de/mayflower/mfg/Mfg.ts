
    /*******************************************************************************************************************
    *   The main class containing the point of entry and termination.
    *
    *   TODO ASAP Prune all advanced techs.
    *   TODO ASAP Apply BAHAG code style everywhere.
    *   TODO ASAP Fix all doc blocks.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Mfg
    {
        /** The singleton instance of the game logic. */
        public          static          game                :MfgGame                = null;

        /***************************************************************************************************************
        *   The application's point of entry.
        ***************************************************************************************************************/
        public static main():void
        {
            MfgDebug.log("Welcome to our main method.");

            Mfg.setDocumentTitle();
            Mfg.styleHtmlBody();

            Mfg.game = new MfgGame();
            Mfg.game.init();
        }

        /***************************************************************************************************************
        *   Dynamically sets the document's title.
        ***************************************************************************************************************/
        private static setDocumentTitle()
        {
            document.title = "TypeScript Minimal Primer, (c) 2017 Mayflower GmbH, v. 1.0";
        }

        /***************************************************************************************************************
        *   Dynamically applies css to the HTML body tag.
        ***************************************************************************************************************/
        private static styleHtmlBody():void
        {
            let bodyTags:NodeListOf<HTMLBodyElement> = document.getElementsByTagName("body");
            let bodyTag :HTMLBodyElement             = bodyTags.item(0);
            let style   :CSSStyleDeclaration         = bodyTag.style;

            style.backgroundColor = "grey";
            style.textAlign       = "center";
            style.margin          = "25px";
        }
    }

    /*******************************************************************************************************************
    *   Being invoked when the application starts.
    *******************************************************************************************************************/
    window.onload = function()
    {
        Mfg.main();
    };

    /*******************************************************************************************************************
    *   Being invoked when the application terminates.
    *******************************************************************************************************************/
    window.onunload = function()
    {
    };