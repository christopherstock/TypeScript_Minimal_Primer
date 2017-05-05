
    /*******************************************************************************************************************
    *   The main class containing the point of entry and termination.
    *
    *   TODO ASAP include export statements into all classes!
    *   TODO ASAP wrap magic in this class into easy methods!
    *   TODO ASAP Prune images and sound.
    *   TODO ASAP Flatten package structure.
    *   TODO ASAP Prune all advanced techs.
    *   TODO ASAP Apply BAHAG code style everywhere.
    *   TODO ASAP Fix all documentations.
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
            let bodyTags:NodeListOf<HTMLBodyElement> = document.getElementsByTagName("body");
            let bodyTag :HTMLBodyElement             = bodyTags.item(0);
            let style   :CSSStyleDeclaration         = bodyTag.style;

            style.backgroundColor = "grey";
            style.textAlign       = "center";
            style.margin          = "25px";

            Mfg.game = new MfgGame();
            Mfg.game.init();
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
