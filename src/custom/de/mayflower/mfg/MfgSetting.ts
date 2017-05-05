
    /*******************************************************************************************************************
    *   All project settings, adjustments and balancings.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgSetting
    {
        /** Desired canvas width. */
        public      static      CANVAS_WIDTH                        :number             = 900;
        /** Desired canvas height. */
        public      static      CANVAS_HEIGHT                       :number             = 500;
        /** Canvas background color. */
        public      static      CANVAS_BG_COLOR                     :string             = "white";

        /** Delay between each thread tick in milliseconds. */
        public      static      THREAD_DELAY                        :number             = 10;

        /** The player's movement speed in pixels per tick. */
        public      static      PLAYER_SPEED                        :number             = 4;
        /** The player's square size in px. */
        public      static      PLAYER_SIZE                         :number             = 50;
        /** The player's color. */
        public      static      PLAYER_COLOR                        :string             = "blue";

        /** The item's square size in px. */
        public      static      ITEM_SIZE                           :number             = 25;
        /** The item's color. */
        public      static      ITEM_COLOR                          :string             = "red";
    }