
    /*******************************************************************************************************************
    *   The debug system contains debug functions and debug feature toggles.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgDebug
    {
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
