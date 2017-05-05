
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
        /** Heads Up Display. */
        public                  hud                     :MfgHUD                         = null;
        /** Game loop. */
        public                  gameLoop                :MfgGameLoop                    = null;
        /** The player instance. */
        public                  player                  :MfgRect                        = null;
        /** All obstacles the level consists of. */
        private                 items                   :Array<MfgObstacle>             = null;

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

            this.initItems();
            this.initPlayer();

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

        /***************************************************************************************************************
        *   Inits all items for this level.
        ***************************************************************************************************************/
        private initItems():void
        {
            this.items = [
                new MfgObstacle( 150, 100 ),
                new MfgObstacle( 350, 180 ),
                new MfgObstacle( 550, 320 ),
            ];
        }

        /***************************************************************************************************************
        *   Inits the player for this level.
        ***************************************************************************************************************/
        private initPlayer()
        {
            this.player = new MfgRect( 0, 0, MfgSetting.PLAYER_SIZE, MfgSetting.PLAYER_SIZE );
        }

        /***************************************************************************************************************
        *   Renders the current game tick.
        ***************************************************************************************************************/
        public render()
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
        public draw( context:CanvasRenderingContext2D )
        {
            MfgDrawing.fillRect
            (
                context,
                0,
                0,
                Mfg.game.canvas.getWidth(),
                Mfg.game.canvas.getHeight(),
                "white"
            );

            for ( let i:number = 0; i < this.items.length; ++i )
            {
                this.items[ i ].draw( context );
            }

            MfgDrawing.fillRect
            (
                context,
                this.player.x,
                this.player.y,
                this.player.width,
                this.player.height,
                "blue"
            );
        }

        /***************************************************************************************************************
        *   Returns a collided obstacle in case of a collision.
        ***************************************************************************************************************/
        private checkObstacleCollisions() : void
        {
            for ( let i:number = 0; i < this.items.length; i++ )
            {
                if ( !this.items[ i ].picked && this.player.collidesWithRect( this.items[ i ].rect ) )
                {
                    this.items[i].picked = true;

                    MfgDebug.log( 'Item picked up!' );

                    if ( this.checkGameOver() ) {
                        MfgDebug.log( "You picked up all items!" );
                    }
                }
            }
        }

        /***************************************************************************************************************
        *   Checks if all items are picked and outputs a message in this case.
        *
        *   @return boolean
        ***************************************************************************************************************/
        private checkGameOver() : boolean
        {
            for ( let i:number = 0; i < this.items.length; i++ )
            {
                if ( !this.items[ i ].picked )
                {
                    return false;
                }
            }

            return true;
        }

        /***************************************************************************************************************
        *   Handle the keys the user has pressed.
        ***************************************************************************************************************/
        public handlePlayerKeys()
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
        public clipToLevelBounds()
        {
            if ( this.player.x < 0                                             ) this.player.x = 0;
            if ( this.player.x > MfgSetting.CANVAS_WIDTH  - this.player.width  ) this.player.x = MfgSetting.CANVAS_WIDTH  - this.player.width;
            if ( this.player.y < 0                                             ) this.player.y = 0;
            if ( this.player.y > MfgSetting.CANVAS_HEIGHT - this.player.height ) this.player.y = MfgSetting.CANVAS_HEIGHT - this.player.height;
        }
    }
