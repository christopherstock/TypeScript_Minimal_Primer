
    /*******************************************************************************************************************
    *   The debug system contains debug functions and debug feature toggles.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgDebug
    {
        /** Enables debug blocks. */
        public      static      DEBUG_DRAW_BOUNDING_RECTS                   :boolean            = true;

        /***************************************************************************************************************
        *   Logs a line of output to the default console.
        *
        *   @param msg The message to log to the default console.
        ***************************************************************************************************************/
        public static log( msg:string ):void
        {
            console.log( msg );
        }
    }
