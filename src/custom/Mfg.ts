
    /*******************************************************************************************************************
    *   The main class containing the point of entry and termination.
    *
    *   TODO ASAP include export statements into all classes!
    *   TODO ASAP wrap magic in this class into easy methods!
    *   TODO ASAP Prune all advanced techs.
    *   TODO ASAP Merge Canvas and Drawing class.
    *   TODO ASAP Apply BAHAG code style everywhere.
    *   TODO ASAP Fix all doc blocks.
    *   TODO ASAP Use foreach loop where possible!
    *   TODO ASAP
    *   TODO ASAP Move draw() function (fillRect) to Rect class!!
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

            Mfg.styleHtmlBody();

            Mfg.game = new MfgGame();
            Mfg.game.init();
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
