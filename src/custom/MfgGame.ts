
    /*******************************************************************************************************************
    *   Handles the game logic.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgGame
    {
        /** The canvas rendering context for all 2D drawing operations. */
        private                 canvasContext           :CanvasRenderingContext2D       = null;
        /** Key handling system. */
        private                 keySystem               :MfgKeySystem                   = null;
        /** Heads Up Display. */
        private                 hud                     :MfgHUD                         = null;
        /** The player instance. */
        private                 player                  :MfgRect                        = null;
        /** All obstacles the level consists of. */
        private                 items                   :Array<MfgRect>                 = null;

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
            this.initKeySystem();

            this.initItems();
            this.initPlayer();

            this.hud = new MfgHUD();

            window.setInterval( this.tick, MfgSetting.THREAD_DELAY );
        }

        /***************************************************************************************************************
        *   Inits the canvas and appends it to the HTML body element.
        ***************************************************************************************************************/
        private initCanvas()
        {
            let canvasTag:HTMLCanvasElement = <HTMLCanvasElement>document.createElement("canvas");
            canvasTag.width                 = MfgSetting.CANVAS_WIDTH;
            canvasTag.height                = MfgSetting.CANVAS_HEIGHT;
            canvasTag.style.backgroundColor = "white";

            document.body.appendChild( canvasTag );

            this.canvasContext              = <CanvasRenderingContext2D>canvasTag.getContext("2d");
        }

        /***************************************************************************************************************
        *   Inits the key system.
        ***************************************************************************************************************/
        private initKeySystem()
        {
            this.keySystem = new MfgKeySystem();
        }

        /***************************************************************************************************************
        *   Inits all items for this level.
        ***************************************************************************************************************/
        private initItems():void
        {
            this.items = [
                new MfgRect( 150, 100, MfgSetting.ITEM_SIZE, MfgSetting.ITEM_SIZE, MfgSetting.ITEM_COLOR ),
                new MfgRect( 350, 180, MfgSetting.ITEM_SIZE, MfgSetting.ITEM_SIZE, MfgSetting.ITEM_COLOR ),
                new MfgRect( 550, 320, MfgSetting.ITEM_SIZE, MfgSetting.ITEM_SIZE, MfgSetting.ITEM_COLOR ),
            ];
        }

        /***************************************************************************************************************
        *   Inits the player for this level.
        ***************************************************************************************************************/
        private initPlayer()
        {
            this.player = new MfgRect( 0, 0, MfgSetting.PLAYER_SIZE, MfgSetting.PLAYER_SIZE, MfgSetting.PLAYER_COLOR );
        }

        /***************************************************************************************************************
        *   Handles one game tick.
        ***************************************************************************************************************/
        private tick=()=>
        {
            Mfg.game.hud.fpsMeter.tickStart();

            this.render();
            this.draw(this.canvasContext);

            Mfg.game.hud.fpsMeter.tick();
        };

        /***************************************************************************************************************
        *   Renders the current game tick.
        ***************************************************************************************************************/
        private render()
        {
            this.handlePlayerKeys();
            this.clipToLevelBounds();

            this.checkObstacleCollisions();
        }

        /***************************************************************************************************************
        *   Draws the level.
        *
        *   @param context The 2D drawing context.
        ***************************************************************************************************************/
        private draw( context:CanvasRenderingContext2D )
        {
            context.clearRect(0, 0, MfgSetting.CANVAS_WIDTH, MfgSetting.CANVAS_HEIGHT);

            for (let item of this.items) {
                item.draw(context);
            }

            this.player.draw(context);
        }

        /***************************************************************************************************************
        *   Returns a collided obstacle in case of a collision.
        ***************************************************************************************************************/
        private checkObstacleCollisions() : void
        {
            for ( let i:number = this.items.length - 1; i >= 0; i-- )
            {
                if ( this.player.collidesWithRect( this.items[ i ] ) )
                {
                    MfgDebug.log("Item picked up!");

                    this.items.splice(i, 1);

                    if ( this.items.length == 0 ) {
                        MfgDebug.log("You picked up all items!");
                    }
                }
            }
        }

        /***************************************************************************************************************
        *   Handle the keys the user has pressed.
        ***************************************************************************************************************/
        private handlePlayerKeys()
        {
            if ( Mfg.game.keySystem.isPressed( MfgKeySystem.KEY_LEFT ) )
            {
                this.player.x -= MfgSetting.PLAYER_SPEED;
            }

            if ( Mfg.game.keySystem.isPressed( MfgKeySystem.KEY_RIGHT ) )
            {
                this.player.x += MfgSetting.PLAYER_SPEED;
            }

            if ( Mfg.game.keySystem.isPressed( MfgKeySystem.KEY_UP ) )
            {
                this.player.y -= MfgSetting.PLAYER_SPEED;
            }

            if ( Mfg.game.keySystem.isPressed( MfgKeySystem.KEY_DOWN ) )
            {
                this.player.y += MfgSetting.PLAYER_SPEED;
            }
        }

        /***************************************************************************************************************
        *   Clip the player to the horizontal level bounds.
        ***************************************************************************************************************/
        private clipToLevelBounds()
        {
            if ( this.player.x < 0                                             ) this.player.x = 0;
            if ( this.player.x > MfgSetting.CANVAS_WIDTH  - this.player.width  ) this.player.x = MfgSetting.CANVAS_WIDTH  - this.player.width;
            if ( this.player.y < 0                                             ) this.player.y = 0;
            if ( this.player.y > MfgSetting.CANVAS_HEIGHT - this.player.height ) this.player.y = MfgSetting.CANVAS_HEIGHT - this.player.height;
        }
    }
