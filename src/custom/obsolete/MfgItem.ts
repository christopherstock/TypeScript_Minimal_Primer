
    /*******************************************************************************************************************
    *   Represents an obstacle.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgObstacle
    {
        /** The bounding rectangle. */
        public          rect                        :MfgRect                        = null;

        /** Specifies if already being picked by player. */
        public          picked                      :boolean                        = false;

        /***************************************************************************************************************
        *   Creates a new game object.
        *
        *   @param x        Startup position x.
        *   @param y        Startup position y.
        ***************************************************************************************************************/
        public constructor( x:number, y:number )
        {
            this.rect  = new MfgRect( x, y, 50, 50 );
        }

        /***************************************************************************************************************
        *   Draws this sprite for the specified camera context.
        *
        *   @param context The 2D drawing context.
        ***************************************************************************************************************/
        public draw( context:CanvasRenderingContext2D )
        {
            if (this.picked) return;

            MfgDrawing.fillRect
            (
                context,
                this.rect.x,
                this.rect.y,
                this.rect.width,
                this.rect.height,
                "red"
            );
        }
    }
