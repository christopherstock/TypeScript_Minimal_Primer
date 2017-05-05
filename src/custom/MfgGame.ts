
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
        /** The player instance. */
        public                  player                  :MfgRect                        = null;
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
        public tick=()=>
        {
            Mfg.game.hud.fpsMeter.tickStart();

            this.render();
            this.draw( Mfg.game.canvas.getContext() );

            Mfg.game.hud.fpsMeter.tick();
        };

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
            context.clearRect(0, 0, MfgSetting.CANVAS_WIDTH, MfgSetting.CANVAS_HEIGHT);

            // TODO to foreach!
            for ( let i:number = 0; i < this.items.length; ++i ) {
                this.items[i].draw(context);
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
                    MfgDebug.log( 'Item picked up!' );

                    this.items.splice(i, 1);

                    if ( this.items.length == 0 ) {
                        MfgDebug.log( "You picked up all items!" );
                    }
                }
            }
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
