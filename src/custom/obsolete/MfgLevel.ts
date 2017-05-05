
    /*******************************************************************************************************************
    *   Represents a level setup.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgLevel
    {
        /** The player instance. */
        public                      player          :MfgPlayer                          = null;

        /** All obstacles the level consists of. */
        private                     items           :Array<MfgObstacle>                 = null;

        /** The level width. */
        public                      width           :number                             = 0;

        /** The level height. */
        public                      height          :number                             = 0;

        /***************************************************************************************************************
        *   Creates a new level instance.
        ***************************************************************************************************************/
        public constructor()
        {
            //set level bounds
            this.width  = MfgSetting.LEVEL_WIDTH;
            this.height = MfgSetting.LEVEL_HEIGHT;

            //create items
            this.initItems();

            //create player instance
            this.initPlayer();
        }

        /***************************************************************************************************************
        *   Inits all items for this level.
        ***************************************************************************************************************/
        private initItems():void
        {
            this.items = [
                new MfgObstacle( 350, 350, null ),
                new MfgObstacle( 450, 475, null ),
                new MfgObstacle( 600, 580, null ),
            ];
        }

        /***************************************************************************************************************
        *   Inits the player for this level.
        ***************************************************************************************************************/
        private initPlayer()
        {
            this.player = new MfgPlayer( 0, 0, null );
        }

        /***************************************************************************************************************
        *   Draws the level.
        *
        *   @param context The 2D drawing context.
        *   @param camera  The camera context to use for this drawing operation.
        ***************************************************************************************************************/
        public draw( context:CanvasRenderingContext2D )
        {
            for ( let i:number = 0; i < this.items.length; ++i )
            {
                this.items[ i ].draw( context );
            }

            this.player.draw( context );
        }

        /***************************************************************************************************************
        *   Renders the current level tick.
        ***************************************************************************************************************/
        public render()
        {
            this.player.handlePlayerKeys();
            this.player.clipToLevelBounds();

            this.checkObstacleCollisions();
        }

        /***************************************************************************************************************
        *   Returns a collided obstacle in case of a collision.
        ***************************************************************************************************************/
        private checkObstacleCollisions() : void
        {
            for ( let i:number = 0; i < this.items.length; i++ )
            {
                if ( !this.items[ i ].picked && this.player.rect.collidesWithRect( this.items[ i ].rect ) )
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
    }
