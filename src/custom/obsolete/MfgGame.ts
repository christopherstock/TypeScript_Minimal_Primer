
    /*******************************************************************************************************************
    *   Handles the game logic.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgGame
    {
        /** Canvas for all drawing operations. */
        public                  canvas                  :MfgCanvas                      = null;
        /** Key handling system. */
        public                  keySystem               :MfgKeySystem                   = null;
        /** Current level instance. */
        public                  level                   :MfgLevel                       = null;
        /** Current player viewport. */
        public                  camera                  :MfgCamera                      = null;
        /** Heads Up Display. */
        public                  hud                     :MfgHUD                         = null;
        /** Game loop. */
        public                  gameLoop                :MfgGameLoop                    = null;

        /***************************************************************************************************************
        *   Creates a new game logic.
        ***************************************************************************************************************/
        public constructor()
        {
        }

        /***************************************************************************************************************
        *   Inits this app from scratch.
        ***************************************************************************************************************/
        public init()
        {
            MfgDebug.log("Welcome!");

            this.initCanvas();
            this.initKeySystem();

            this.level    = new MfgLevel();
            this.camera   = new MfgCamera();
            this.hud      = new MfgHUD();

            this.gameLoop = new MfgGameLoop();
            this.gameLoop.start();
        }

        /***************************************************************************************************************
        *   Inits the canvas and appends it to the HTML body element.
        ***************************************************************************************************************/
        private initCanvas()
        {
            this.canvas = new MfgCanvas( MfgSetting.CANVAS_WIDTH, MfgSetting.CANVAS_HEIGHT );

            document.body.appendChild( this.canvas.getCanvasTag() );
        }

        /***************************************************************************************************************
        *   Inits the key system.
        ***************************************************************************************************************/
        private initKeySystem()
        {
            this.keySystem = new MfgKeySystem();
        }
    }
