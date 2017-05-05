
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

        /***************************************************************************************************************
        *   Creates a new level instance.
        ***************************************************************************************************************/
        public constructor()
        {
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
            this.player = new MfgPlayer( 0, 0 );
        }

        /***************************************************************************************************************
        *   Draws the level.
        *
        *   @param context The 2D drawing context.
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
