
    /*******************************************************************************************************************
    *   Handles the game logic.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgDemo
    {
        /** The canvas rendering context for all 2D drawing operations. */
        private                 canvasContext           :CanvasRenderingContext2D       = null;
        /** All obstacles the level consists of. */
        private                 items                   :Array<MfgRect>                 = null;
        /** The FPS display. */
        public                  fpsMeter                :FPSMeter                       = null;

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
            this.initCanvas();
            this.initRects();
            this.initFpsMeter();
            this.startGameLoop();
        }

        /***************************************************************************************************************
        *   Inits the canvas and appends it to the HTML body element.
        ***************************************************************************************************************/
        private initCanvas()
        {
            let canvasTag:HTMLCanvasElement = <HTMLCanvasElement>document.createElement("canvas");
            canvasTag.width                 = 900;
            canvasTag.height                = 500;
            canvasTag.style.backgroundColor = "white";

            document.body.appendChild(canvasTag);

            this.canvasContext              = <CanvasRenderingContext2D>canvasTag.getContext("2d");
        }

        /***************************************************************************************************************
        *   Inits all items for this level.
        ***************************************************************************************************************/
        private initRects():void
        {
            this.items = [
                new MfgRect( 125, 25,  75,  75,  "orange" ),
                new MfgRect( 300, 150, 120, 30,  "yellow" ),
                new MfgRect( 550, 250, 30,  120, "red"    ),
                new MfgRect( 620, 75,  150, 50,  "grey"   ),
            ];
        }

        /***************************************************************************************************************
        *   Inits the external FPS Meter.
        ***************************************************************************************************************/
        private initFpsMeter()
        {
            this.fpsMeter = new FPSMeter(
                null,
                {
                    graph:    1,
                    decimals: 1,
                    position: "absolute",
                    zIndex:   10,
                    right:    "5px",
                    top:      "auto",
                    left:     "auto",
                    bottom:   "5px",
                    margin:   "0",
                    heat:     1
                }
            );
        }

        /***************************************************************************************************************
        *   Starts the endless game loop.
        ***************************************************************************************************************/
        private startGameLoop()
        {
            window.setInterval(this.tick, 10);
        }

        /***************************************************************************************************************
        *   Handles one game tick.
        ***************************************************************************************************************/
        private tick=()=>
        {
            this.fpsMeter.tickStart();

            this.render();
            this.draw();

            this.fpsMeter.tick();
        };

        /***************************************************************************************************************
        *   Renders the current game tick.
        ***************************************************************************************************************/
        private render()
        {
            for (let item of this.items) {
                item.y += 0.5;
            }
        }

        /***************************************************************************************************************
        *   Draws the current game tick.
        ***************************************************************************************************************/
        private draw()
        {
            this.canvasContext.clearRect(0, 0, 900, 500);

            for (let item of this.items) {
                item.draw(this.canvasContext);
            }
        }
    }
