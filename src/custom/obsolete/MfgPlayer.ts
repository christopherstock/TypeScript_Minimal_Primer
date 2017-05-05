
    /*******************************************************************************************************************
    *   Represents the player.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgPlayer
    {
        /** The bounding rectangle. */
        public          rect                        :MfgRect                        = null;

        /***************************************************************************************************************
        *   Creates a new player instance.
        *
        *   @param x     Startup position x.
        *   @param y     Startup position y.
        ***************************************************************************************************************/
        public constructor( x:number, y:number )
        {
            this.rect  = new MfgRect( x, y, 50, 50 );
        }

        /***************************************************************************************************************
        *   Draws the player.
        *
        *   @param context The 2D drawing context.
        ***************************************************************************************************************/
        public draw( context:CanvasRenderingContext2D )
        {
            MfgDrawing.fillRect
            (
                context,
                this.rect.x,
                this.rect.y,
                this.rect.width,
                this.rect.height,
                "blue"
            );
        }

        /***************************************************************************************************************
        *   Handle the keys the user has pressed.
        ***************************************************************************************************************/
        public handlePlayerKeys()
        {
            if ( Mfg.game.keySystem.isPressed( MfgKeySystem.KEY_LEFT ) )
            {
                this.rect.x -= MfgSetting.PLAYER_SPEED;
            }

            if ( Mfg.game.keySystem.isPressed( MfgKeySystem.KEY_RIGHT ) )
            {
                this.rect.x += MfgSetting.PLAYER_SPEED;
            }

            if ( Mfg.game.keySystem.isPressed( MfgKeySystem.KEY_UP ) )
            {
                this.rect.y -= MfgSetting.PLAYER_SPEED;
            }

            if ( Mfg.game.keySystem.isPressed( MfgKeySystem.KEY_DOWN ) )
            {
                this.rect.y += MfgSetting.PLAYER_SPEED;
            }
        }

        /***************************************************************************************************************
        *   Clip the player to the horizontal level bounds.
        ***************************************************************************************************************/
        public clipToLevelBounds()
        {
            if ( this.rect.x < 0                                            ) this.rect.x = 0;
            if ( this.rect.x > MfgSetting.CANVAS_WIDTH  - this.rect.width   ) this.rect.x = MfgSetting.CANVAS_WIDTH  - this.rect.width;
            if ( this.rect.y < 0                                            ) this.rect.y = 0;
            if ( this.rect.y > MfgSetting.CANVAS_HEIGHT - this.rect.height  ) this.rect.y = MfgSetting.CANVAS_HEIGHT - this.rect.height;
        }
    }
