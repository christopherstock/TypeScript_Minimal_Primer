
    /*******************************************************************************************************************
    *   The main class containing the point of entry and termination.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Mfg
    {
        /** The singleton instance of the demo. */
        public          static          demo                :MfgDemo                = null;

        /***************************************************************************************************************
        *   The application's point of entry.
        ***************************************************************************************************************/
        public static main():void
        {
            Mfg.setDocumentTitle();
            Mfg.styleHtmlBody();

            Mfg.demo = new MfgDemo();
            Mfg.demo.init();
        }

        /***************************************************************************************************************
        *   Dynamically sets the document's title.
        ***************************************************************************************************************/
        private static setDocumentTitle():void
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
